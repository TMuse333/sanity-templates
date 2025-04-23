import { ThreeBoxHeroProps, VerticalImageTextBoxProps} from 'focusflow-components'
 
export const heroData: ThreeBoxHeroProps = {
    h1: "The Focus Flow Property Uploader",
    h2: "Realtors©, Generate a page for your listing without writing code",
    pTag: "Upload your listing data to the server and instantly generate a page.",
    boxData: [
      {
        title: "Get a page exactly how you want it",
        description: "Create custom property pages without writing any code. Our easy-to-use interface lets you design the listing exactly as you envision it.",
      },
      {
        title: "Upload at your own pace and make adjustments",
        description: "You can upload and adjust your property details at any time. No rush, no deadlines—go at your own pace.",
      },
      {
        title: "Easily manage and update your listings",
        description: "Want to make changes? Simply log in and update your property details with ease. It’s that simple!",
      },
    ],
    bgColor: "bg-black",
    boxBgColor: "bg-gradient-to-br from-[#0099cc] to-[#006699]",

    gradient: {
      color1: "#0088cc",
      color2: "#000000", // darker version of #00bfff
    },
    textColor: "text-gray-300",
    
  };

  export const uploadSteps = [
    {
        src:'/step-1.png',
        alt:'',
        description:'Click on the properties list, you will be able to see all the listings uploaded to your website',
        title:'Step 1: accessing properties list'
    },
    {
        src:'/step-2.png',
        alt:'',
        description:'Step two: click on the plus sign in the upper right corner of the list',
        title:'step 2: Create new property'
    },
    {
        src:'/step-3.png',
        alt:'',
        description:'Step 3: Fill out the form then click on publish',
        title:'Step 3: Fill form and upload'
    },

  ]

  export const closerData: VerticalImageTextBoxProps = {
    title: 'Get Your Property Online in Minutes',
    description: "Skip the hassle and effortlessly upload your property with our intuitive platform. Whether you're tech-savvy or not, our streamlined process makes it simple to list, update, and publish your property with ease. Save hours of time and start reaching motivated buyers faster than ever before.",

    subTitle: 'Upload faster and better',
    mainGradientColor: '#00bfff',
    darkGradientColor: '#00bfff',
    brightGradientColor: '#00bfff',
    isMobile: false,
    bgImage: '/time-saver.jpg'
  }
  
  
  