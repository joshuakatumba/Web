import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PhosphorIcon from '../components/PhosphorIcon';
import { BentoCard, BentoGrid } from '../components/aceternity/BentoGrid';
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
          <h1 className="mb-0 text-start">{servicesPage.pageTitle}</h1>
        </div>
      </section>

      {/* Services Bento Grid */}
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
            <BentoGrid>
              {filteredServices.map((service) => (
                <BentoCard
                  key={service.id}
                  title={service.name}
                  category={service.category}
                  description={service.summary}
                  image={service.image}
                  imageAlt={service.imageAlt || service.name}
                  icon={
                    service.icon ? (
                      <PhosphorIcon name={service.icon} size={18} className="text-dark" />
                    ) : null
                  }
                  footer={
                    <Link
                      className="btn btn-underline d-inline-flex align-items-center gap-2"
                      to={`/contact?subject=${encodeURIComponent(
                        service.enquirySubject || `Enquiry: ${service.name}`,
                      )}`}
                    >
                      <span>{servicesPage.enquireButtonLabel}</span>
                      <PhosphorIcon name="arrow-right" size={15} weight="regular" />
                    </Link>
                  }
                />
              ))}
            </BentoGrid>
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
          <Link
            className="btn btn-dark btn-lg d-inline-flex align-items-center gap-2"
            to="/contact"
          >
            <span>{servicesPage.customBannerCtaLabel}</span>
            <PhosphorIcon name="arrow-right" size={18} weight="regular" />
          </Link>
        </div>
      </section>
    </>
  );
}
