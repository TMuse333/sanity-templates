import {ThreeBoxHero, ThreeBoxHeroProps} from 'focusflow-components'
 
 export const heroData: ThreeBoxHeroProps = {
    h1: "This is the CMS",
    h2: "Manage Your Listings Without Any Tech Skills",
    pTag: "Our custom-built CMS makes it super easy to upload, update, and publish properties — even if you've never touched code.",
    boxData: [
      {
        title: "Step 1: Login to the Dashboard",
        description: "Just sign in with your credentials and you’ll land right in the property management panel.",
      },
      {
        title: "Step 2: Fill Out a Simple Form",
        description: "Enter your property’s address, price, photos, and features using clear, labeled fields.",
      },
      {
        title: "Step 3: Click Publish",
        description: "One click and your listing goes live on your site — fully styled and ready for buyers.",
      },
    ],
   
    bgColor: "bg-black",
    boxBgColor: "bg-[#0088cc",
    gradient: {
        color1: "#0088cc",
        color2: "#000000", // darker version of #00bfff
      },
    textColor: "text-gray-300",
    
    
  };
  