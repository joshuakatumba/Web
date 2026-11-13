import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const COOLDOWN_MS = 15000;
const LAST_SUBMIT_KEY = 'last_enquiry_submitted_at';

export function validateContactForm(values) {
  const errors = {};
  const fullName = (values.fullName || '').trim();
  const email = (values.email || '').trim();
  const subject = (values.subject || '').trim();
  const message = (values.message || '').trim();

  if (!fullName) {
    errors.fullName = 'Please enter your full name.';
  } else if (fullName.length < 2) {
    errors.fullName = 'Full name must be at least 2 characters.';
  } else if (fullName.length > 120) {
    errors.fullName = 'Full name must be 120 characters or fewer.';
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_REGEX.test(email) || email.length > 254) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!subject) {
    errors.subject = 'Please enter a subject for your enquiry.';
  } else if (subject.length < 2) {
    errors.subject = 'Subject must be at least 2 characters.';
  } else if (subject.length > 200) {
    errors.subject = 'Subject must be 200 characters or fewer.';
  }

  if (!message) {
    errors.message = 'Please enter your message.';
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  } else if (message.length > 5000) {
    errors.message = 'Message must be 5000 characters or fewer.';
  }

  return errors;
}

export async function submitContactEnquiry(values) {
  // Honeypot spam check: silently pretend success if bot filled hidden field
  if (values.website && values.website.trim().length > 0) {
    return {
      ok: true,
      savedToDatabase: true,
      emailNotified: false,
      message: 'Thank you. Your enquiry has been received.',
    };
  }

  // Basic client-side rate limiting
  try {
    const lastSubmitted = Number(sessionStorage.getItem(LAST_SUBMIT_KEY) || '0');
    const elapsed = Date.now() - lastSubmitted;
    if (lastSubmitted > 0 && elapsed < COOLDOWN_MS) {
      const remaining = Math.ceil((COOLDOWN_MS - elapsed) / 1000);
      return {
        ok: false,
        savedToDatabase: false,
        error: `Please wait ${remaining} seconds before submitting another enquiry.`,
      };
    }
  } catch {
    // Ignore sessionStorage errors in restricted browser modes
  }

  if (!isSupabaseConfigured || !supabase) {
    return {
      ok: false,
      savedToDatabase: false,
      error:
        'Enquiry service is not configured yet. Please set VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY.',
    };
  }

  const payload = {
    full_name: values.fullName.trim(),
    email: values.email.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  };

  // Insert without .select() because anon role has INSERT-only RLS policy
  const { error: dbError } = await supabase.from('contact_messages').insert([payload]);

  if (dbError) {
    console.error('Contact enquiry submission error:', dbError.message);
    return {
      ok: false,
      savedToDatabase: false,
      error:
        'We could not submit your enquiry right now. Please try again shortly or reach us directly by email.',
      technicalDetails: dbError.message,
    };
  }

  try {
    sessionStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));
  } catch {
    // Ignore sessionStorage errors
  }

  // Optional server-side Resend email notification via Supabase Edge Function.
  // Database submission must never fail if email notification is unavailable.
  let emailNotified = false;
  try {
    const { data, error: fnError } = await supabase.functions.invoke('send-enquiry-email', {
      body: payload,
    });
    if (!fnError && data?.sent) {
      emailNotified = true;
    }
  } catch {
    emailNotified = false;
  }

  return {
    ok: true,
    savedToDatabase: true,
    emailNotified,
    message: 'Thank you! Your enquiry has been saved and our team will be in touch soon.',
  };
}

