import React from 'react'
import { ArrowIcons } from './common/Icons'
import bullImg from '../assets/images/png/bull-details-hero-img.png'

const AnimalsCard = ({ mapData }) => {


      const handleOpenPdf = (e) => {
        e.preventDefault();
        if (mapData.detailsPdf) {
            window.open(mapData.detailsPdf, "_blank"); // opens PDF in new tab
        }
    };


   
    return (
        <>
            <div className='relative h-[300px]'>
                <img className='w-full h-full object-fit' src={mapData.img || bullImg} alt="" />
                <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000E5] to-transparent flex flex-col justify-end p-5'>
                    <h3 className='text-xl lg:text-2xl font-semibold text-white leading-[160%]'>{mapData.name}</h3>
                    <button onClick={handleOpenPdf}  className='flex items-center gap-2 py-2.5 capitalize font-semibold text-base lg:text-lg text-white cursor-pointer'>Explore More <span><ArrowIcons /></span></button>

                </div>

            </div>

        </>
    )
}

export default AnimalsCard
