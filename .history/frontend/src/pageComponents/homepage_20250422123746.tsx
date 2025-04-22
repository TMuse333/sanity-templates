"use client"

import { heroData } from '@/data/data'
import {ThreeBoxHeroProps,ThreeBoxHero} from 'focusflow-components'
import Link


const Homepage = () => {




    return (
        <main className='overflow-x-hidden'>
                <ThreeBoxHero
                {...heroData}

                />
        </main>
    )
}

export default Homepage