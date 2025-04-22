"use client"

import { heroData } from '@/data/data'
import { ThreeBoxHero } from 'focusflow-components'
import Link from 'next/link'


const Homepage = () => {

const button1 = (
    <Link
    href="/listing/123-main-street">
   
    <button className='mr-2 p-3 
    rounded-2xl bg-[#0088cc]
    hover:scale-[1.05] transition-transform'>
View live property
    </button>
    </Link>
)
const button2 = (
    <Link
    href="https://property-uploader.sanity.studio/structure/property;8ef96f76-0060-49d1-aa03-dba22c541b9f">
   
    <button  className='mr-0 p-3 bg-[#0088cc]
    rounded-2xl hover:scale-[1.05] transition-transform'>
Upload your own
    </button>
    </Link>
)


    return (
        <main className='overflow-x-hidden'>
                <ThreeBoxHero
                {...heroData}
        button1={button1}
        button2={button2}

                />
        </main>
    )
}

export default Homepage