import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useServices } from '../hooks/useServices';

export default function ServicesPage() {
  useDocumentTitle('Services');

  const { servicesPage } = businessConfig;
  const { services, isLoading } = useServices();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = new Set(services.map((s) => s.category).filter(Boolean));
    return ['All', ...Array.from(unique)];
  }, [services]);

  const filteredServices = useMemo(() => {
    if (selectedCategory === 'All') {
      return services;
    }
    return services.filter((s) => s.category === selectedCategory);
  }, [selectedCategory, services]);

  return (
    <>
      {/* Page Header */}
      <section className="py-8 bg-light border-bottom">
        <div className="container">
          <h1 className="mb-0">{servicesPage.pageTitle}</h1>
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

          {isLoading && services.length === 0 ? (
            <div className="text-center py-8">
              <span className="spinner-border spinner-border-sm me-2" role="status" />
              <span className="text-muted">Loading services...</span>
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="py-8 text-center">
              <h5 className="mb-2">{servicesPage.emptyTitle}</h5>
              <p className="text-muted mb-4">{servicesPage.emptyDescription}</p>
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
            <div className="row gy-7">
              {filteredServices.map((service) => (
                <div className="col-12 col-md-6" key={service.id}>
                  <div className="card border-0 h-100">
                    {service.image && (
                      <Link
                        to={`/contact?subject=${encodeURIComponent(
                          service.enquirySubject || `Enquiry: ${service.name}`,
                        )}`}
                      >
                        <img
                          src={service.image}
                          alt={service.imageAlt || service.name}
                          className="card-img-top service-card-img"
                        />
                      </Link>
                    )}
                    <div className="card-body px-0 pt-4 pb-0 d-flex flex-column">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h3 className="h4 mb-0">{service.name}</h3>
                        {service.category && (
                          <span className="heading-xxs text-primary">{service.category}</span>
                        )}
                      </div>

                      <p className="text-gray-500 mb-3 flex-grow-1">{service.summary}</p>

                      <div>
                        <Link
                          className="btn btn-underline"
                          to={`/contact?subject=${encodeURIComponent(
                            service.enquirySubject || `Enquiry: ${service.name}`,
                          )}`}
                        >
                          {servicesPage.enquireButtonLabel}
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

      {/* Visual Gallery Strip */}
      {Array.isArray(servicesPage.galleryImages) && servicesPage.galleryImages.length > 0 && (
        <section className="py-8 bg-light">
          <div className="container">
            <div className="row g-4">
              {servicesPage.galleryImages.map((img, idx) => (
                <div className="col-6 col-md-3" key={idx}>
                  <img src={img.src} alt={img.alt} className="img-fluid gallery-thumb" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Custom Request Banner */}
      <section className="py-10 border-top">
        <div className="container text-center">
          <h2 className="mb-5">{servicesPage.customBannerTitle}</h2>
          <Link className="btn btn-dark btn-lg" to="/contact">
            {servicesPage.customBannerCtaLabel}
            <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
