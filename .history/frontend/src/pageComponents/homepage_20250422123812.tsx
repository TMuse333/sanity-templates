"use client"

import { heroData } from '@/data/data'
import {ThreeBoxHeroProps,ThreeBoxHero} from 'focusflow-components'
import Link from 'next/link'


const Homepage = () => {

const button1 = (
    <Link>
    </Link>
    <button>

    </button>
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