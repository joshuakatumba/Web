export default function BrandLogo({ inverted = false }) {
  const strokeMain = inverted ? '#ffffff' : '#111111';
  const textColor = inverted ? 'text-white' : 'text-dark';

  return (
    <span className={`d-inline-flex align-items-center gap-2 ${textColor}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="none"
        aria-hidden="true"
      >
        <rect width="32" height="32" fill={inverted ? '#ffffff' : '#111111'} />
        <path
          d="M7 22L16 10L25 22"
          stroke={inverted ? '#111111' : '#ffffff'}
          strokeWidth="2.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path d="M11 22H21" stroke="#ff6f61" strokeWidth="2.5" strokeLinecap="square" />
      </svg>
      <span className="fw-semibold tracking-tight" style={{ letterSpacing: '0.02em', color: strokeMain }}>
        Crestline
      </span>
    </span>
  );
}
