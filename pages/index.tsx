import Image from "next/image";
import bgImage from "@/public/assets/proxy-image.jpeg";
import { FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import image from "@/public/assets/proxy-image.jpeg";

export default function Home() {
  return (
    <>
      {/* <Image src={bgImage} alt="background image" /> */}
      <div className="relative h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 bg-cover bg-center flex items-center justify-center">
        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Discover Your Perfect Getaway
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Unbeatable prices for over 2 million properties worldwide. Start
            your journey today!
          </p>
          <a
            href="#search"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Find Your Stay
          </a>
        </div>

        {/* Optional Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </div>
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Filter Properties
          </h2>
          <div className="flex flex-wrap">
            {FILTERS.map((filter, index) => (
              <Pill
                key={index}
                label={filter}
                onClick={() => console.log(`Filter clicked: ${filter}`)}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Available Properties
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTYLISTINGSAMPLE.map((property) => (
              <PropertyCard
                key={property.id}
                name={property.name}
                image={property.image}
                price={property.price}
                rating={property.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const styles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-bounce {
    animation: bounce 2s infinite;
  }
`;
