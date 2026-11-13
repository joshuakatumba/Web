/**
 * Crestline Home & Interior Services Configuration
 * ---------------------------------------------------------------------------
 * Update business identity, navigation, headings, imagery, and contact details
 * here without modifying page components.
 */

export const businessConfig = {
  brand: {
    name: 'Crestline',
    shortTagline: 'Home and interior services crafted for calm, functional living.',
    announcementText: 'Crestline Home & Interior Services',
    logoText: 'Crestline',
    primaryCtaLabel: 'Book Consultation',
    primaryCtaTo: '/contact',
  },

  navigation: [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ],

  footer: {
    navigationTitle: 'Explore',
    contactTitle: 'Studio Contact',
  },

  hero: {
    headline: 'Spaces Shaped Around How You Live',
    description:
      'Thoughtful home design, renovations, and custom joinery built for everyday comfort.',
    primaryCtaLabel: 'View Services',
    primaryCtaTo: '/services',
    secondaryCtaLabel: 'Get in Touch',
    secondaryCtaTo: '/contact',
    heroImage: '/images/crestline/hero-living.jpg',
    heroImageAlt: 'Sunlit living room designed by Crestline',
  },

  homeVisualTiles: [
    {
      title: 'About Crestline',
      to: '/about',
      image: '/images/crestline/tile-about.jpg',
      imageAlt: 'Natural stone, oak, and linen material samples',
    },
    {
      title: 'Our Services',
      to: '/services',
      image: '/images/crestline/tile-services.jpg',
      imageAlt: 'Calm dining space with solid timber table',
    },
    {
      title: 'Start a Project',
      to: '/contact',
      image: '/images/crestline/tile-contact.jpg',
      imageAlt: 'Crestline studio desk with architectural plans',
    },
  ],

  homeIntro: {
    title: 'Crafted Interiors Without the Noise',
    description:
      'At Crestline, every room starts with natural light, honest materials, and careful planning. We guide homeowners from early concepts through final installation.',
    ctaLabel: 'About Crestline',
    ctaTo: '/about',
    image: '/images/crestline/tile-about.jpg',
    imageAlt: 'Material selection at Crestline',
    secondaryImage: '/images/crestline/service-styling.jpg',
    secondaryImageAlt: 'Warm bedroom styling by Crestline',
  },

  homeServices: {
    title: 'Our Services',
    emptyMessage: 'Services are currently being updated.',
    ctaLabel: 'All Services',
    ctaTo: '/services',
  },

  homeContactCta: {
    title: 'Planning a Home Project?',
    description: 'Share your space and timeline with our studio.',
    ctaLabel: 'Contact Crestline',
    ctaTo: '/contact',
  },

  reasonsToChoose: [
    {
      id: 'materials',
      icon: 'fe-layers',
      title: 'Honest Materials',
      description: 'Timber, stone, and natural textiles chosen to age well.',
    },
    {
      id: 'clarity',
      icon: 'fe-compass',
      title: 'Clear Planning',
      description: 'Structured schedules and transparent updates at every step.',
    },
    {
      id: 'craft',
      icon: 'fe-check-circle',
      title: 'Careful Execution',
      description: 'Experienced tradespeople focused on clean, lasting finishes.',
    },
    {
      id: 'care',
      icon: 'fe-home',
      title: 'Lived In Comfort',
      description: 'Rooms designed for real daily routines, not just photos.',
    },
  ],

  about: {
    pageTitle: 'About Crestline',
    headerImage: '/images/crestline/tile-services.jpg',
    backgroundTitle: 'Built for Everyday Living',
    backgroundParagraphs: [
      'Crestline is a home and interior services studio focused on practical layouts, warm natural finishes, and calm, well ordered spaces.',
      'We work closely with homeowners on single room updates, kitchen and bath renovations, and custom woodwork tailored to each property.',
    ],
    backgroundImage: '/images/crestline/tile-about.jpg',
    backgroundImageAlt: 'Craftsman selecting stone and timber samples',
    missionTitle: 'Our Mission',
    mission:
      'To create welcoming, durable interiors through thoughtful design and dependable craftsmanship.',
    missionImage: '/images/crestline/service-design.jpg',
    missionImageAlt: 'Sunlit living room interior',
    visionTitle: 'Our Vision',
    vision:
      'Homes that feel grounded, effortless to live in, and thoughtfully finished in every detail.',
    visionImage: '/images/crestline/service-carpentry.jpg',
    visionImageAlt: 'Custom white oak joinery',
    valuesTitle: 'Core Values',
    coreValues: [
      {
        title: 'Integrity',
        description: 'Clear scopes, realistic timelines, and honest guidance.',
      },
      {
        title: 'Craftsmanship',
        description: 'Clean joinery, crisp lines, and lasting materials.',
      },
      {
        title: 'Simplicity',
        description: 'Uncluttered spaces that let light and texture breathe.',
      },
      {
        title: 'Stewardship',
        description: 'Respect for your home, budget, and daily routine.',
      },
    ],
    businessDetails: [
      { label: 'Focus', value: 'Residential Interiors & Renovations' },
      { label: 'Consultations', value: 'In Studio & On Site' },
      { label: 'Response Time', value: 'Within 1 to 2 business days' },
    ],
    ctaTitle: 'Ready to Discuss Your Space?',
    ctaPrimaryLabel: 'Explore Services',
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
      { src: '/images/crestline/service-design.jpg', alt: 'Living room space planning' },
      { src: '/images/crestline/service-renovation.jpg', alt: 'Modern kitchen renovation' },
      { src: '/images/crestline/service-carpentry.jpg', alt: 'Custom oak cabinetry' },
      { src: '/images/crestline/service-styling.jpg', alt: 'Bedroom linen and lighting styling' },
    ],
    customBannerTitle: 'Have a Custom Home Project in Mind?',
    customBannerCtaLabel: 'Book a Consultation',
  },

  contact: {
    pageTitle: 'Contact Crestline',
    formTitle: 'Send a Message',
    sideImage: '/images/crestline/tile-contact.jpg',
    sideImageAlt: 'Crestline design studio desk with floor plans',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    addressLabel: 'Studio',
    hoursLabel: 'Hours',
    channelsLabel: 'Channels',
    email: 'hello@crestlineinteriors.example',
    phone: '+1 (555) 234 5678',
    address: '420 Oakwood Avenue, Suite 2B',
    hours: [
      { days: 'Monday to Friday', time: '9:00 AM to 5:30 PM' },
      { days: 'Saturday', time: '10:00 AM to 2:00 PM' },
    ],
    socialLinks: [],
  },
};
