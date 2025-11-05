export default function FloralCorners() {
  return (
    <>
      {/* Top Left Floral */}
      <svg
        className="pointer-events-none absolute -top-6 -left-6 w-40 h-40 opacity-40"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M20 120C40 80 85 70 110 40C135 10 160 10 180 20" stroke="#E9B6C7" strokeWidth="1.6" />
        <path d="M30 140C50 115 70 110 92 85" stroke="#D4AF37" strokeOpacity=".7" strokeWidth="1.2" />
        <circle cx="95" cy="80" r="4" fill="#D4AF37" fillOpacity=".7" />
        <circle cx="115" cy="55" r="3" fill="#E9B6C7" />
      </svg>

      {/* Bottom Right Floral */}
      <svg
        className="pointer-events-none absolute -bottom-6 -right-6 w-44 h-44 opacity-40 rotate-180"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M20 120C40 80 85 70 110 40C135 10 160 10 180 20" stroke="#E9B6C7" strokeWidth="1.6" />
        <path d="M30 140C50 115 70 110 92 85" stroke="#D4AF37" strokeOpacity=".7" strokeWidth="1.2" />
        <circle cx="95" cy="80" r="4" fill="#D4AF37" fillOpacity=".7" />
        <circle cx="115" cy="55" r="3" fill="#E9B6C7" />
      </svg>
    </>
  );
}
