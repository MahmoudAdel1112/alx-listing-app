// components/PropertyCard.tsx
import React from "react";
import Image from "next/image";

interface PropertyCardProps {
  name: string;
  image: any;
  price: number;
  rating: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  image,
  price,
  rating,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={name}
          // layout="fill"
          width={100}
          height={100}
          // objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">${price} / night</p>
        <p className="text-gray-600">Rating: {rating} / 5</p>
      </div>
    </div>
  );
};

export default PropertyCard;
