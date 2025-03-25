"use client";
import { useOnClickOutside } from "@/utils/hooks";
import Image from "next/image";
import { useRef, useState } from "react";

export default function StoryModal() {
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  const [showing, setShowing] = useState(false);

  useOnClickOutside([modalRef, buttonRef], () => setShowing(false));

  return (
    <>
      <div className="w-screen flex justify-center">
        <button
          ref={buttonRef}
          onClick={() => setShowing(true)}
          className=" bg-lime-600 z-40 hover:bg-lime-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          Our Story
        </button>
      </div>
      <div
        className={`${
          showing ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed inset-0 z-50 w-full h-screen flex items-center justify-center overflow-hidden backdrop-blur-sm backdrop-brightness-75 transition-opacity duration-500`}
      >
        <div
          ref={modalRef}
          className={`${
            showing ? "translate-y-0" : "translate-y-full"
          } h-fit w-11/12 max-w-4xl rounded-lg border border-white bg-white/80 bg-opacity-10 px-4 py-2 md:w-2/3 lg:w-3/5 md:px-10 md:py-6 transition-transform duration-700 ease-out`}
          style={{
            maxHeight: "80vh",
            overflowY: "auto",
          }}
        >
          <div className="-mb-8 flex justify-end">
            <button
              onClick={() => setShowing(false)}
              className="p-2 hover:scale-105 transition-all transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <article>
            <h2 className="text-3xl font-light tracking-wide underline underline-offset-4 mb-6">
              Our Story
            </h2>

            <div className="-mx-4 py-4 md:-mx-10">
              <div className="relative h-[30vh] w-full">
                <Image
                  src="/photos/landscape/Background - Our Story.JPG"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              A Journey of Passion, Community, and Fine Winemaking
            </h3>

            <p className="mb-4">
              Sycamore Hill Vineyard represents the shared dream of Bob and Mary
              Kay Freno. Located in Woolwich Township, New Jersey, just outside
              the Outer Coastal Plain AVA, our vineyard embodies our deep
              connection to the land.
            </p>

            <p className="mb-4">
              Bob, a retired engineer with roots in South Jersey, developed his
              love for agriculture visiting his uncle's farm in Vineland. His
              path crossed with Mary Kay at a local vineyard, and their shared
              passion for wine led to marriage in Napa Valley, where the dream
              of their own vineyard was born.
            </p>

            <p className="mb-4">
              In 2022, they transformed 17 acres of fertile farmland into
              Sycamore Hill Vineyard, planting 1.7 acres each of Cabernet
              Sauvignon and Cabernet Franc. The vineyard&apos;s first harvest in
              2024 marked a significant milestone, celebrated with family and
              friends.
            </p>

            <p className="mb-4">
              Today, Sycamore Hill Vineyard stands as a testament to their
              dedication—a place where the love of wine brings people together
              in celebration and relaxation.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
