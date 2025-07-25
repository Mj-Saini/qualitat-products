/* eslint-disable no-const-assign */
import React from 'react'
import Hero from '../components/Hero'
import { demandsList, FarmSunstainList, keyHighlight } from '../components/common/Helper'
import ProfitableProduction from '../components/ProfitableProduction'
import breedProgramImg from '../assets/images/webp/breed-program-img.webp'
import { ArrowIcons, DoubleQuoteIcons, StarIcons } from '../components/common/Icons'
import Slider from 'react-slick'
import CommonBtn from '../components/common/CommonBtn'
import MarqueeSlide from '../components/MarqueeSlide'

import profitProductImg from '../assets/images/webp/profitable-product-img.webp'
import whoWeServeImg from '../assets/images/png/we-serve.png'
import customer1 from '../assets/images/png/customer1.png'
import newsImg from '../assets/images/png/news-img.jpg'


const LandingPage = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

    };
    return (
        <div>
          
            <Hero />
            <section className='bg-[#9E1E1D] text-white'>
                <div className='custom_container container px-5 mx-auto py-10'>
                    <div className='flex flex-wrap justify-between'>
                        {keyHighlight.map((items, index) => {
                            return (
                                <div key={index} className='xl:w-1/3 mt-3'>
                                    <div className='flex items-center gap-5 pe-4'>
                                        <span> {items.img}</span>
                                        <div>
                                            <h2 className='font-semibold text-xl md:text-2xl xl:text-[28px]'>{items.title}</h2>
                                            <p className='text-lg md:text-xl font-normal text-white/80'>{items.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
            <ProfitableProduction image={profitProductImg} heading="Sustainable and profitable production" lable="Achieve an effective" para1="At VikingGenetics, we help feed the world’s expanding population and sustain the earth’s natural resources by breeding healthy, efficient, trouble-free cows." para2=" As a co-operative, VikingGenetics' members are dairy and beef farmers in Denmark, Sweden, and Finland. " />
            <div className='pb-24 md:pb-32 lg:pb-40 xl:pb-44 overflow-hidden'>
                <div className='custom_container container px-5 mx-auto'>
                    <div className='flex flex-col lg:flex-row-reverse justify-center text-center -mx-4'>
                        <div className='w-full lg:w-6/12 lg:px-4'>
                            <div className='relative h-full lg:ps-10'>
                                <div className='absolute hidden md:flex lg:-bottom-15 left-0 p-5 w-[400px]  justify-center flex-col gap-5 text-[#030F26] bg-white text-start '>

                                    <p className='text-xl lg:text-2xl font-semibold'>Beef-on-dairy options </p>
                                    <p className='text-base lg:text-lg font-normal text-[#030F26E5]'>
                                        We offer premium-quality products at manu reduce compromising on quality.
                                    </p>
                                </div>
                                <div className='absolute hidden md:flex lg:top-1/2 -translate-y-1/2 lg:-right-0 p-5 w-[400px]  justify-center flex-col gap-5 text-[#030F26] bg-white text-start '>

                                    <p className='text-xl lg:text-2xl font-semibold'>Sexed semen for expansion</p>
                                    <p className='text-base lg:text-lg font-normal text-[#030F26E5]'>
                                        Our strong and efficient distribution network guarantees timely ipsum and  operations.
                                    </p>
                                </div>
                                <div className='absolute hidden md:flex lg:-top-15 lg:right-10 p-5 w-[400px]  justify-center flex-col gap-5 text-[#030F26] bg-white text-start '>

                                    <p className='text-xl lg:text-2xl font-semibold'>High-fertility sires indexes </p>
                                    <p className='text-base lg:text-lg font-normal text-[#030F26E5]'>
                                        Every bottle we supply adheres to pharmacopeial standards.
                                    </p>
                                </div>
                                <img className='h-full object-cover' src={breedProgramImg} alt="profitable-product" />
                            </div>
                        </div>
                        <div className='w-full lg:w-6/12 lg:px-4 mt-8 lg:mt-0'>
                            <div className='relative text-start'>

                                <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> WHY Choose Us</p>
                                <h2 className='font-extrabold text-2xl md:text-5xl xl:text-6xl xl:leading-[120%] text-start my-4.5'>
                                    Precision-Driven Breeding Programs
                                </h2>
                                <p className='font-normal text-lg lg:text-xl text-black text-start'>From genomic testing to tailored mating plans, our approach puts data at the heart of every decision. <br /><br /> Our sires are selected using the latest in DNA analysis, ensuring accurate predictions and faster genetic progress. </p>
                                <div className='mt-5 md:mt-12 lg:mt-14 flex gap-5 items-center flex-wrap'>
                                    <CommonBtn btnName="Read All" btnStyling=" py-2.5 px-3 xl:px-6" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Farm sustainably and enjoy life  */}


            <div className='pb-14 md:pb-32 lg:pb-40 xl:pb-44 overflow-hidden'>
                <div className='custom_container container px-5 mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-4.5'>
                        <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> Sustainable Progress</p>
                        <h2 className='font-semibold text-3xl md:text-5xl xl:text-6xl xl:leading-[120%] text-center'>Farm sustainably and enjoy life</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:mt-10 lg:mt-20">
                        {FarmSunstainList.map((item, index) => {
                            let totalCols = 1; // default mobile
                            if (typeof window !== 'undefined') {
                                const width = window.innerWidth;
                                if (width >= 1280) {
                                    // xl:grid-cols-3
                                    totalCols = 3;
                                } else if (width >= 640) {
                                    // sm:grid-cols-2
                                    totalCols = 2;
                                }
                            }

                            const row = Math.floor(index / totalCols);
                            const col = index % totalCols;
                            const isFirstRow = row === 0;
                            const isLastRow = index >= FarmSunstainList.length - totalCols;
                            const isFirstCol = col === 0;
                            const isLastCol = col === totalCols - 1;

                            const borderClasses = [
                                !isFirstRow && 'border-t border-[#ccc]',
                                !isLastRow && 'border-b border-[#ccc]',
                                !isFirstCol && 'border-l border-[#ccc]',
                                !isLastCol && 'border-r border-[#ccc]',
                            ]
                                .filter(Boolean)
                                .join(' ');

                            return (
                                <div key={index} className={`sm:px-4 py-8 lg:py-10 ${borderClasses}`}>
                                    <div className="flex flex-col text-start">
                                        <span className="flex items-center justify-center bg-[#9E1E1D] h-13 w-13">
                                            <StarIcons />
                                        </span>
                                        <h3 className="font-semibold text-xl lg:text-2xl text-[#030F26E5] mt-6 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="font-normal text-base lg:text-lg text-[#030F26E5]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                </div>
            </div>


            <MarqueeSlide />
            <ProfitableProduction displayHidden="hidden" image={whoWeServeImg} heading="Medical-Grade Glucose Bottle Supply" heading2="OEM / Private Labeling" lable="Who We Serve" para1="Safeguarding the health of children is paramount. Pediatric vaccines ensure that the little ones are protected from a variety of diseases, promoting their health and well-being from an early age. From infancy to adolescence, we provide vaccines that meet the highest standards of safety and efficacy, giving parents peace of mind." para2={"Pregnancy is a special time in a woman's life, and protecting the health of both the mother and the baby is of utmost importance. We distribute specialized maternal vaccines to prioritize the health of expectant mothers and are safe and effective during pregnancy."} />
            {/* GLOBAL DEMANDS */}
            <section className='pb-14 md:pb-32 lg:pb-40 xl:pb-44 overflow-hidden'>
                <div className='custom_container container px-5 mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-4.5'>
                        <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> global demand</p>
                        <h2 className='font-semibold text-3xl md:text-5xl xl:text-6xl xl:leading-[120%] text-center'>Growing to meet global demand</h2>
                    </div>

                    <div className="flex flex-wrap justify-center mt-10 lg:mt-20 sm:-mx-3">
                        {demandsList.map((items, index) => (

                            <div key={index} className='w-full sm:w-1/2 lg:w-1/4 sm:px-3 mt-6 lg:mt-0'>
                                <div className='relative h-[250px] w-full group overflow-hidden'>
                                    <div className='absolute bottom-0 -left-full p-5 w-full h-full bg-black/50 z-10 flex flex-col justify-center gap-3 duration-300 group-hover:opacity-100 opacity-0  group-hover:left-0'>
                                        <h3 className='font-semibold text-xl lg:text-2xl text-white'>{items.title}</h3>
                                        <p className='font-normal text-base lg:text-lg text-white/80'>{items.description}</p>
                                        <button className='flex gap-2 py-2.5 capitalize font-semibold text-base lg:text-lg text-white duration-300'>Explore More <span><ArrowIcons /></span></button>

                                    </div>
                                    <img className='h-full w-full object-cover' src={items.img} alt={items.title} />
                                </div>
                            </div>))}
                        <div className='mt-8'>
                            <CommonBtn path='/products' btnName="View All" btnStyling=" py-2.5 px-3 xl:px-6" />
                        </div>
                    </div>


                </div>
            </section>


            {/* CUSTOMER REVIEW */}
            <section className='pb-14 pt-6 md:pb-32 lg:pb-40 xl:pb-44 overflow-hidden'>
                <div className='custom_container container px-5 mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-4.5'>
                        <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> testimonial</p>
                        <h2 className='font-semibold text-3xl md:text-5xl xl:text-6xl xl:leading-[120%] text-center'>Meet our customers</h2>
                    </div>

                    <Slider {...settings}>
                        {demandsList.map((items, index) => (
                            <div key={index}>
                                <div className="flex flex-col md:flex-row md:mt-10 lg:mt-20 -mx-3">

                                    <div className='w-full md:w-1/2 px-3 mt-6 lg:mt-0'>
                                        <div className='relative h-full w-full group overflow-hidden'>
                                            <DoubleQuoteIcons />

                                            <p className='font-normal text-xl lg:text-2xl xl:text-3xl xl:leading-[160%] text-[#2E3646] mt-7'>Bjarne Refsgaard milks 125 Holstein cows at the Vester Bjerregård farm in West Jutland, Denmark. He and his wife purchased the farm in 1991, along with the high-quality herd that came with it.</p>
                                            <h3 className='font-semibold text-xl lg:text-2xl xl:3xl text-black mt-10 uppercase'>VH Gosvid</h3>
                                            <p className='font-medium text-xl lg:text-2xl text-[#353535] mt-2'>Qualitat Products</p>




                                        </div>
                                    </div>
                                    <div className='w-full md:w-1/2 px-3 mt-6 lg:mt-0'>
                                        <div className='flex justify-end'>
                                            <div className='relative w-full lg:w-[530px] lg:h-[530px] bg-[#353535] rounded-full  group overflow-hidden'>
                                                <img className='' src={customer1} alt='customer' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}</Slider>


                </div>
            </section>


            {/* NEWS */}
            <section className='mt-6 md:mb-32 lg:mb-40 xl:mb-44  bg-[#C8F9E4] py-6 relative'>
                <div className='custom_container container px-5 mx-auto'>
                    <div className="flex flex-col md:flex-row md:mt-10 lg:mt-20 -mx-3">

                        <div className='w-full md:w-1/2 px-3 mt-6 lg:mt-0'>
                            <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> testimonial</p>
                            <div className='relative h-full w-full group overflow-hidden'>
                                <div className='pb-6 mt-10 border-b border-[#000]'>

                                    <span className='font-semibold text-xl lg:text-2xl lg:leading-[140%] text-[#2E3646] '>10 Jul 2025</span>
                                    <p className='font-semibold text-2xl lg:text-3xl xl:text-4xl xl:leading-[140%] text-[#2E3646] '>
                                        New milestone in Red Cow Diplomacy</p>
                                </div>
                                <div className='pb-6 mt-10 border-b border-[#000]'>

                                    <span className='font-semibold text-xl lg:text-2xl lg:leading-[140%] text-[#2E3646] '>10 Jul 2025</span>
                                    <p className='font-semibold text-2xl lg:text-3xl xl:text-4xl xl:leading-[140%] text-[#2E3646] '>
                                        New milestone in Red Cow Diplomacy</p>
                                </div>
                                <div className='pb-6 mt-10 border-b border-[#000]'>

                                    <span className='font-semibold text-xl lg:text-2xl lg:leading-[140%] text-[#2E3646] '>10 Jul 2025</span>
                                    <p className='font-semibold text-2xl lg:text-3xl xl:text-4xl xl:leading-[140%] text-[#2E3646] '>
                                        New milestone in Red Cow Diplomacy</p>
                                </div>
                                <div className='pb-6 mt-10 border-b border-[#000]'>

                                    <span className='font-semibold text-xl lg:text-2xl lg:leading-[140%] text-[#2E3646] '>10 Jul 2025</span>
                                    <p className='font-semibold text-2xl lg:text-3xl xl:text-4xl xl:leading-[140%] text-[#2E3646] '>
                                        New milestone in Red Cow Diplomacy</p>
                                </div>

                            </div>
                        </div>
                        <div className='w-full md:w-1/2 px-3 mt-6 lg:mt-0'>
                            <div className='flex justify-end'>
                                <div className='relative w-full h-[400px] md:h-full md:w-[43%] md:absolute top-0 right-0 bg-[#353535] group overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={newsImg} alt='customer' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
        </div>
    )
}

export default LandingPage
