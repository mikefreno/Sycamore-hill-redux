"use client";
import React, { useState, useEffect, useCallback, ReactNode } from "react";
import Image from "next/image";

const ImageLoader = () => (
  <div className="absolute inset-0 flex justify-center z-10 pointer-events-none items-center">
    <div className="bg-zinc-100 rounded-full p-4 z-50 transition-opacity duration-500 animate-spin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-12 h-12 fill-lime-600 mirror"
      >
        <path d="M496 256C496 294.266 486.781 332.312 469.312 366.062C465.062 374.312 456.656 379.031 447.969 379.031C444.281 379.031 440.5 378.187 436.969 376.344C425.187 370.25 420.594 355.781 426.687 344C440.844 316.672 448 287.062 448 256C448 150.125 361.875 64 256 64C242.75 64 232 53.25 232 40S242.75 16 256 16C388.344 16 496 123.656 496 256Z" />
      </svg>
    </div>
  </div>
);

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  fill?: boolean;
}

const ImageWithLoader = (props: ImageWithLoaderProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoadingComplete = (result: any) => {
    setLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
      {!loaded && <ImageLoader />}
      <Image
        {...props}
        onLoad={handleLoadingComplete}
        style={{ visibility: loaded ? "visible" : "hidden" }}
      />
    </div>
  );
};

const Carousel = ({ showing }: { showing: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const autoPlayInterval = 5000;

  const slideSets: { title: string; image: ReactNode }[] = [
    {
      title: "Planting - Spring (Year 1)",
      image: (
        <ImageWithLoader
          key="modal-1"
          src="/photos/1 - Planting April 2022 Year 1.jpg"
          alt="modal-1"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Summer (Year 1)",
      image: (
        <ImageWithLoader
          key="modal-2"
          src="/photos/2 - Summer 2022 Year 1.jpg"
          alt="modal-2"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Installing Irrigation (Year 1)",
      image: (
        <ImageWithLoader
          key="modal-3"
          src="/photos/3 - Installing Irrigation 2022 Year 1.jpg"
          alt="modal-3"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Winter (Year 1)",
      image: (
        <ImageWithLoader
          key="modal-4"
          src="/photos/4 - 1st Winter Year 1.jpg"
          alt="modal-4"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Shoot Thinning (Year 2)",
      image: (
        <ImageWithLoader
          key="modal-5"
          src="/photos/5 - Shoot Thinning Year 2.jpg"
          alt="modal-5"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Late Summer (Year 2)",
      image: (
        <ImageWithLoader
          key="modal-6"
          src="/photos/6 - Late Summer in Vineyard Year 2.jpg"
          alt="modal-6"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Winter (Year 2)",
      image: (
        <ImageWithLoader
          key="modal-7"
          src="/photos/7 - 2nd Winter Year 2.jpg"
          alt="modal-7"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Summer (Year 3)",
      image: (
        <ImageWithLoader
          key="modal-8"
          src="/photos/8 - Summer Year 3.jpg"
          alt="modal-8"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Onset of Veraison (Year 3)",
      image: (
        <ImageWithLoader
          key="modal-9"
          src="/photos/9 - Onset of Veraison Year 3.jpg"
          alt="modal-9"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Ready To Pick (Year 3)",
      image: (
        <ImageWithLoader
          key="modal-10"
          src="/photos/10 - Ready to pick.jpg"
          alt="modal-10"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Harvest (Year 3)",
      image: (
        <ImageWithLoader
          key="modal-11"
          src="/photos/11 - Harvest Year 3.jpg"
          alt="modal-11"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
    {
      title: "Ready For Sale (Year 3)",
      image: (
        <ImageWithLoader
          key="modal-12"
          src="/photos/12 - The Sale Year 3.jpg"
          alt="modal-12"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 91.66vw, (max-width:1024px) 66.67vw, 60vw"
        />
      ),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback((): void => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === slideSets.length - 1 ? 0 : prevIndex + 1,
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback((): void => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slideSets.length - 1 : prevIndex - 1,
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const goToSlide = (slideIndex: number): void => {
    if (!isTransitioning && slideIndex !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(slideIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  useEffect(() => {
    if (showing) {
      const timer = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);

      return () => clearInterval(timer);
    }
  }, [nextSlide, autoPlayInterval, showing]);

  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const handleTouchStart = (e: React.TouchEvent): void => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (): void => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  const indicatorPosition = windowWidth < 640 ? "bottom-4" : "bottom-8";

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slideSets.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            {slide.image}
            <div className="absolute bottom-0 right-0 z-10 bg-white/60 backdrop-blur-md px-4 py-2 rounded-tl-lg">
              <h3 className="text-black text-lg italic font-thin">
                {slide.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-10 transition-all hidden sm:block"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 z-10 transition-all hidden sm:block"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div
        className={`absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 ${indicatorPosition}`}
      >
        {slideSets.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3.5 h-3.5 mx-1 rounded-full transition-all duration-300 sm:w-4 sm:h-4 ${
              index === currentIndex
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
