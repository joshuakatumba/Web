// Supabase Edge Function: send-enquiry-email
// Sends an email notification via Resend when a new contact enquiry is saved.
// Required Supabase Secrets (set via `supabase secrets set`):
//   RESEND_API_KEY=re_...
//   NOTIFICATION_TO_EMAIL=owner@yourbusiness.example
// Optional:
//   NOTIFICATION_FROM_EMAIL=Website Enquiries <onboarding@resend.dev>

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EnquiryPayload {
  full_name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const body: EnquiryPayload = await req.json();
    const fullName = body.full_name?.trim() || '';
    const email = body.email?.trim() || '';
    const subject = body.subject?.trim() || '';
    const message = body.message?.trim() || '';

    if (!fullName || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ sent: false, reason: 'Missing required enquiry fields.' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const toEmail = Deno.env.get('NOTIFICATION_TO_EMAIL');
    const fromEmail =
      Deno.env.get('NOTIFICATION_FROM_EMAIL') || 'Website Enquiries <onboarding@resend.dev>';

    if (!resendApiKey || !toEmail) {
      return new Response(
        JSON.stringify({
          sent: false,
          reason: 'Email notification credentials are not configured.',
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New Website Enquiry: ${subject}`,
        html: `
          <h2>New Customer Enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      return new Response(
        JSON.stringify({
          sent: false,
          reason: `Resend API error (${resendResponse.status}): ${errorText}`,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        },
      );
    }

    const data = await resendResponse.json();
    return new Response(JSON.stringify({ sent: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        sent: false,
        reason: err instanceof Error ? err.message : 'Unexpected error',
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    );
  }
});

