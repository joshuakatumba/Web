import { useState } from 'react';
import { Link } from 'react-router-dom';
import PhosphorIcon from '../PhosphorIcon';

/**
 * Aceternity UI inspired FocusCards
 * Flat architectural framing with focus dimming on sibling cards, zero gradients.
 */
export function FocusCards({ items, actionLabel = 'Enquire' }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="row gy-6">
      {items.map((item, idx) => {
        const isDimmed = hoveredIndex !== null && hoveredIndex !== idx;
        const target = `/contact?subject=${encodeURIComponent(
          item.enquirySubject || `Enquiry: ${item.name}`,
        )}`;

        return (
          <div
            className="col-12 col-sm-6 col-lg-3"
            key={item.id}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <article
              className={`aceternity-focus-card h-100 d-flex flex-column ${
                isDimmed ? 'is-dimmed' : ''
              }`}
            >
              {item.image && (
                <Link to={target} className="aceternity-card-media d-block overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.name}
                    className="service-card-img aceternity-card-img"
                  />
                </Link>
              )}
              <div className="p-5 d-flex flex-column flex-grow-1 bg-white">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h5 className="mb-0">{item.name}</h5>
                  {item.icon && <PhosphorIcon name={item.icon} size={18} className="text-dark" />}
                </div>
                <p className="fs-sm text-gray-500 mb-4 flex-grow-1">{item.summary}</p>
                <div>
                  <Link
                    className="btn btn-underline fs-sm d-inline-flex align-items-center gap-2"
                    to={target}
                  >
                    <span>{actionLabel}</span>
                    <PhosphorIcon name="arrow-right" size={14} weight="regular" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}

