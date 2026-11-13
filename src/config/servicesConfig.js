/**
 * Configurable Services Catalog
 * ---------------------------------------------------------------------------
 * Add, edit, or remove services here without modifying the Services or Home
 * page components. Pricing is intentionally omitted unless configured.
 */

export const servicesConfig = [
  {
    id: 'consultation-strategy',
    name: 'Consultation & Planning',
    category: 'Advisory',
    icon: 'fe-clipboard',
    image: '/images/products/product-1.jpg',
    imageAlt: 'Consultation and planning service',
    summary:
      'Structured discovery sessions to assess your current needs, clarify priorities, and outline an actionable roadmap.',
    details: [
      'Initial requirements review',
      'Practical scope and timeline recommendations',
      'Clear written next steps',
    ],
    enquirySubject: 'Enquiry: Consultation & Planning',
  },
  {
    id: 'core-service-delivery',
    name: 'Core Service Delivery',
    category: 'Execution',
    icon: 'fe-briefcase',
    image: '/images/products/product-2.jpg',
    imageAlt: 'Core service delivery',
    summary:
      'End-to-end execution of your primary project requirements with regular progress check-ins and quality review.',
    details: [
      'Dedicated point of contact',
      'Milestone-based progress updates',
      'Thorough quality verification before handover',
    ],
    enquirySubject: 'Enquiry: Core Service Delivery',
  },
  {
    id: 'custom-solutions',
    name: 'Tailored Solutions',
    category: 'Bespoke',
    icon: 'fe-layers',
    image: '/images/products/product-3.jpg',
    imageAlt: 'Tailored solutions service',
    summary:
      'Flexible engagements designed around unique operational workflows, specialized specifications, or custom requests.',
    details: [
      'Adapted to your existing tools and processes',
      'Collaborative review and refinement',
      'Documentation for ongoing use',
    ],
    enquirySubject: 'Enquiry: Tailored Solutions',
  },
  {
    id: 'ongoing-support',
    name: 'Ongoing Maintenance & Support',
    category: 'Support',
    icon: 'fe-shield',
    image: '/images/products/product-4.jpg',
    imageAlt: 'Ongoing maintenance and support',
    summary:
      'Reliable post-delivery assistance, periodic check-ups, and responsive troubleshooting to keep things running smoothly.',
    details: [
      'Priority enquiry handling',
      'Routine updates and preventative checks',
      'Flexible support arrangements',
    ],
    enquirySubject: 'Enquiry: Ongoing Maintenance & Support',
  },
];

