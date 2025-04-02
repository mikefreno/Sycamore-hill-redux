"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos || currentScrollPos < 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm h-16 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full relative flex items-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex items-center justify-center">
            <BranchSvg className="h-6 w-20 text-lime-600 transform -scale-x-100" />
            <h1 className="text-black font-serif text-2xl mx-4 tracking-wide text-center">
              Sycamore Hill Vineyard
            </h1>
            <BranchSvg className="h-6 w-20 text-lime-600" />
          </Link>
        </div>
        <div className="ml-auto hidden sm:block">
          <Link
            href="/contact"
            className="text-lime-700/80 hover:text-lime-700 font-medium px-4 py-2 rounded-full border border-black/30 hover:border-black transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

function BranchSvg({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        d="M0,10 C10,8 15,12 25,10 C35,8 40,12 50,10 C60,8 65,12 75,10 C85,8 90,12 100,10 M20,10 C22,7 22,13 24,10 M40,10 C42,7 42,13 44,10 M60,10 C62,7 62,13 64,10 M80,10 C82,7 82,13 84,10"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
