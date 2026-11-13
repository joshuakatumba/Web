import { Link } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function AboutPage() {
  useDocumentTitle('About');

  const { about } = businessConfig;

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
                About
              </li>
            </ol>
          </nav>
          <h1 className="mb-3">{about.pageTitle}</h1>
          <p className="fs-lg text-gray-500 mb-0 col-lg-8 px-0">{about.lead}</p>
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
              <p className="heading-xxs text-gray-400 mb-2">Our Story</p>
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

      {/* Mission & Vision */}
      <section className="py-10 bg-light">
        <div className="container">
          <div className="row gy-5">
            <div className="col-12 col-md-6">
              <div className="card border h-100 bg-white p-6 p-md-7">
                <div className="mb-4">
                  <i className="fe fe-target fs-lg text-primary" aria-hidden="true" />
                </div>
                <h3 className="mb-3">Our Mission</h3>
                <p className="text-gray-500 mb-0">{about.mission}</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card border h-100 bg-white p-6 p-md-7">
                <div className="mb-4">
                  <i className="fe fe-eye fs-lg text-primary" aria-hidden="true" />
                </div>
                <h3 className="mb-3">Our Vision</h3>
                <p className="text-gray-500 mb-0">{about.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      {Array.isArray(about.coreValues) && about.coreValues.length > 0 && (
        <section className="py-10">
          <div className="container">
            <div className="row justify-content-center mb-8">
              <div className="col-12 col-md-8 text-center">
                <p className="heading-xxs text-gray-400 mb-2">Principles</p>
                <h2 className="mb-0">Our Core Values</h2>
              </div>
            </div>

            <div className="row gy-5">
              {about.coreValues.map((value, index) => (
                <div className="col-12 col-sm-6 col-lg-3" key={value.title}>
                  <div className="card border h-100 p-5">
                    <span className="heading-xxs text-primary mb-3">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h5 className="mb-3">{value.title}</h5>
                    <p className="fs-sm text-gray-500 mb-0">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-10 bg-light border-top">
        <div className="container text-center">
          <h2 className="mb-3">Interested in Working Together?</h2>
          <p className="text-gray-500 mb-6">
            Browse our services or contact us directly with your questions.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link className="btn btn-dark" to="/services">
              View Services
            </Link>
            <Link className="btn btn-outline-dark" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

