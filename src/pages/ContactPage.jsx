import { useSearchParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { businessConfig } from '../config/businessConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function ContactPage() {
  useDocumentTitle('Contact');

  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || '';
  const { contact } = businessConfig;

  return (
    <>
      {/* Page Header */}
      <section className="py-8 bg-light border-bottom">
        <div className="container">
          <h1 className="mb-0">{contact.pageTitle}</h1>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-10">
        <div className="container">
          <div className="row gy-8 justify-content-between">
            {/* Contact Information */}
            <div className="col-12 col-lg-4">
              {contact.sideImage && (
                <img
                  src={contact.sideImage}
                  alt={contact.sideImageAlt || contact.pageTitle}
                  className="img-fluid contact-side-img mb-6"
                />
              )}

              <aside aria-label="Business contact information">
                {contact.phone && (
                  <div className="mb-5">
                    <h6 className="heading-xxs mb-2">
                      <i className="fe fe-phone text-primary me-2" aria-hidden="true" />
                      {contact.phoneLabel}
                    </h6>
                    <p className="text-gray-500 mb-0">
                      <a
                        className="text-reset text-decoration-none"
                        href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                      >
                        {contact.phone}
                      </a>
                    </p>
                  </div>
                )}

                {contact.email && (
                  <div className="mb-5">
                    <h6 className="heading-xxs mb-2">
                      <i className="fe fe-mail text-primary me-2" aria-hidden="true" />
                      {contact.emailLabel}
                    </h6>
                    <p className="text-gray-500 mb-0">
                      <a
                        className="text-reset text-decoration-none"
                        href={`mailto:${contact.email}`}
                      >
                        {contact.email}
                      </a>
                    </p>
                  </div>
                )}

                {contact.address && (
                  <div className="mb-5">
                    <h6 className="heading-xxs mb-2">
                      <i className="fe fe-map-pin text-primary me-2" aria-hidden="true" />
                      {contact.addressLabel}
                    </h6>
                    <p className="text-gray-500 mb-0">{contact.address}</p>
                  </div>
                )}

                {Array.isArray(contact.hours) && contact.hours.length > 0 && (
                  <div className="mb-5">
                    <h6 className="heading-xxs mb-2">
                      <i className="fe fe-clock text-primary me-2" aria-hidden="true" />
                      {contact.hoursLabel}
                    </h6>
                    <ul className="list-unstyled fs-sm text-gray-500 mb-0">
                      {contact.hours.map((entry) => (
                        <li className="mb-2 d-flex justify-content-between" key={entry.days}>
                          <span>{entry.days}</span>
                          <span className="fw-medium text-dark">{entry.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {Array.isArray(contact.socialLinks) && contact.socialLinks.length > 0 && (
                  <div>
                    <h6 className="heading-xxs mb-3">{contact.channelsLabel}</h6>
                    <div className="d-flex gap-3">
                      {contact.socialLinks.map((social) => (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-outline-dark"
                        >
                          <i className={`fe ${social.icon} me-1`} aria-hidden="true" />
                          {social.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>

            {/* Enquiry Form */}
            <div className="col-12 col-lg-7">
              <h2 className="h4 mb-5">{contact.formTitle}</h2>
              <ContactForm initialSubject={initialSubject} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
