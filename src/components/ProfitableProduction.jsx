import React from 'react'
import CommonBtn from './common/CommonBtn'
import { StarIcons } from './common/Icons'

const ProfitableProduction = ({ image, lable, heading,heading2, para1, para2,displayHidden }) => {
    return (
        <>
            <div className='pt-14 pb-20 md:py-32 lg:py-40 xl:py-44 '>
                <div className='custom_container container px-5 mx-auto'>
                    <div className='flex flex-col-reverse lg:flex-row justify-center text-center lg:-mx-4'>
                        <div className='w-full lg:w-5/12 lg:px-4  mt-8 lg:mt-0'>
                            <div className='relative h-full lg:pe-10'>
                                <div className={`absolute lg:-bottom-15 lg:-left-20 p-5 flex  justify-center flex-col gap-5 text-[#030F26] bg-white text-start h-[190px] w-[300px] ${displayHidden}`}>
                                    <span className='flex items-center justify-center bg-[#9E1E1D] h-13 w-13'><StarIcons /> </span>
                                    <p className='text-xl lg:text-2xl'>Get the Discount for the first time visit <span className='font-bold'>25%</span></p>
                                </div>
                                <img className='h-full object-cover min-h-[230px]' src={image} alt="profitable-product" />
                            </div>
                        </div>
                        <div className='w-full lg:w-7/12 lg:px-4'>
                            <div className='relative text-start'>

                                <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> {lable}</p>
                                <h2 className='font-extrabold text-2xl md:text-5xl xl:text-6xl xl:leading-[120%] text-start my-4.5'>
                                    {heading}
                                </h2>
                                <div className='font-normal text-lg lg:text-xl text-black text-start'>
                                  <p className='font-normal text-lg lg:text-xl text-black text-start'>{para1}</p>  <br />
                                    <h3 className={` text-2xl lg:text-4xl font-semibold text-[#030F26]`}>{ heading2}</h3><br />
                                  <p className='font-normal text-lg lg:text-xl text-black text-start'>  {para2}</p></div>
                                <div className='mt-5 md:mt-12 lg:mt-14 flex gap-5 items-center flex-wrap'>
                                    <CommonBtn btnName="Read All" btnStyling=" py-2.5 px-3 xl:px-6" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProfitableProduction
