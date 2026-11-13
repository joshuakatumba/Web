import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useServices } from '../hooks/useServices';

export default function HomePage() {
  useDocumentTitle('Home');

  const {
    hero,
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
            <div className="col-12 col-md-9 col-lg-7">
              <p className="heading-xxs text-primary mb-3">{hero.eyebrow}</p>
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
                      <h6 className="heading-xxs mb-2">{reason.title}</h6>
                      <p className="mb-0 fs-sm text-muted">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Business Introduction */}
      <section className="py-10">
        <div className="container">
          <div className="row align-items-center gy-6">
            <div className="col-12 col-lg-6">
              <img
                src={homeIntro.image}
                alt={homeIntro.imageAlt}
                className="img-fluid about-feature-img"
              />
            </div>
            <div className="col-12 col-lg-5 offset-lg-1">
              <p className="heading-xxs text-gray-400 mb-3">{homeIntro.eyebrow}</p>
              <h2 className="mb-4">{homeIntro.title}</h2>
              <p className="text-gray-500 mb-6">{homeIntro.description}</p>
              <Link className="btn btn-outline-dark" to={homeIntro.ctaTo}>
                {homeIntro.ctaLabel}
                <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-10 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-8">
            <div className="col-12 col-md-8 text-center">
              <p className="heading-xxs text-gray-400 mb-2">{homeServices.eyebrow}</p>
              <h2 className="mb-3">{homeServices.title}</h2>
              <p className="text-gray-500 mb-0">{homeServices.description}</p>
            </div>
          </div>

          {featuredServices.length > 0 ? (
            <div className="row gy-5">
              {featuredServices.map((service) => (
                <div className="col-12 col-md-6 col-lg-3" key={service.id}>
                  <div className="card border h-100 bg-white">
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.imageAlt || service.name}
                        className="card-img-top service-card-img"
                      />
                    )}
                    <div className="card-body d-flex flex-column p-5">
                      {service.category && (
                        <span className="heading-xxs text-primary mb-2">{service.category}</span>
                      )}
                      <h5 className="card-title mb-3">{service.name}</h5>
                      <p className="card-text fs-sm text-gray-500 mb-5 flex-grow-1">
                        {service.summary}
                      </p>
                      <Link
                        className="btn btn-sm btn-outline-dark w-100"
                        to={`/contact?subject=${encodeURIComponent(service.enquirySubject || `Enquiry: ${service.name}`)}`}
                      >
                        Enquire
                        <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
                      </Link>
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

          <div className="text-center mt-8">
            <Link className="btn btn-dark" to={homeServices.ctaTo}>
              {homeServices.ctaLabel}
              <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact / Enquiry Section */}
      <section className="py-10">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="card border bg-light p-6 p-md-9">
                <div className="row align-items-center gy-5">
                  <div className="col-12 col-md-7">
                    <p className="heading-xxs text-primary mb-2">{homeContactCta.eyebrow}</p>
                    <h2 className="mb-3">{homeContactCta.title}</h2>
                    <p className="text-gray-500 mb-0">
                      {homeContactCta.description}
                      {contact.email ? ` You can also email us at ${contact.email}.` : ''}
                    </p>
                  </div>
                  <div className="col-12 col-md-5 text-md-end">
                    <Link className="btn btn-primary btn-lg" to={homeContactCta.ctaTo}>
                      {homeContactCta.ctaLabel}
                      <i className="fe fe-mail ms-2" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
