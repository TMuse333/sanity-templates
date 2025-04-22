"use client"

import { heroData } from '@/data/data'
import {ThreeBoxHeroProps} from 'focusflow-components'
import ThreeBoxHero from '@/components/threeBoxHero/threeBoxHero'


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