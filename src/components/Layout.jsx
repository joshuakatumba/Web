import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';
import BrandLogo from './BrandLogo';
import PhosphorIcon from './PhosphorIcon';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { brand, contact, footer, navigation } = businessConfig;

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* High Contrast Top Bar */}
      <div className="navbar navbar-topbar navbar-expand-xl navbar-dark bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center w-100 py-1 fs-xxs text-gray-300">
            <div className="d-flex align-items-center">
              <span className="text-uppercase fw-medium text-white">{brand.announcementText}</span>
            </div>
            <div className="d-none d-md-flex align-items-center gap-4">
              {contact.email && (
                <a
                  className="text-gray-300 text-decoration-none d-inline-flex align-items-center gap-1"
                  href={`mailto:${contact.email}`}
                >
                  <PhosphorIcon name="mail" size={14} className="text-white" />
                  <span>{contact.email}</span>
                </a>
              )}
              {contact.phone && (
                <a
                  className="text-gray-300 text-decoration-none d-inline-flex align-items-center gap-1"
                  href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                >
                  <PhosphorIcon name="phone" size={14} className="text-white" />
                  <span>{contact.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
        <div className="container">
          <Link className="navbar-brand text-decoration-none" to="/" aria-label={brand.name}>
            <BrandLogo />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mainNavbarCollapse"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <nav
            id="mainNavbarCollapse"
            className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
            aria-label="Primary navigation"
          >
            <ul className="navbar-nav mx-auto">
              {navigation.map((item) => (
                <li className="nav-item" key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center mt-3 mt-lg-0">
              <Link
                className="btn btn-sm btn-dark w-100 w-lg-auto d-inline-flex align-items-center justify-content-center gap-2"
                to={brand.primaryCtaTo}
              >
                <span>{brand.primaryCtaLabel}</span>
                <PhosphorIcon name="arrow-right" size={15} weight="regular" />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1">{children}</main>

      {/* High Contrast Flat Footer */}
      <footer className="bg-dark text-white mt-auto">
        <div className="py-10 border-bottom border-gray-700">
          <div className="container">
            <div className="row gy-5">
              <div className="col-12 col-md-4">
                <div className="mb-4">
                  <BrandLogo inverted />
                </div>
                <p className="text-gray-300 fs-sm mb-0">{brand.shortTagline}</p>
              </div>

              <div className="col-6 col-md-3 offset-md-1">
                <h6 className="heading-xxs mb-4 text-white">{footer.navigationTitle}</h6>
                <ul className="list-unstyled mb-0">
                  {navigation.map((item) => (
                    <li className="mb-2" key={item.to}>
                      <Link className="text-gray-300 text-decoration-none fs-sm" to={item.to}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-12 col-md-4">
                <h6 className="heading-xxs mb-4 text-white">{footer.contactTitle}</h6>
                <ul className="list-unstyled mb-0 fs-sm text-gray-300">
                  {contact.email && (
                    <li className="mb-2">
                      <a
                        className="text-gray-300 text-decoration-none d-inline-flex align-items-center gap-2"
                        href={`mailto:${contact.email}`}
                      >
                        <PhosphorIcon name="mail" size={15} className="text-white" />
                        <span>{contact.email}</span>
                      </a>
                    </li>
                  )}
                  {contact.phone && (
                    <li className="mb-2">
                      <a
                        className="text-gray-300 text-decoration-none d-inline-flex align-items-center gap-2"
                        href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                      >
                        <PhosphorIcon name="phone" size={15} className="text-white" />
                        <span>{contact.phone}</span>
                      </a>
                    </li>
                  )}
                  {contact.address && (
                    <li className="mb-0 d-inline-flex align-items-center gap-2">
                      <PhosphorIcon name="map-pin" size={15} className="text-white" />
                      <span>{contact.address}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center text-md-start">
                <p className="mb-0 fs-xxs text-gray-400">
                  &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
