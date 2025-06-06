import {ThreeBoxHero, ThreeBoxHeroProps} from 'focusflow-components'
 
 export const heroData: ThreeBoxHeroProps = {
    h1: "This is the CMS",
    h2: "Manage Your Listings Without Any Tech Skills",
    pTag: "Our custom-built CMS makes it super easy to upload, update, and publish properties — even if you've never touched code.",
    boxData: [
      {
        title: "Step 1: Click on the upload your property button above",
        description: "the button will take you to where you can upload your own property",
      },
      {
        title: "Step 2: Make a new property",
        description: "Enter your property’s address, price, photos, and features using clear, labeled fields.",
      },
      {
        title: "Step 3: Click Publish",
        description: "One click and your listing goes live on your site — fully styled and ready for buyers.",
      },
    ],
   
    bgColor: "bg-black",
    boxBgColor: "bg-[#0088cc]",
    gradient: {
        color1: "#0088cc",
        color2: "#000000", // darker version of #00bfff
      },
    textColor: "text-gray-300",
    
    
  };
  