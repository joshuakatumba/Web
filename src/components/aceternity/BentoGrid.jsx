/**
 * Aceternity UI inspired BentoGrid & BentoCard
 * Clean monochrome borders, crisp image lift, zero gradients or loud colors.
 */
export function BentoGrid({ children, className = '' }) {
  return <div className={`row gy-6 ${className}`}>{children}</div>;
}

export function BentoCard({
  title,
  category,
  description,
  image,
  imageAlt,
  icon,
  footer,
  colClass = 'col-12 col-md-6',
}) {
  return (
    <div className={colClass}>
      <article className="aceternity-bento-card h-100 d-flex flex-column bg-white">
        {image && (
          <div className="aceternity-card-media overflow-hidden">
            <img src={image} alt={imageAlt || title} className="service-card-img aceternity-card-img" />
          </div>
        )}
        <div className="p-6 d-flex flex-column flex-grow-1">
          <div className="d-flex align-items-center justify-content-between mb-2">
            {category && <span className="heading-xxs text-gray-500">{category}</span>}
            {icon}
          </div>
          <h3 className="h4 mb-2">{title}</h3>
          <p className="text-gray-500 mb-4 flex-grow-1">{description}</p>
          {footer && <div className="pt-3 border-top">{footer}</div>}
        </div>
      </article>
    </div>
  );
}

