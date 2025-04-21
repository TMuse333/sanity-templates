"use client"

import Image from "next/image";
import React from "react";
import GridCarousel from "../gridCarousel/gridCarousel";

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

interface PreviewProps {
  mainSrc: string;
  address: string;
  price: string;
  location: string;
  beds: string;
  bath: string;
  squareFt: string;
}

const PropertyPreview: React.FC<PreviewProps> = ({
  mainSrc, address, price, location, beds, bath, squareFt
}) => {
  return (
    <div className="flex flex-col justify-center text-black">
      <Image
        src={mainSrc}
        alt='Property image'
        className="w-[85vw] max-w-[275px] rounded-2xl object-cover mx-auto m-3 max-h-[200px]"
        width={600}
        height={1300}
      />
      <section className="bg-gray-300 rounded-2xl p-1 mt-[-1rem]">
        <section className="w-full flex items-center mt-[-1rem] justify-between max-w-[250px] mr-auto">
          <h2 className="mt-4 mb-0 font-black text-xl">{address}</h2>
          <p className="text-xl ml-4 my-auto font-black self-center mt-5 text-green-700">{price}</p>
        </section>
        <h2 className="mb-2 font-extrabold text-xl text-gray-400">{location}</h2>
        <section className="w-[85vw] max-w-[275px] flex justify-around">
          <span>{beds} beds</span>
          <span>{bath} baths</span>
          <span>{squareFt} Square feet</span>
        </section>
      </section>
    </div>
  );
}

const Property: React.FC<PropertyProps> = ({
  mainSrc, address, price, location, beds, bath, squareFt, propertyDescription, specs, highlights, listingImages
}) => {
  return (
    <section className="bg-gray-200 w-screen overflow-x-hidden">
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

        <section className="w-full flex items-center justify-between max-w-[500px] mr-auto">
          <h1 className="mt-4 mb-2 font-black text-2xl text-black">{address}</h1>
          <p className="text-2xl ml-4 my-auto font-black self-center text-green-700">{price}</p>
        </section>
        <h2 className="mb-2 font-extrabold text-xl text-gray-400">{location}</h2>
      </section>

      <section className="flex font-bold max-w-[800px] mx-auto text-black">
        <span className="ml-2 md:ml-0 mr-3">{beds} beds</span>
        <span className="mr-3">{bath} baths</span>
        <span className="mr-3">{squareFt} Square feet</span>
      </section>

      <div className="w-[95vw] mx-auto h-[3px] bg-gray-600 text-black max-w-[400px] mt-6 rounded-2xl" />

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

      <div className="w-[95vw] mx-auto h-[3px] bg-gray-600 mt-6 rounded-2xl max-w-[400px]" />

      <GridCarousel images={listingImages} />

      <h2 className="text-3xl font-semibold text-center text-black">Other properties</h2>

      <section className="overflow-x-scroll flex gap-2 ml-4">
        <PropertyPreview
          mainSrc={mainSrc}
          address={address}
          price={price}
          location={location}
          bath={bath}
          beds={beds}
          squareFt={squareFt}
        />
        {/* Repeat PropertyPreview for other properties */}
      </section>

      <div className="bg-gray-800 w-[95vw] max-w-[400px] mx-auto mt-6 p-6 rounded-lg max-h-[600px]">
        <h2 className="font-bold text-xl mb-4 sm:text-2xl">Request More Info</h2>
        <form className="flex flex-col space-y-4">
          <label className="flex flex-col">
            <span className="font-semibold sm:text-lg">Full Name</span>
            <input
              type="text"
              placeholder="Enter your full name"
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold sm:text-lg">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold sm:text-lg">Interest</span>
            <textarea
              placeholder={`I am interested in ${address}`}
              className="mt-1 p-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
              rows={3}
            />
          </label>

          <button
            type="button"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition sm:text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Property;
