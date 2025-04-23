"use client"

import { closerData, heroData, uploadSteps} from '@/data/data'
import {  ThreeBoxHero, VerticalImageTextBox } from 'focusflow-components'
import Link from 'next/link'
import ScrollCarousel from '@/components/scrollCarousel/scrollCarousel'
import ClosingCTA from '@/components/cta/closingCta'
import logo from '../../public/focusFlow-brain-nobg.webp'
const Homepage = () => {

    const button1 = (
        <Link href="/listing/123-main-street">
          <button
            className="mr-6 p-3 rounded-2xl bg-[#00b3e6] hover:bg-[#00c2f7] hover:scale-[1.15] hover:shadow-xl hover:shadow-[#00b3e6] transition-all duration-300 ease-in-out"
          >
            View live property
          </button>
        </Link>
      );
      
      const button2 = (
        <Link href="https://property-uploader.sanity.studio/">
          <button
            className="mr-0 p-3 rounded-2xl bg-[#00b3e6] hover:bg-[#00c2f7] hover:scale-[1.15] hover:shadow-xl hover:shadow-[#00b3e6] transition-all duration-300 ease-in-out"
          >
            Upload your own
          </button>
        </Link>
      );
      
      


    return (
        <main className='overflow-x-hidden'>
                <ThreeBoxHero
                {...heroData}
                textColor='text-white'
        button1={button1}
        button2={button2}
                />

                <ScrollCarousel
                images={uploadSteps}
                />

                <ClosingCTA
                src={logo}
                atl
                title={closerData.title}
                gradientColor={'#00bfff'}
               description={closerData.description}
               buttonText='Upload Property'
               buttonLink='https://property-uploader.sanity.studio/structure/property;28655ecc-4b69-4ea3-ba09-09f7b50ba743%2Ctemplate%3Dproperty'
                />

                {/* <VerticalImageTextBox
                {...closerData}
                button={button2}
                
                /> */}
        </main>
    )
}

export default Homepage