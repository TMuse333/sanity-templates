"use client"

import { heroData, uploadSteps} from '@/data/data'
import {  ThreeBoxHero } from 'focusflow-components'
import Link from 'next/link'
import ScrollCarousel from '@/components/scrollCarousel/scrollCarousel'

const Homepage = () => {

    const button1 = (
        <Link href="/listing/123-main-street">
          <button
            className="mr-2 p-3 rounded-2xl bg-[#0088cc] hover:bg-[#007ab8] hover:scale-[1.05] hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            View live property
          </button>
        </Link>
      );
      
      const button2 = (
        <Link href="https://property-uploader.sanity.studio/">
          <button
            className="mr-0 p-3 rounded-2xl bg-[#0088cc] hover:bg-[#007ab8] hover:scale-[1.05] hover:shadow-lg transition-all duration-300 ease-in-out"
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

                <SlideShowCarousel
                images={uploadSteps}
                />
        </main>
    )
}

export default Homepage