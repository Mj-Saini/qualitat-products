import React from 'react'
import { ArrowIcons } from './common/Icons'
import { Link } from 'react-router'

const AnimalsCard = ({mapData,path}) => {
    return (
        <>
            <div className='relative h-[500px]'>
                <img className='w-full h-full object-cover' src={mapData.img} alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000E5] to-transparent flex flex-col justify-end p-5'>
                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[160%]'>{mapData.title}</h3>
                    <p className='text-base lg:text-lg font-normal text-white/80 leading-[160%] mt-1.5 mb-5 line-clamp-5'>{mapData.description}</p>
                    <Link to={path}  className='flex items-center gap-2 py-2.5 capitalize font-semibold text-base lg:text-lg text-white cursor-pointer'>Explore More <span><ArrowIcons /></span></Link>

                </div>

            </div>

        </>
    )
}

export default AnimalsCard
