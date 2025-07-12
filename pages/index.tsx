import Image from "next/legacy/image";
import bgImage from "@/public/assets/proxy-image.jpeg";
import { FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";

export default function Home() {
  return (
    <>
      {/* <Image src={bgImage} alt="background image" /> */}
      <div className="bg-[url('../public/assets/proxy-image.jpeg')] bg-cover bg-no-repeat h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl text-white">Find your favorite place here!</h1>
        <h1 className="text-4xl text-white">
          The best prices for over 2 million properties worldwide.
        </h1>
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
