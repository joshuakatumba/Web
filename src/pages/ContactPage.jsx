import { Link, useSearchParams } from 'react-router-dom';
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
          <nav aria-label="breadcrumb" className="mb-3">
            <ol className="breadcrumb mb-0 fs-xs">
              <li className="breadcrumb-item">
                <Link className="text-gray-500 text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-dark" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
          <h1 className="mb-3">{contact.pageTitle}</h1>
          <p className="fs-lg text-gray-500 mb-0 col-lg-8 px-0">{contact.lead}</p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-10">
        <div className="container">
          <div className="row gy-8 justify-content-between">
            {/* Contact Information */}
            <div className="col-12 col-lg-4">
              <aside aria-label="Business contact information">
                {contact.phone && (
                  <div className="mb-6">
                    <h6 className="heading-xxs mb-3">
                      <i className="fe fe-phone text-primary me-2" aria-hidden="true" />
                      Call Us
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
                  <div className="mb-6">
                    <h6 className="heading-xxs mb-3">
                      <i className="fe fe-mail text-primary me-2" aria-hidden="true" />
                      Email Us
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
                  <div className="mb-6">
                    <h6 className="heading-xxs mb-3">
                      <i className="fe fe-map-pin text-primary me-2" aria-hidden="true" />
                      Visit Us
                    </h6>
                    <p className="text-gray-500 mb-0">{contact.address}</p>
                  </div>
                )}

                {Array.isArray(contact.hours) && contact.hours.length > 0 && (
                  <div className="mb-6">
                    <h6 className="heading-xxs mb-3">
                      <i className="fe fe-clock text-primary me-2" aria-hidden="true" />
                      Business Hours
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
                    <h6 className="heading-xxs mb-3">Other Channels</h6>
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
              <div className="card border p-6 p-md-8">
                <h2 className="h4 mb-2">Send an Enquiry</h2>
                <p className="fs-sm text-gray-500 mb-6">
                  All fields marked with <span className="text-danger">*</span> are required.
                </p>
                <ContactForm initialSubject={initialSubject} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

