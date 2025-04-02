import Carousel from "@/components/Carousel";

export default function HeroSection() {
  return (
    <div style={{ height: "100svh" }} className="relative w-full">
      <Carousel />
      <svg
        viewBox="0 0 1440 1440"
        className="absolute inset-0 w-full h-full z-0"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="wave-gradient-1"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#65a30d", stopOpacity: 0.2 }}
            />
            <stop
              offset="70%"
              style={{ stopColor: "#84cc16", stopOpacity: 0.8 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#a3e635", stopOpacity: 0.9 }}
            />
          </linearGradient>

          <linearGradient
            id="wave-gradient-2"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#65a30d", stopOpacity: 0.1 }}
            />
            <stop
              offset="60%"
              style={{ stopColor: "#84cc16", stopOpacity: 0.6 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#a3e635", stopOpacity: 0.7 }}
            />
          </linearGradient>

          <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffffff", stopOpacity: 0 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffffff", stopOpacity: 1 }}
            />
          </linearGradient>

          <filter id="wave-blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" />
          </filter>
        </defs>

        {/* Second dramatic sine wave layer with a slight variation */}
        <path
          d="M0,1300 C480,1200 960,1400 1440,1300 L1440,1440 L0,1440 Z"
          fill="url(#wave-gradient-2)"
          opacity="0.9"
          filter="url(#wave-blur)"
        />

        <rect
          x="0"
          y="1100"
          width="1440"
          height="340"
          fill="url(#fade-gradient)"
        />
      </svg>
    </div>
  );
}
