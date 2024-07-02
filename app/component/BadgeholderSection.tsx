import { name } from '@cloudinary/url-gen/actions/namedTransformation'
import React from 'react'
import BadgeholderCard from '../(white_navbar)/explore/RetroPGF4/_component/BadgeholderCard'


const BadgeholderSection = () => {
    const currentItems = [
        {
            name: 'Test',
        },
        {
            name: 'Test',
        },
        {
            name: 'Test',
        },
        {
            name: 'Test',
        },
        {
            name: 'Test',
        },
        {
            name: 'Test',
        },
        {
            name: 'Test',
        },
        {
            name: 'Test',
        }
    ]
    return (
        <div className='xl:mx-10'>
            <div className='font-rubik text-black text-2xl'>Searchbar and sorting</div>
            <div className=" grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-4 flex-col gap-4">
              {currentItems.map((item, i) => (
                <React.Fragment key={i}>
                    <BadgeholderCard />
                </React.Fragment>
              ))}
            </div>
            

        </div>
    )
}

export default BadgeholderSection