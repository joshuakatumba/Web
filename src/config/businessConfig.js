/**
 * Configurable Business Details & Site Copy
 * ---------------------------------------------------------------------------
 * Update this file to customize the business identity, navigation, headings,
 * imagery, and contact details without modifying page components.
 *
 * Set optional contact fields to `null` or `""` to hide them gracefully.
 */

export const businessConfig = {
  brand: {
    name: 'Your Business Name',
    shortTagline: 'Quality services and dependable client support.',
    announcementText: 'Accepting new client enquiries',
    logoText: 'Your Business.',
    primaryCtaLabel: 'Contact Us',
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
    contactTitle: 'Contact',
  },

  hero: {
    headline: 'Reliable Services for Your Business',
    description: 'Thoughtful work and clear communication from start to finish.',
    primaryCtaLabel: 'View Services',
    primaryCtaTo: '/services',
    secondaryCtaLabel: 'Contact Us',
    secondaryCtaTo: '/contact',
    heroImage: '/images/covers/cover-1.jpg',
    heroImageAlt: 'Featured business showcase',
  },

  homeVisualTiles: [
    {
      title: 'About Us',
      to: '/about',
      image: '/images/covers/cover-2.jpg',
      imageAlt: 'About our business',
    },
    {
      title: 'Our Services',
      to: '/services',
      image: '/images/covers/cover-3.jpg',
      imageAlt: 'Explore our services',
    },
    {
      title: 'Get in Touch',
      to: '/contact',
      image: '/images/covers/cover-4.jpg',
      imageAlt: 'Contact our team',
    },
  ],

  homeIntro: {
    title: 'Who We Are',
    description:
      'Every project starts by listening carefully to what you need. Update this introduction in src/config/businessConfig.js with your own business overview.',
    ctaLabel: 'Learn More',
    ctaTo: '/about',
    image: '/images/covers/cover-25.jpg',
    imageAlt: 'Our workspace',
    secondaryImage: '/images/covers/cover-26.jpg',
    secondaryImageAlt: 'Our approach',
  },

  homeServices: {
    title: 'Our Services',
    emptyMessage: 'Services are currently being updated.',
    ctaLabel: 'All Services',
    ctaTo: '/services',
  },

  homeContactCta: {
    title: 'Ready to Start?',
    description: 'Send us a message and our team will respond promptly.',
    ctaLabel: 'Contact Us',
    ctaTo: '/contact',
  },

  reasonsToChoose: [
    {
      id: 'clarity',
      icon: 'fe-compass',
      title: 'Clear Communication',
      description: 'Direct updates at every stage.',
    },
    {
      id: 'quality',
      icon: 'fe-check-circle',
      title: 'Dependable Delivery',
      description: 'Consistent standards on every project.',
    },
    {
      id: 'tailored',
      icon: 'fe-sliders',
      title: 'Tailored Approach',
      description: 'Solutions shaped around your goals.',
    },
    {
      id: 'support',
      icon: 'fe-message-square',
      title: 'Dedicated Support',
      description: 'Responsive help whenever you need it.',
    },
  ],

  about: {
    pageTitle: 'About Us',
    headerImage: '/images/covers/cover-4.jpg',
    backgroundTitle: 'Our Business',
    backgroundParagraphs: [
      'Configure your business background here in src/config/businessConfig.js. Share who you serve and what guides your work.',
    ],
    backgroundImage: '/images/covers/cover-3.jpg',
    backgroundImageAlt: 'About our business',
    missionTitle: 'Our Mission',
    mission:
      'To provide dependable, thoughtfully crafted services with integrity and clarity.',
    missionImage: '/images/products/product-13.jpg',
    missionImageAlt: 'Our mission',
    visionTitle: 'Our Vision',
    vision:
      'To be a trusted partner known for consistent quality and honest communication.',
    visionImage: '/images/products/product-14.jpg',
    visionImageAlt: 'Our vision',
    valuesTitle: 'Core Values',
    coreValues: [
      {
        title: 'Integrity',
        description: 'Honest advice and transparent expectations.',
      },
      {
        title: 'Craftsmanship',
        description: 'Careful attention to every detail.',
      },
      {
        title: 'Responsiveness',
        description: 'Timely answers when you reach out.',
      },
      {
        title: 'Respect',
        description: 'Valuing your time and unique needs.',
      },
    ],
    businessDetails: [
      { label: 'Service Area', value: 'Local & Remote' },
      { label: 'Response Time', value: '1 to 2 business days' },
    ],
    ctaTitle: 'Interested in Working Together?',
    ctaPrimaryLabel: 'View Services',
    ctaPrimaryTo: '/services',
    ctaSecondaryLabel: 'Contact Us',
    ctaSecondaryTo: '/contact',
  },

  servicesPage: {
    pageTitle: 'Services',
    enquireButtonLabel: 'Enquire',
    emptyTitle: 'No Services Found',
    emptyDescription: 'No services match the selected category.',
    galleryImages: [
      { src: '/images/products/product-15.jpg', alt: 'Service showcase 1' },
      { src: '/images/products/product-16.jpg', alt: 'Service showcase 2' },
      { src: '/images/products/product-17.jpg', alt: 'Service showcase 3' },
      { src: '/images/products/product-18.jpg', alt: 'Service showcase 4' },
    ],
    customBannerTitle: 'Need Something Specific?',
    customBannerCtaLabel: 'Send an Enquiry',
  },

  contact: {
    pageTitle: 'Contact',
    formTitle: 'Send a Message',
    sideImage: '/images/covers/cover-26.jpg',
    sideImageAlt: 'Contact our team',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Address',
    hoursLabel: 'Hours',
    channelsLabel: 'Channels',
    email: 'contact@yourbusiness.example',
    phone: '+1 (000) 000 0000',
    address: '123 Business Street, Suite 100, Your City',
    hours: [
      { days: 'Monday to Friday', time: '9:00 AM to 5:00 PM' },
      { days: 'Saturday and Sunday', time: 'By Appointment' },
    ],
    socialLinks: [
      // Add your real URLs here when available, or leave empty to hide
      // { name: 'LinkedIn', href: 'https://linkedin.com/company/your-business', icon: 'fe-linkedin' },
      // { name: 'Instagram', href: 'https://instagram.com/your-business', icon: 'fe-instagram' },
    ],
  },
};
