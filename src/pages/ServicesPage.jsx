import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesConfig } from '../config/servicesConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function ServicesPage() {
  useDocumentTitle('Services');

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = new Set(servicesConfig.map((s) => s.category).filter(Boolean));
    return ['All', ...Array.from(unique)];
  }, []);

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All') {
      return servicesConfig;
    }
    return servicesConfig.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

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
                Services
              </li>
            </ol>
          </nav>
          <h1 className="mb-3">Our Services</h1>
          <p className="fs-lg text-gray-500 mb-0 col-lg-8 px-0">
            Explore our range of offerings below. Select any service to send a tailored enquiry.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-10">
        <div className="container">
          {categories.length > 1 && (
            <div className="d-flex flex-wrap gap-2 mb-7" role="group" aria-label="Filter services">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    className={`btn btn-sm ${isActive ? 'btn-dark' : 'btn-outline-dark'}`}
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={isActive}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          )}

          {filteredServices.length === 0 ? (
            <div className="card border p-8 text-center">
              <h5 className="mb-2">No Services Found</h5>
              <p className="text-muted mb-4">
                No services match the selected filter. Please view all services or contact us for
                custom requests.
              </p>
              <div>
                <button
                  type="button"
                  className="btn btn-outline-dark me-2"
                  onClick={() => setSelectedCategory('All')}
                >
                  Show All Services
                </button>
                <Link className="btn btn-dark" to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <div className="row gy-6">
              {filteredServices.map((service) => (
                <div className="col-12 col-md-6" key={service.id}>
                  <div className="card border h-100">
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.imageAlt || service.name}
                        className="card-img-top service-card-img"
                      />
                    )}
                    <div className="card-body d-flex flex-column p-6">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        {service.category && (
                          <span className="heading-xxs text-primary">{service.category}</span>
                        )}
                        {service.icon && (
                          <i className={`fe ${service.icon} text-gray-400`} aria-hidden="true" />
                        )}
                      </div>

                      <h3 className="h4 mb-3">{service.name}</h3>
                      <p className="text-gray-500 mb-4">{service.summary}</p>

                      {Array.isArray(service.details) && service.details.length > 0 && (
                        <ul className="list-unstyled fs-sm text-gray-600 mb-6 flex-grow-1">
                          {service.details.map((item, idx) => (
                            <li className="mb-2 d-flex align-items-start" key={idx}>
                              <i
                                className="fe fe-check text-success me-2 mt-1"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-auto pt-3 border-top">
                        <Link
                          className="btn btn-dark w-100"
                          to={`/contact?subject=${encodeURIComponent(
                            service.enquirySubject || `Enquiry: ${service.name}`,
                          )}`}
                        >
                          Enquire About This Service
                          <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Custom Request Banner */}
      <section className="py-10 bg-light border-top">
        <div className="container text-center">
          <h2 className="mb-3">Need Something Specific?</h2>
          <p className="text-gray-500 mb-6 col-lg-7 mx-auto">
            If your requirements fall outside our standard service list, reach out and let us know
            what you are looking for.
          </p>
          <Link className="btn btn-primary btn-lg" to="/contact">
            Send a Custom Enquiry
            <i className="fe fe-mail ms-2" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}

