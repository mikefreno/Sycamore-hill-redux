import Carousel from "@/components/Carousel";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      <Carousel />
      <svg
        viewBox="0 0 1440 1440"
        className="absolute top-0 z-0"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="wave-gradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#65a30d", stopOpacity: 1 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#84cc16", stopOpacity: 0.8 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ffffff", stopOpacity: 0.1 }}
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
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>

        <path
          d="M0,700C0,700,48,720,96,720C144,720,192,700,240,690C288,680,336,680,384,690C432,700,480,720,528,730C576,740,624,740,672,720C720,700,768,660,816,620C864,580,912,540,960,500C1008,460,1056,420,1104,380C1152,340,1200,300,1248,280C1296,260,1344,260,1392,260L1440,260L1440,1200L1392,1200C1344,1200,1296,1200,1248,1200C1200,1200,1152,1200,1104,1200C1056,1200,1008,1200,960,1200C912,1200,864,1200,816,1200C768,1200,720,1200,672,1200C624,1200,576,1200,528,1200C480,1200,432,1200,384,1200C336,1200,288,1200,240,1200C192,1200,144,1200,96,1200C48,1200,0,1200,0,1200Z"
          fill="url(#wave-gradient)"
          opacity="0.7"
        />

        <path
          d="M0,720C0,720,48,740,96,740C144,740,192,720,240,710C288,700,336,700,384,710C432,720,480,740,528,750C576,760,624,760,672,740C720,720,768,680,816,640C864,600,912,560,960,520C1008,480,1056,440,1104,400C1152,360,1200,320,1248,300C1296,280,1344,280,1392,280L1440,280L1440,1200L1392,1200C1344,1200,1296,1200,1248,1200C1200,1200,1152,1200,1104,1200C1056,1200,1008,1200,960,1200C912,1200,864,1200,816,1200C768,1200,720,1200,672,1200C624,1200,576,1200,528,1200C480,1200,432,1200,384,1200C336,1200,288,1200,240,1200C192,1200,144,1200,96,1200C48,1200,0,1200,0,1200Z"
          fill="url(#wave-gradient)"
          opacity="1"
          filter="url(#wave-blur)"
        />

        <rect
          x="0"
          y="800"
          width="1440"
          height="400"
          fill="url(#fade-gradient)"
        />
      </svg>
    </div>
  );
}
