import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function AboutPage() {
  useDocumentTitle('About');

  const { about } = businessConfig;

  return (
    <>
      {/* Visual Page Header */}
      <section
        className="py-10 hero-overlay"
        style={{ backgroundImage: `url(${about.headerImage || about.backgroundImage})` }}
      >
        <div className="container py-4">
          <h1 className="text-white mb-0 text-start">{about.pageTitle}</h1>
        </div>
      </section>

      {/* Business Background */}
      <section className="py-10">
        <div className="container">
          <div className="row align-items-center gy-6">
            <div className="col-12 col-lg-6">
              <img
                src={about.backgroundImage}
                alt={about.backgroundImageAlt}
                className="img-fluid about-feature-img"
              />
            </div>
            <div className="col-12 col-lg-5 offset-lg-1">
              <h2 className="mb-4">{about.backgroundTitle}</h2>
              {about.backgroundParagraphs.map((paragraph, idx) => (
                <p className="text-gray-500 mb-4" key={idx}>
                  {paragraph}
                </p>
              ))}

              {Array.isArray(about.businessDetails) && about.businessDetails.length > 0 && (
                <dl className="row mt-5 pt-5 border-top fs-sm mb-0">
                  {about.businessDetails.map((detail) => (
                    <div className="col-12 mb-3 d-flex justify-content-between" key={detail.label}>
                      <dt className="text-gray-500 fw-normal">{detail.label}</dt>
                      <dd className="fw-medium text-dark mb-0 text-end">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Visuals */}
      <section className="py-10 bg-light">
        <div className="container">
          <div className="row gy-6">
            <div className="col-12 col-md-6">
              {about.missionImage && (
                <img
                  src={about.missionImage}
                  alt={about.missionImageAlt || about.missionTitle}
                  className="img-fluid service-card-img mb-4"
                />
              )}
              <h3 className="mb-3">{about.missionTitle}</h3>
              <p className="text-gray-500 mb-0">{about.mission}</p>
            </div>
            <div className="col-12 col-md-6">
              {about.visionImage && (
                <img
                  src={about.visionImage}
                  alt={about.visionImageAlt || about.visionTitle}
                  className="img-fluid service-card-img mb-4"
                />
              )}
              <h3 className="mb-3">{about.visionTitle}</h3>
              <p className="text-gray-500 mb-0">{about.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      {Array.isArray(about.coreValues) && about.coreValues.length > 0 && (
        <section className="py-10 border-bottom">
          <div className="container">
            <h2 className="mb-7">{about.valuesTitle}</h2>

            <div className="row gy-5">
              {about.coreValues.map((value, index) => (
                <div className="col-12 col-sm-6 col-lg-3" key={value.title}>
                  <span className="heading-xxs text-primary d-block mb-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h5 className="mb-2">{value.title}</h5>
                  <p className="fs-sm text-gray-500 mb-0">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Clean CTA */}
      <section className="py-10">
        <div className="container text-center">
          <h2 className="mb-5">{about.ctaTitle}</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link className="btn btn-dark" to={about.ctaPrimaryTo}>
              {about.ctaPrimaryLabel}
            </Link>
            <Link className="btn btn-outline-dark" to={about.ctaSecondaryTo}>
              {about.ctaSecondaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
