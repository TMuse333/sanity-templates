

import { heroData } from '@/data/data'
import {ThreeBoxHero, ThreeBoxHeroProps} from 'focusflow-components'



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