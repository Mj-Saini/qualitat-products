import React from 'react'
import { ourDistributorsList } from '../components/common/Helper'
import CommonHero from '../components/common/CommonHero'

const Distributors = () => {
    return (
        <>
            <CommonHero heading="The Faces Behind Our Strong Network" lable=" " heroBgImg="gallary_hero_bg_img" />
            <div className="bg-gray-100 py-16 lg:py-24 md:px-6">
                <div className="container custom_container px-4 mx-auto">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-3">
                      Our Distributors
                    </h2>
                    {/* <p className="text-base font-normal text-center mb-10">Meet the passionate individuals behind our mission.</p> */}
                    <div className="flex flex-wrap">
                        {ourDistributorsList.map((dist, index) => (
                            <div className="w-full sm:w-1/2 lg:w-1/4 p-2.5" key={index}>
                                <div
                                    className="bg-white rounded-xl h-full shadow hover:shadow-2xl transition relative"
                                >
                                    <img className='w-16 absolute top-2 right-2' src={dist.logo} alt="" />
                                   
                                        <img className="w-full h-[300px]" src={dist.img} alt="" />
                                   
                                    <div className="px-2 py-3  xl:p-6 text-center">
                                        <h3 className="font-semibold text-lg xl:text-xl">{dist.Name}</h3>
                                        <p className='font-medium text-base xl:text-lg'>{dist.company}</p>
                                        <p >{dist.add}</p>
                                        <p>{dist.contact}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Distributors
