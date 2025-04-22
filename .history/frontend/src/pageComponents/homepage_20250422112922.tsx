"use client"

import { heroData } from '@/data/data'
import {ThreeBoxHeroProps} from 'focusflow-components'
import 


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