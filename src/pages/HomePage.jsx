import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useServices } from '../hooks/useServices';

export default function HomePage() {
  useDocumentTitle('Home');

  const {
    hero,
    homeVisualTiles,
    homeIntro,
    homeServices,
    homeContactCta,
    reasonsToChoose,
    contact,
  } = businessConfig;
  const { services } = useServices();
  const featuredServices = services.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-12 hero-overlay"
        style={{ backgroundImage: `url(${hero.heroImage})` }}
        aria-label={hero.heroImageAlt}
      >
        <div className="container py-6 py-md-10">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-6">
              <h1 className="display-4 fw-bold text-white mb-4">{hero.headline}</h1>
              <p className="fs-lg text-white opacity-90 mb-6">{hero.description}</p>
              <div className="d-flex flex-wrap gap-3">
                <Link className="btn btn-white btn-lg" to={hero.primaryCtaTo}>
                  {hero.primaryCtaLabel}
                  <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
                </Link>
                <Link className="btn btn-outline-white btn-lg" to={hero.secondaryCtaTo}>
                  {hero.secondaryCtaLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Navigation Tiles */}
      {Array.isArray(homeVisualTiles) && homeVisualTiles.length > 0 && (
        <section className="py-0">
          <div className="container-fluid px-0">
            <div className="row g-0">
              {homeVisualTiles.map((tile) => (
                <div className="col-12 col-md-4" key={tile.to}>
                  <Link className="visual-tile text-decoration-none" to={tile.to}>
                    <img src={tile.image} alt={tile.imageAlt} className="visual-tile-img" />
                    <div className="visual-tile-overlay">
                      <span className="h4 text-white mb-0 d-flex align-items-center">
                        {tile.title}
                        <i className="fe fe-arrow-right ms-2 fs-base" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Reasons to Choose Us */}
      {reasonsToChoose.length > 0 && (
        <section className="py-8 border-bottom">
          <div className="container">
            <div className="row gy-5">
              {reasonsToChoose.map((reason) => (
                <div className="col-12 col-sm-6 col-lg-3" key={reason.id}>
                  <div className="d-flex align-items-start">
                    <i
                      className={`fe ${reason.icon} fs-lg text-primary me-4 mt-1`}
                      aria-hidden="true"
                    />
                    <div>
                      <h6 className="heading-xxs mb-1">{reason.title}</h6>
                      <p className="mb-0 fs-sm text-muted">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Business Introduction with Dual Image Collage */}
      <section className="py-10">
        <div className="container">
          <div className="row align-items-center gy-6">
            <div className="col-12 col-lg-6">
              <div className="row g-4 align-items-end">
                <div className="col-7">
                  <img
                    src={homeIntro.image}
                    alt={homeIntro.imageAlt}
                    className="img-fluid collage-img-main"
                  />
                </div>
                {homeIntro.secondaryImage && (
                  <div className="col-5">
                    <img
                      src={homeIntro.secondaryImage}
                      alt={homeIntro.secondaryImageAlt || homeIntro.imageAlt}
                      className="img-fluid collage-img-secondary"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-5 offset-lg-1">
              <h2 className="mb-4">{homeIntro.title}</h2>
              <p className="text-gray-500 mb-6">{homeIntro.description}</p>
              <Link className="btn btn-underline" to={homeIntro.ctaTo}>
                {homeIntro.ctaLabel}
                <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview (Borderless Shopper Cards) */}
      <section className="py-10 bg-light">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end mb-7 gap-3">
            <h2 className="mb-0">{homeServices.title}</h2>
            <Link className="btn btn-underline" to={homeServices.ctaTo}>
              {homeServices.ctaLabel}
              <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
            </Link>
          </div>

          {featuredServices.length > 0 ? (
            <div className="row gy-6">
              {featuredServices.map((service) => (
                <div className="col-12 col-sm-6 col-lg-3" key={service.id}>
                  <div className="card bg-transparent border-0 h-100">
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
                      <h5 className="card-title mb-2">{service.name}</h5>
                      <p className="card-text fs-sm text-gray-500 mb-3 flex-grow-1">
                        {service.summary}
                      </p>
                      <div>
                        <Link
                          className="btn btn-underline fs-sm"
                          to={`/contact?subject=${encodeURIComponent(
                            service.enquirySubject || `Enquiry: ${service.name}`,
                          )}`}
                        >
                          Enquire
                          <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <p className="text-muted mb-0">{homeServices.emptyMessage}</p>
            </div>
          )}
        </div>
      </section>

      {/* Clean Full Width Contact Strip */}
      <section className="py-10">
        <div className="container">
          <div className="row align-items-center justify-content-between gy-5">
            <div className="col-12 col-md-7">
              <h2 className="mb-3">{homeContactCta.title}</h2>
              <p className="text-gray-500 mb-0">
                {homeContactCta.description}
                {contact.email ? ` Email us at ${contact.email}.` : ''}
              </p>
            </div>
            <div className="col-12 col-md-4 text-md-end">
              <Link className="btn btn-dark btn-lg" to={homeContactCta.ctaTo}>
                {homeContactCta.ctaLabel}
                <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
