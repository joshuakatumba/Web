import { servicesConfig } from '../config/servicesConfig';
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient';

/**
 * Fetches active services from Supabase `public.services` when available,
 * falling back cleanly to `src/config/servicesConfig.js`.
 */
export async function fetchServices() {
  if (!isSupabaseConfigured || !supabase) {
    return servicesConfig;
  }

  try {
    const { data, error } = await supabase
      .from('services')
      .select('id, slug, name, category, icon, image, image_alt, summary, details, enquiry_subject')
      .eq('is_active', true)
      .order('sort_order', { ascending: true });

    if (error || !Array.isArray(data) || data.length === 0) {
      return servicesConfig;
    }

    return data.map((row) => ({
      id: row.slug || row.id,
      name: row.name,
      category: row.category || '',
      icon: row.icon || 'fe-briefcase',
      image: row.image || '',
      imageAlt: row.image_alt || row.name,
      summary: row.summary || '',
      details: Array.isArray(row.details) ? row.details : [],
      enquirySubject: row.enquiry_subject || `Enquiry: ${row.name}`,
    }));
  } catch {
    return servicesConfig;
  }
}
