"use client";

import React, {  useRef } from "react";


import Image, { StaticImageData } from "next/image";
import { AppearingGradient } from "focusflow-components";



// Define the props interface with title, description, and images array
interface Props {
    

    images: {
        src: string| StaticImageData;
        alt: string;
        title:string,
        description:string
       
    }[];
}

// ScrollableCarousel component without onClick features
const ScrollCarousel: React.FC<Props> = ({ images }) => {
  
    const ref = useRef(null)
    // const inView = useInView(ref)


    // Use the custom hook to get a ref and observe intersection






    // const handleMouseEnter = (index: number) => {
    //     setHoveredImage(index);
    // };

    // const handleMouseLeave = () => {
    //     setHoveredImage(null);
    // };

    return (
        <>
     <AppearingGradient
     darkColor="#00bfff"
     mainColor="#00bfff"
     brightColor="#00bfff"
     text="How to use the property uploader"
    subText="Folow these simple steps to seamless upload your listing"
    isMobile
    description
    
     />
            <section
                ref={ref}
                className={`relative w-screen ml-auto mb-[5rem] mt-[5rem] overflow-x-hidden
             bg-opacity-[0.2] py-8
max-h-[900px]`}
            >
              

                <div
                    className="w-screen pr-[1rem] pl-[1rem] flex ml-auto sm:ml-0 sm:mr-0 overflow-x-scroll overflow-y-hidden
                    "
                >
                    {images.map((image, index) => (
                        <div
                            className="w-[75vw] bg-black   rounded-2xl max-h-[800px] relative flex-shrink-0   mr-10
                            pb-6 max-w-[500px] overflow-x-hidden"
                            key={index}
                            // onMouseEnter={() => handleMouseEnter(index)}
                            // onMouseLeave={handleMouseLeave}
                            // style={{
                            //     transform: `translateY(${slideComplete ? '0' : '-12rem'}) `,
                            //     transitionDelay: `${(images.length - 1 - index) * 0.2}s, ${
                            //         0.2 + (images.length - 1 - index) * 0.2
                            //     }s`,
                            //     opacity: slideComplete ? 1 : 0,
                            //     transitionProperty: 'transform, opacity',
                            //     transitionDuration: '1s',
                            //     transitionTimingFunction: 'ease-in-out',
                            // }}
                        >
           

                            <h3 className="font-semibold text-2xl text-center px-4">{image.title}</h3>

                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="relative ml-auto mr-auto mt-4 w-full 
                                z-[5] object-contain  transition-all   rounded-lg
                    mb-auto border border-white
                                max-h-[700px]"
                                width={1000}
                                height={55}
                                
                            />
                            {/* <h5 className="text-white my-4  relative font-semibold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent text-xl">{image.title}</h5> */}
                            <p className="mt-4 text-center sm:text-lg
                            px-4 
                            ">{image.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ScrollCarousel;