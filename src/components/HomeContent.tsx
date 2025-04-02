import Link from "next/link";

export default function HomeContent() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 text-center">
      <h1 className="text-4xl font-bold text-lime-800 mb-6">
        Sycamore Hill Vineyard
      </h1>

      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
        <p className="mb-4">
          Established in 2022, Sycamore Hill Vineyard focuses on producing
          premium wine grapes through meticulous vineyard management. Our 3.4
          acres feature Cabernet Sauvignon and Cabernet Franc varietals that
          thrive in New Jersey&apos;s unique terrain.
        </p>

        <p className="mb-6">
          We prioritize sustainable farming practices while producing
          high-quality fruit that showcases depth, elegance, and regional
          character.
        </p>

        <h2 className="text-2xl font-semibold text-lime-700 mb-4">
          Why Choose Our Grapes?
        </h2>

        <ul className="list-disc list-inside text-left mb-6">
          <li>Fresh & Local — Perfectly timed harvests with prompt delivery</li>
          <li>
            Personalized Service — Flexible arrangements tailored to your needs
          </li>
          <li>Competitive Pricing — Quality grapes at fair market value</li>
        </ul>

        <p className="mb-6">
          We look forward to talking about how our grapes can enhance your
          winemaking process.
        </p>
        <div className="flex flex-col">
          <Link
            href="/contact"
            className=" bg-lime-600 z-40 hover:bg-lime-700 text-white font-bold py-3 px-8 mb-4 rounded-full shadow-lg transition-all transform hover:scale-105 mx-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
