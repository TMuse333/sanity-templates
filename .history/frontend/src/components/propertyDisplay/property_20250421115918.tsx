import Image from 'next/image';
import React from 'react';
import GridCarousel from '../gridCarousel/gridCarousel';

interface Specs {
  type: string;
  putOnMarket: string;
  priceSqFt: string;
  lot: string;
  yearBuilt: string;
}

interface Highlights {
  airConditioning: string;
  heating: string;
  foundation: string;
  flooring: string;
  style: string;
}

interface ListingImage {
  src: string;
  alt: string;
}

interface PropertyProps {
  mainSrc: string;
  address: string;
  price: string;
  location: string;
  beds: string;
  bath: string;
  squareFt: string;
  propertyDescription: string;
  specs: Specs;
  highlights: Highlights;
  listingImages: ListingImage[];
}

const Property: React.FC<PropertyProps> = ({
  mainSrc,
  address,
  price,
  location,
  beds,
  bath,
  squareFt,
  propertyDescription,
  specs,
  highlights,
  listingImages,
}) => {
  return (
    <section className="bg-gray-200 w-screen overflow-x-hidden">
      {/* Property Details */}
      <section className="w-[95vw] max-w-[800px] mx-auto">
        <section className="w-[95vw] flex flex-row justify-center mx-auto max-w-[800px] bg-gray-200 text-black">
          <Image
            src={mainSrc}
            alt="Property image"
            className="w-[95vw] max-w-[800px] rounded-2xl object-contain mx-auto"
            width={600}
            height={1300}
          />
        </section>

        {/* Address, Price, Location */}
        <section className="w-full flex items-center justify-between max-w-[500px] mr-auto">
          <h1 className="mt-4 mb-2 font-black text-2xl text-black">{address}</h1>
          <p className="text-2xl ml-4 my-auto font-black self-center text-green-700">{price}</p>
        </section>
        <h2 className="mb-2 font-extrabold text-xl text-gray-400">{location}</h2>
      </section>

      {/* Additional details like beds, baths, square footage */}
      <section className="flex font-bold max-w-[800px] mx-auto text-black">
        <span className="ml-2 md:ml-0 mr-3">{beds} beds</span>
        <span className="mr-3">{bath} baths</span>
        <span className="mr-3">{squareFt} Square feet</span>
      </section>

      {/* Description and Specs */}
      <section className="flex flex-col md:flex-row">
        <section className="w-[95vw] max-w-[400px] mx-auto text-black">
          <h3 className="font-bold my-4 text-xl sm:text-2xl">Property Description</h3>
          <p className="font-semibold">{propertyDescription}</p>

          <div className="w-[95vw] mx-auto h-[3px] bg-gray-600 mt-6 rounded-2xl max-w-[400px]" />
          <h3 className="font-bold my-4 text-xl sm:text-2xl">Property Specs</h3>
          <ul className="font-semibold">
            <li className="mb-2 sm:text-lg">Property type: {specs.type}</li>
            <li className="mb-2 sm:text-lg">Put on market: {specs.putOnMarket}</li>
            <li className="mb-2 sm:text-lg">Price per Sq Ft: {specs.priceSqFt}</li>
            <li className="mb-2 sm:text-lg">Lot Size: {specs.lot}</li>
            <li className="mb-2 sm:text-lg">Year Built: {specs.yearBuilt}</li>
          </ul>

          <div className="w-[95vw] mx-auto h-[3px] bg-gray-600 mt-6 rounded-2xl max-w-[400px]" />
          <h3 className="font-bold my-4 text-xl sm:text-2xl">Property Highlights</h3>
          <ul className="font-semibold">
            <li className="mb-2 sm:text-lg">Air Conditioning: {highlights.airConditioning}</li>
            <li className="mb-2 sm:text-lg">Heating: {highlights.heating}</li>
            <li className="mb-2 sm:text-lg">Foundation: {highlights.foundation}</li>
            <li className="mb-2 sm:text-lg">Flooring: {highlights.flooring}</li>
            <li className="mb-2 sm:text-lg">Style: {highlights.style}</li>
          </ul>
        </section>
      </section>

      {/* Listing Images */}
      <GridCarousel images={listingImages} isGrid />
    </section>
  );
};

export default Property;
