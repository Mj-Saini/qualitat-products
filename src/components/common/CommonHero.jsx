import React from 'react'
import { StarIcons } from './Icons'

const CommonHero = ({heading,lable}) => {
  return (
    <>
       <div className='hero_bg_img h-[calc(70vh-87px)] relative flex'>
                <div className='bg-[#111111]/50 absolute w-full h-[calc(70vh-87px)] top-0 left-0'></div>
                <div className='custom_container container px-5 mx-auto grow'>
                    <div className='flex flex-col justify-center items-center text-start text-white h-full relative z-10'>

                        <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase text-center tracking-[1px]'> <span><StarIcons /></span> {lable}</p>
                        <h2 className='font-extrabold text-3xl md:text-4xl text-center lg:text-5xl xl:text-7xl leading-[120%] my-2'>
                          {heading}
                        </h2>
                
                    </div>
                </div>     </div>
    </>
  )
}

export default CommonHero
