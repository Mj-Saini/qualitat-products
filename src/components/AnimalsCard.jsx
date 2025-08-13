import React from 'react'
import { ArrowIcons } from './common/Icons'
import { useNavigate } from 'react-router-dom'
import bullImg from '../assets/images/png/bull-details-hero-img.png'

const AnimalsCard = ({ mapData, path }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(path, {
            state: mapData

        });
    };


    const handleScrollTop = (e) => {
        e.preventDefault()
        handleClick()
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <div className='relative h-[300px]'>
                <img className='w-full h-full object-fit' src={mapData.img || bullImg} alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000E5] to-transparent flex flex-col justify-end p-5'>
                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[160%]'>{mapData.name}</h3>
                    <p className='text-base lg:text-lg font-normal text-white/80 leading-[160%] mt-1.5 mb-5 line-clamp-5'>{mapData.description}</p>
                    <button onClick={handleScrollTop} className='flex items-center gap-2 py-2.5 capitalize font-semibold text-base lg:text-lg text-white cursor-pointer'>Explore More <span><ArrowIcons /></span></button>

                </div>

            </div>

        </>
    )
}

export default AnimalsCard
