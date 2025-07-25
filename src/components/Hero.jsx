import React from 'react'
import { ArrowIcons, StarIcons } from './common/Icons'
import CommonBtn from './common/CommonBtn'

const Hero = () => {
    return (
        <>
            <div className='hero_bg_img h-[calc(100vh-87px)] relative flex'>
                <div className='bg-[#111111]/50 absolute w-full h-[calc(100vh-87px)] top-0 left-0'></div>
                <div className='custom_container container px-5 mx-auto grow'>
                    <div className='flex flex-col justify-center text-start text-white h-full relative z-10 xl:w-2/3 '>

                        <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span><StarIcons /></span> BEST MEDICAL TREATMENT</p>
                        <h1 className='font-extrabold text-5xl md:text-6xl lg:text-8xl xl:text-[120px] xl:leading-[120%] my-2'>
                            Innovative breeding
                        </h1>
                        <p className='font-normal text-lg lg:text-xl text-white max-w-[630px]'>Get healthy, efficient, trouble-free cows with the highest milk production and the lowest use of antibiotics and hormones.</p>
                        <div className='mt-14 flex gap-5 items-center flex-wrap'>
                            <CommonBtn path="/products" btnName="View Products" btnStyling=" py-2.5 px-3 xl:px-6" />
                            <button className='flex gap-2 py-2.5 px-3 capitalize font-semibold text-base lg:text-lg text-white hover:bg-[#9E1E1D] duration-300'>Explore More <span><ArrowIcons /></span></button>
                        </div>
                    </div>
                </div>     </div>
        </>
    )
}

export default Hero
