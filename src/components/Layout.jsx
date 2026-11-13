import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { businessConfig } from '../config/businessConfig';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { brand, contact } = businessConfig;

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Top Announcement Bar */}
      <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center w-100 py-1 fs-xxs text-gray-500">
            <div className="d-flex align-items-center">
              <i className="fe fe-info text-primary me-2" aria-hidden="true" />
              <span className="text-uppercase fw-medium">{brand.announcementText}</span>
            </div>
            <div className="d-none d-md-flex align-items-center gap-4">
              {contact.email && (
                <a className="text-reset text-decoration-none" href={`mailto:${contact.email}`}>
                  <i className="fe fe-mail me-1" aria-hidden="true" />
                  {contact.email}
                </a>
              )}
              {contact.phone && (
                <a
                  className="text-reset text-decoration-none"
                  href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                >
                  <i className="fe fe-phone me-1" aria-hidden="true" />
                  {contact.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-semibold" to="/">
            {brand.logoText || brand.name}
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
              {navItems.map((item) => (
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
              <Link className="btn btn-sm btn-dark w-100 w-lg-auto" to="/contact">
                Enquire Now
                <i className="fe fe-arrow-right ms-2" aria-hidden="true" />
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1">{children}</main>

      {/* Footer */}
      <footer
        className="bg-dark bg-cover text-white mt-auto"
        style={{ backgroundImage: 'url(/images/patterns/pattern-2.svg)' }}
      >
        <div className="py-10 border-bottom border-gray-700">
          <div className="container">
            <div className="row gy-5">
              <div className="col-12 col-md-4">
                <h4 className="mb-4 text-white">{brand.logoText || brand.name}</h4>
                <p className="text-gray-350 fs-sm mb-4">{brand.shortTagline}</p>
                {Array.isArray(contact.socialLinks) && contact.socialLinks.length > 0 && (
                  <ul className="list-inline mb-0">
                    {contact.socialLinks.map((social) => (
                      <li className="list-inline-item me-3" key={social.name}>
                        <a
                          className="text-gray-350 text-decoration-none"
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.name}
                        >
                          <i className={`fe ${social.icon}`} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="col-6 col-md-3 offset-md-1">
                <h6 className="heading-xxs mb-4 text-white">Navigation</h6>
                <ul className="list-unstyled mb-0">
                  {navItems.map((item) => (
                    <li className="mb-2" key={item.to}>
                      <Link className="text-gray-350 text-decoration-none fs-sm" to={item.to}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-12 col-md-4">
                <h6 className="heading-xxs mb-4 text-white">Contact Details</h6>
                <ul className="list-unstyled mb-0 fs-sm text-gray-350">
                  {contact.email && (
                    <li className="mb-2">
                      <a
                        className="text-gray-350 text-decoration-none"
                        href={`mailto:${contact.email}`}
                      >
                        <i className="fe fe-mail me-2 text-primary" aria-hidden="true" />
                        {contact.email}
                      </a>
                    </li>
                  )}
                  {contact.phone && (
                    <li className="mb-2">
                      <a
                        className="text-gray-350 text-decoration-none"
                        href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                      >
                        <i className="fe fe-phone me-2 text-primary" aria-hidden="true" />
                        {contact.phone}
                      </a>
                    </li>
                  )}
                  {contact.address && (
                    <li className="mb-0">
                      <i className="fe fe-map-pin me-2 text-primary" aria-hidden="true" />
                      {contact.address}
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
                <p className="mb-0 fs-xxs text-gray-350">
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

