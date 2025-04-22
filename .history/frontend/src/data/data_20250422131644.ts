import {ThreeBoxHero, ThreeBoxHeroProps} from 'focusflow-components'
 
 export const heroData: ThreeBoxHeroProps = {
    h1: "The Focus Flow property uploader",
    h2: "Generate a page for your property without writing code",
    pTag: "Fill out a form by clicking the b",
    boxData: [
      {
        title: "Step 1: Click on the upload your property button above",
        description: "the button will take you to where you can upload your own property",
      },
      {
        title: "Step 2: Make a new property",
        description: "On the left hand side of the scree, click on property, then click on plus.",
      },
      {
        title: "Step 3: Fill out form and publish",
        description: "Fill out all the necessary data in the form along with adding pictures, then publish!"+
        "",
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
  