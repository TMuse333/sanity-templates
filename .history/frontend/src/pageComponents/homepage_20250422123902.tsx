"use client"

import { heroData } from '@/data/data'
import {ThreeBoxHeroProps,ThreeBoxHero} from 'focusflow-components'
import Link from 'next/link'


const Homepage = () => {

const button1 = (
    <Link
    href="/listing/123-main-street">
   
    <button>
View live property
    </button>
    </Link>
)
const button2 = (
    <Link
    href="/listing/123-main-street">
   
    <button>
View live property
    </button>
    </Link>
)


    return (
        <main className='overflow-x-hidden'>
                <ThreeBoxHero
                {...heroData}
        button1={button1}

                />
        </main>
    )
}

export default Homepage