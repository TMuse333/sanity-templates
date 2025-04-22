"use client"

import { heroData } from '@/data/data'
import {ThreeBoxHeroProps,ThreeBoxHero} from 'focusflow-components'
import Link from 'next/link'


const Homepage = () => {

const button1 = (
    <Link
    href="/listing/123-main-street">
   
    <button>
View p
    </button>
    </Link>
)


    return (
        <main className='overflow-x-hidden'>
                <ThreeBoxHero
                {...heroData}

                />
        </main>
    )
}

export default Homepage