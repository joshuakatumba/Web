export default function BrandLogo({ inverted = false }) {
  const stroke = inverted ? '#ffffff' : '#111111';
  const frameOpacity = inverted ? '0.28' : '0.2';

  return (
    <span className="d-inline-flex align-items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        width="30"
        height="30"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          stroke={stroke}
          strokeOpacity={frameOpacity}
          strokeWidth="1"
        />
        <path
          d="M23.5 12.2C22 10.5 19.9 9.5 17.5 9.5C13.1 9.5 9.5 13.3 9.5 18C9.5 22.7 13.1 26.5 17.5 26.5C19.9 26.5 22 25.5 23.5 23.8"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="square"
        />
        <path d="M15 18H26.5" stroke={stroke} strokeWidth="1.4" strokeLinecap="square" />
      </svg>
      <span
        style={{
          color: stroke,
          fontSize: '0.95rem',
          fontWeight: 500,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          lineHeight: 1,
        }}
      >
        Crestline
      </span>
    </span>
  );
}
