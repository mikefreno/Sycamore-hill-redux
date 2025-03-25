"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const autoPlayInterval = 5000;

  const slides = [
    <Image
      key="hero-1"
      src="/photos/landscape/Background - Home Page.JPG"
      alt="hero-1"
      fill
      className="object-cover"
      priority
      sizes={"100vw"}
    />,
    <Image
      key="hero-2"
      src="/photos/landscape/1.JPG"
      alt="hero-2"
      fill
      className="object-cover"
      priority
      sizes={"100vw"}
    />,
    <Image
      key="hero-3"
      src="/photos/landscape/2.JPG"
      alt="hero-3"
      fill
      className="object-cover"
      sizes={"100vw"}
    />,
    <Image
      key="hero-4"
      src="/photos/landscape/6.JPG"
      alt="hero-4"
      fill
      className="object-cover"
      sizes={"100vw"}
    />,
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
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
      );
      setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
    }
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback((): void => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
      );
      setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
    }
  }, [isTransitioning, slides.length]);

  const goToSlide = (slideIndex: number): void => {
    if (!isTransitioning && slideIndex !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(slideIndex);
      setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [nextSlide, autoPlayInterval]);

  // Touch handling
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
      // Swipe left
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  // Determine indicator position based on screen size
  const indicatorPosition = windowWidth < 640 ? "bottom-4" : "bottom-8";

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
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

      {/* Indicators */}
      <div
        className={`absolute top-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 ${indicatorPosition}`}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 sm:w-3 sm:h-3 ${
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
