/**
 * Configurable Business Details & Site Copy
 * ---------------------------------------------------------------------------
 * Update this file to customize the business identity, navigation, page
 * headings, about content, and contact details without modifying components.
 *
 * Set optional contact fields to `null` or `""` to hide them gracefully.
 */

export const businessConfig = {
  brand: {
    name: 'Your Business Name',
    shortTagline: 'Quality-Focused Services & Client Solutions',
    announcementText: 'Welcome — Accepting new client enquiries',
    logoText: 'Your Business.',
    primaryCtaLabel: 'Enquire Now',
    primaryCtaTo: '/contact',
  },

  navigation: [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ],

  footer: {
    navigationTitle: 'Navigation',
    contactTitle: 'Contact Details',
  },

  hero: {
    eyebrow: 'Tailored Solutions for Modern Needs',
    headline: 'Reliable Services Built Around Your Goals',
    description:
      'We partner with individuals and growing businesses to deliver thoughtful, dependable work with clear communication from first enquiry to completion.',
    primaryCtaLabel: 'Explore Our Services',
    primaryCtaTo: '/services',
    secondaryCtaLabel: 'Get in Touch',
    secondaryCtaTo: '/contact',
    heroImage: '/images/covers/cover-1.jpg',
    heroImageAlt: 'Featured business showcase',
  },

  homeIntro: {
    eyebrow: 'Who We Are',
    title: 'Practical Expertise. Personal Attention.',
    description:
      'Every project begins with listening carefully to what you need. Update this section in src/config/businessConfig.js with your specific business introduction and key offerings.',
    ctaLabel: 'Learn More About Us',
    ctaTo: '/about',
    image: '/images/covers/cover-2.jpg',
    imageAlt: 'Our workspace and approach',
  },

  homeServices: {
    eyebrow: 'What We Offer',
    title: 'Our Core Services',
    description:
      'Explore our services below or send an enquiry to discuss your specific needs.',
    emptyMessage: 'Services are currently being updated.',
    ctaLabel: 'View All Services',
    ctaTo: '/services',
  },

  homeContactCta: {
    eyebrow: 'Start a Conversation',
    title: 'Ready to Discuss Your Requirements?',
    description:
      'Send us an enquiry online or reach out using our direct contact channels.',
    ctaLabel: 'Contact Us Today',
    ctaTo: '/contact',
  },

  reasonsToChoose: [
    {
      id: 'clarity',
      icon: 'fe-compass',
      title: 'Clear Communication',
      description:
        'Direct, responsive updates at every stage so you always know what is happening next.',
    },
    {
      id: 'quality',
      icon: 'fe-check-circle',
      title: 'Dependable Delivery',
      description:
        'Consistent standards and careful attention to detail across every engagement.',
    },
    {
      id: 'tailored',
      icon: 'fe-sliders',
      title: 'Tailored Approach',
      description:
        'Practical solutions shaped around your actual requirements rather than one-size-fits-all templates.',
    },
    {
      id: 'support',
      icon: 'fe-message-square',
      title: 'Dedicated Support',
      description:
        'Accessible assistance before, during, and after your project or service request.',
    },
  ],

  about: {
    pageTitle: 'About Us',
    lead: 'Learn more about our purpose, how we work, and the principles that guide every client relationship.',
    storyEyebrow: 'Our Story',
    backgroundTitle: 'Business Background',
    backgroundParagraphs: [
      'Configure your business background here in src/config/businessConfig.js. Share how your business started, who you serve, and what motivates your work.',
      'This section is intentionally structured so you can present an authentic story without fabricated milestones or unverified claims.',
    ],
    backgroundImage: '/images/covers/cover-3.jpg',
    backgroundImageAlt: 'About our business',
    missionTitle: 'Our Mission',
    mission:
      'To provide dependable, thoughtfully crafted services that solve real problems for our clients with integrity and clarity.',
    visionTitle: 'Our Vision',
    vision:
      'To be a trusted long-term partner known for consistent quality, honest communication, and measurable value.',
    valuesEyebrow: 'Principles',
    valuesTitle: 'Our Core Values',
    coreValues: [
      {
        title: 'Integrity',
        description: 'Honest recommendations, transparent expectations, and accountable follow-through.',
      },
      {
        title: 'Craftsmanship',
        description: 'Careful execution and pride in the details that make work last.',
      },
      {
        title: 'Responsiveness',
        description: 'Timely replies and proactive communication when you need answers.',
      },
      {
        title: 'Respect',
        description: 'Valuing your time, budget, and unique business context.',
      },
    ],
    businessDetails: [
      { label: 'Business Type', value: 'Configurable in businessConfig.js' },
      { label: 'Service Area', value: 'Local & Remote (Configure your region)' },
      { label: 'Enquiry Response', value: 'Within 1–2 business days' },
    ],
    ctaTitle: 'Interested in Working Together?',
    ctaDescription: 'Browse our services or contact us directly with your questions.',
    ctaPrimaryLabel: 'View Services',
    ctaPrimaryTo: '/services',
    ctaSecondaryLabel: 'Contact Us',
    ctaSecondaryTo: '/contact',
  },

  servicesPage: {
    pageTitle: 'Our Services',
    lead: 'Explore our range of offerings below. Select any service to send a tailored enquiry.',
    enquireButtonLabel: 'Enquire About This Service',
    emptyTitle: 'No Services Found',
    emptyDescription:
      'No services match the selected filter. Please view all services or contact us for custom requests.',
    customBannerTitle: 'Need Something Specific?',
    customBannerDescription:
      'If your requirements fall outside our standard service list, reach out and let us know what you are looking for.',
    customBannerCtaLabel: 'Send a Custom Enquiry',
  },

  contact: {
    pageTitle: 'Contact Us',
    lead: 'Have a question or ready to discuss a service? Send us a message using the form below and our team will respond promptly.',
    formTitle: 'Send an Enquiry',
    phoneLabel: 'Call Us',
    emailLabel: 'Email Us',
    addressLabel: 'Visit Us',
    hoursLabel: 'Business Hours',
    channelsLabel: 'Other Channels',
    email: 'contact@yourbusiness.example',
    phone: '+1 (000) 000-0000',
    address: '123 Business Street, Suite 100, Your City',
    hours: [
      { days: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
      { days: 'Saturday – Sunday', time: 'By Appointment / Closed' },
    ],
    socialLinks: [
      // Add your real URLs here when available, or leave empty to hide
      // { name: 'LinkedIn', href: 'https://linkedin.com/company/your-business', icon: 'fe-linkedin' },
      // { name: 'Instagram', href: 'https://instagram.com/your-business', icon: 'fe-instagram' },
    ],
  },
};
