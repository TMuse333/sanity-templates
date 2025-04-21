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
    <section className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Main Image */}
        <div className="mb-8">
          <Image
            src={mainSrc}
            alt="Property image"
            className="w-full rounded-2xl object-cover"
            width={1200}
            height={600}
            priority
          />
        </div>

        {/* Header Section: Address, Price, Location */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-black">{address}</h1>
            <h2 className="mt-2 text-xl font-medium text-gray-500">{location}</h2>
          </div>
          <p className="text-3xl font-bold text-green-700">{price}</p>
        </div>

        {/* Property Stats */}
        <div className="mb-8 flex flex-wrap gap-6 text-lg font-semibold text-black">
          <span>{beds} Beds</span>
          <span>{bath} Baths</span>
          <span>{squareFt} Sq Ft</span>
        </div>

        {/* Description and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Property Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-black">Property Description</h3>
            <p className="text-gray-700 leading-relaxed">{propertyDescription}</p>
          </div>

          {/* Property Specs and Highlights */}
          <div className="space-y-8">
            {/* Specs */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Property Specs</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="font-semibold">Property Type:</span> {specs.type}</li>
                <li><span className="font-semibold">Put on Market:</span> {specs.putOnMarket}</li>
                <li><span className="font-semibold">Price per Sq Ft:</span> {specs.priceSqFt}</li>
                <li><span className="font-semibold">Lot Size:</span> {specs.lot}</li>
                <li><span className="font-semibold">Year Built:</span> {specs.yearBuilt}</li>
              </ul>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black">Property Highlights</h3>
              <ul className="text-gray-700 space-y-2">
                <li><span className="font-semibold">Air Conditioning:</span> {highlights.airConditioning}</li>
                <li><span className="font-semibold">Heating:</span> {highlights.heating}</li>
                <li><span className="font-semibold">Foundation:</span> {highlights.foundation}</li>
                <li><span className="font-semibold">Flooring:</span> {highlights.flooring}</li>
                <li><span className="font-semibold">Style:</span> {highlights.style}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">Gallery</h3>
          <GridCarousel images={listingImages} isGrid />
        </div>
      </div>
    </section>
  );
};

export default Property;