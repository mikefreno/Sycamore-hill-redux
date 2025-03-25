import HomeContent from "@/components/HomeContent";
import StoryModal from "@/components/StoryModal";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
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

            <linearGradient
              id="fade-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
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

          <path
            d="M0,1200C0,1200,48,1180,96,1170C144,1160,192,1150,240,1140C288,1130,336,1120,384,1110C432,1100,480,1090,528,1070C576,1050,624,1030,672,1000C720,970,768,930,816,880C864,830,912,770,960,700C1008,630,1056,550,1104,480C1152,410,1200,350,1248,300C1296,250,1344,220,1392,210L1440,200L1440,1440L1392,1440C1344,1440,1296,1440,1248,1440C1200,1440,1152,1440,1104,1440C1056,1440,1008,1440,960,1440C912,1440,864,1440,816,1440C768,1440,720,1440,672,1440C624,1440,576,1440,528,1440C480,1440,432,1440,384,1440C336,1440,288,1440,240,1440C192,1440,144,1440,96,1440C48,1440,0,1440,0,1440Z"
            fill="url(#wave-gradient-1)"
            opacity="0.8"
          />
          <path
            d="M0,1300C0,1300,48,1280,96,1290C144,1300,192,1270,240,1250C288,1230,336,1190,384,1210C432,1230,480,1180,528,1150C576,1120,624,1080,672,1130C720,1180,768,1100,816,1020C864,940,912,860,960,820C1008,780,1056,700,1104,620C1152,540,1200,460,1248,380C1296,300,1344,250,1392,230L1440,210L1440,1440L1392,1440C1344,1440,1296,1440,1248,1440C1200,1440,1152,1440,1104,1440C1056,1440,1008,1440,960,1440C912,1440,864,1440,816,1440C768,1440,720,1440,672,1440C624,1440,576,1440,528,1440C480,1440,432,1440,384,1440C336,1440,288,1440,240,1440C192,1440,144,1440,96,1440C48,1440,0,1440,0,1440Z"
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
      <div className="-mt-[15%] z-30">
        <StoryModal />
      </div>
      <HomeContent />
    </>
  );
}
