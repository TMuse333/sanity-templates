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

  //particles viliam lane
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
    <section className="w-[95vw] max-w-[800px] mx-auto
    ">

<section className="w-[95vw] flex flex-row
justify-center  mx-auto max-w-[800px] bg-gray-200
text-black">

    <Image
    src={mainSrc}
    alt='alternation'
    className="w-[95vw] max-w-[800px]
    rounded-2xl object-contain
    mx-auto"
    width={600}
    height={1300}
    />

    {/* <div className="md:grid grid-cols-2
    gap-2 mr-auto hidden ">
    <Image
    src={mainSrc}
    alt='alternation'
    className="w-[15vw] max-w-[400px]
    rounded-2xl object-contain
    mx-auto m-3 max-w-[170px] max-h-[115px]"
    width={600}
    height={1300}
    />
          <Image
    src={mainSrc}
    alt='alternation'
    className="w-[15vw] max-w-[400px]
    rounded-2xl object-contain
    mx-auto m-3 max-w-[170px]
     max-h-[115px]"
    width={600}
    height={1300}
    />
          <Image
    src={mainSrc}
    alt='alternation'
    className="w-[15vw] max-w-[400px]
    rounded-2xl object-contain
    mx-auto m-3 max-w-[170px]
    max-h-[115px]"
    width={600}
    height={1300}
    />
          <Image
    src={mainSrc}
    alt='alternation'
    className="w-[15vw] max-w-[400px]
    rounded-2xl object-contain
    mx-auto m-3 max-w-[170px]
    max-h-[115px]"
    width={600}
    height={1300}
    />
    </div> */}

    </section>
    
    <section className="w-full flex items-center
    justify-between max-w-[500px] mr-auto ">


    <h1 className="mt-4 mb-2 font-black
    text-2xl text-black">{address}</h1>
    <p className="text-2xl ml-4 my-auto
    font-black self-center 
    "><span className='text-black'>
     Price: </span>
     <span className="text-green-700">
     {price}$ </span>
      </p>
            </section>
    <h2 className="mb-2 font-extrabold
    text-xl text-gray-400">{location}</h2>
    </section>
    <section className="flex font-bold max-w-[800px]
    mx-auto text-black">
        <span className="ml-2 md:ml-0 mr-3">
            {beds}&nbsp;beds
        </span>
        <span className=" mr-3">
            {bath}&nbsp;baths
        </span>
        <span className=" mr-3">
            {squareFt}&nbsp;Square feet
        </span>
    </section>

    <section className="w-[95vw] max-w-[1200px]
    mx-auto text-black">
        <h3 className="font-bold
        my-4 text-xl sm:text-2xl">
            Property Description</h3>
            <p className="font-semibold">{propertyDescription}</p>




 

   
    <section className="flex flex-row">
    <div>
    <h3 className="font-bold
        my-4 text-xl sm:text-2xl">
    Property Specs</h3>
  
    <ul className="font-semibold">
       <li className="mb-2 sm:text-lg">Property type: {specs.type}</li>
       <li className="mb-2 sm:text-lg">Put on market: {specs.putOnMarket}</li>
       <li className="mb-2 sm:text-lg">Price per Sq Ft: {specs.priceSqFt}</li>
<li className="mb-2 sm:text-lg">Lot Size: {specs.lot}</li>
<li className="mb-2 sm:text-lg">Year Built: {specs.yearBuilt}</li>
    </ul>
    </div>

    <div>

  
      <h3 className="font-bold
        my-4 text-xl
        sm:text-2xl">
    Property highlights</h3>
   
    <ul className="font-semibold">
<li className="mb-2 sm:text-lg">Air Conditioning: {highlights.airConditioning}</li>
<li className="mb-2 sm:text-lg">Heating: {highlights.heating}</li>
<li className="mb-2 sm:text-lg">Foundation: {highlights.foundation}</li>
<li className="mb-2 sm:text-lg">Flooring: {highlights.flooring}</li>
<li className="mb-2 sm:text-lg">Style: {highlights.style}</li>
</ul>
</div>





<div className="flex items-center justify-center mx-auto
w-screen">



</div>




</section>
<h3 className="font-bold
        my-4 text-xl sm:text-2xl">
    Map for&nbsp;{address}</h3>
<iframe className="ml-auto mr-auto
        w-[80vw] sm:w-[50vw] max-w-[500px] mt-5"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5669.174538738048!2d-63.664255299999994!3d44.7280343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5989c1fe032eb9%3A0x6dd167bbacea91be!2s1361%20Bedford%20Hwy%2C%20Bedford%2C%20NS%20B4A%201C5!5e0!3m2!1sen!2sca!4v1716386513142!5m2!1sen!2sca"
width="600"
height="450"
style={{
border:'0'
}} // Pass the styles object here
allowFullScreen
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
>

</iframe>

  
           </section>


    <div className="bg-white shadow-md rounded-2xl p-6 w-[90vw] mx-auto
    text-black">
  <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
    60 Helen Creighton Court, Bedford, B4B 0Z5
  </h2>

  {/* Group 1 */}
  <div className="flex flex-col md:flex-row md:flex-wrap gap-4 py-4 border-b">
    <div className="md:w-1/3"><span className="font-medium">Status:</span> PENDING</div>
    <div className="md:w-1/3"><span className="font-medium">Listing Price:</span> $824,900</div>
    <div className="md:w-1/3"><span className="font-medium">MLS®:</span> 202507639</div>
    <div className="md:w-1/3"><span className="font-medium">Type:</span> Single Family</div>
    <div className="md:w-1/3"><span className="font-medium">Style:</span> Semi-Detached</div>
    <div className="md:w-1/3"><span className="font-medium">Age:</span> 3 years</div>
    <div className="md:w-1/3"><span className="font-medium">Square Footage (MLA):</span> 1,530 ft²</div>
    <div className="md:w-1/3"><span className="font-medium">Total Finished SqFt (TLA):</span> 2,980 ft²</div>
    <div className="md:w-1/3"><span className="font-medium">PID:</span> 41508821</div>
    <div className="md:w-1/3"><span className="font-medium">Bedrooms:</span> 4</div>
    <div className="md:w-1/3"><span className="font-medium">Full Baths:</span> 3</div>
    <div className="md:w-1/3"><span className="font-medium">Half Baths:</span> 0</div>
  </div>

  {/* Group 2 */}
  <div className="flex flex-col md:flex-row md:gap-6 gap-2 pt-4">
    <div className="md:w-1/3"><span className="font-medium">Water:</span> Municipal</div>
    <div className="md:w-1/3"><span className="font-medium">Sewer:</span> Municipal</div>
    <div className="md:w-1/3"><span className="font-medium">Utilities:</span> Cable, Electricity, High Speed Internet, Natural Gas</div>
  </div>
</div>
<GridCarousel
images={listingImages}
isGrid
/>
    </section>
  );
};

export default Property;
