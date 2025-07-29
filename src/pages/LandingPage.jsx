/* eslint-disable no-const-assign */
import React from 'react'
import Hero from '../components/Hero'
import { demandsList, FarmSunstainList, keyHighlight } from '../components/common/Helper'
import breedProgramImg from '../assets/images/webp/breed-program-img.webp'
import { DoubleQuoteIcons, StarIcons } from '../components/common/Icons'
import Slider from 'react-slick'
import CommonBtn from '../components/common/CommonBtn'
import MarqueeSlide from '../components/MarqueeSlide'

import Founder from '../assets/images/png/dr-anil.jpeg'
import wwsVideo from '../../src/assets/video/WhatsApp Video 2025-07-29 at 11.49.15.mp4'
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

            <div className='pt-14 pb-20 md:py-32 lg:py-40 xl:py-44 '>
                <div className='custom_container container px-5 mx-auto'>
                    <div className='flex flex-col-reverse lg:flex-row justify-center items-center text-center lg:-mx-4'>
                        <div className='w-full lg:w-5/12 lg:px-4  mt-8 lg:mt-0'>
                            <div className='relative h-full lg:pe-10'>
                             
                                <img className='h-full object-cover min-h-[230px]' src={Founder} alt="profitable-product" />
                            </div>
                        </div>
                        <div className='w-full lg:w-7/12 lg:px-4'>
                            <div className='relative text-start'>

                                <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span>QUALITAT PRODUCTS (INDIA): EMPOWERING DAIRY FARMERS NATIONWIDE</p>
                                <h2 className='font-extrabold text-2xl md:text-5xl xl:leading-[120%] text-start my-4.5'>
                                    Dr. Anil Berry
                                </h2>
                                <h2 className='font-extrabold text-lg md:text-xl xl:leading-[120%] text-start pb-4'>
                                    Founder & Visionary Leader, Qualitat Products India
                                </h2>
                                <div className='font-normal text-lg lg:text-xl text-black text-start'>
                                    <p className='font-normal text-lg lg:text-xl text-black text-start'>From a humble beginning in 1981, Dr. Anil
                                        Berry embarked on a visionary journey to revolutionize animal health and livestock productivity in India. Under his inspired
                                        leadership, Qualitat Products India has
                                        evolved into a respected name in the
                                        veterinary and animal husbandry industry,
                                        offering innovative solutions across the
                                        poultry, dairy, and livestock sectors.

                                    </p>  <br />

                                    Driven by foresight and a commitment to
                                    global excellence, Dr. Berry forged a
                                    strategic partnership with World Wide Sires
                                    (WWS), USA—ushering in world-class
                                    bovine genetics to Indian farms. This
                                    collaboration has positioned Qualitat as a
                                    vital link between international innovation
                                    and Indian agriculture, supplying premium
                                    WWS semen to progressive farmers,
                                    cooperatives, and government agencies
                                    nationwide. <br /> <br />
                                    His relentless pursuit of genetic
                                    improvement has taken Qualitat beyond
                                    borders—expanding into Nepal and
                                    Bangladesh and supporting dairy
                                    development across South Asia. From
                                    importing Merino sheep from Australia and
                                    elite pig genetics from Canada, to sourcing
                                    top-tier horse semen from Germany, Dr.
                                    Berry’s efforts are consistently aimed at
                                    improving animal productivity and
                                    enhancing rural livelihoods.
                                    <br /> <br />
                                    A standout initiative under his leadership is
                                    Qualitat’s tie-up with Nestlé to promote
                                    high-yielding cattle genetics. This initiative
                                    aligns productivity with sustainability—
                                    empowering farmers to produce more milk
                                    with fewer animals, thereby reducing the
                                    overall carbon footprint of dairy farming. It’s
                                    a perfect example of how innovation can
                                    serve both economic and environmental
                                    goals. <br /><br />
                                    Today, Qualitat is more than a company—
                                    it’s a movement. A name synonymous with
                                    reliability, innovation, and global standards
                                    in livestock development. And at its heart is
                                    Dr. Anil Berry—a passionate pioneer whose
                                    vision continues to uplift farming
                                    communities and shape the future of
                                    sustainable agriculture.
                                </div>
                                <div className='mt-5 md:mt-12 lg:mt-14 flex gap-5 items-center flex-wrap'>
                                    <CommonBtn btnName="Read All" btnStyling=" py-2.5 px-3 xl:px-6" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pb-24 md:pb-32 lg:pb-40 xl:pb-44 overflow-hidden'>
                <div className='custom_container container px-5 mx-auto'>
                    <div className='flex flex-col lg:flex-row-reverse justify-center items-center text-center -mx-4'>
                        <div className='w-full lg:w-6/12 lg:px-4'>
                            <div className='relative h-full lg:ps-10'>

                                <img className='h-full object-cover' src={breedProgramImg} alt="profitable-product" />
                            </div>
                        </div>
                        <div className='w-full lg:w-6/12 lg:px-4 mt-8 lg:mt-0'>
                            <div className='relative text-start'>

                                <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'>
                                    {/* <span className='black_star'><StarIcons /></span> */}
                                    ✅ WHY Choose Us</p>
                                <h2 className='font-extrabold text-2xl md:text-5xl xl:text-6xl xl:leading-[120%] text-start my-4.5'>
                                    Precision-Driven Breeding Programs
                                </h2>
                                <p className='font-normal text-lg lg:text-xl text-black text-start'>At Qualitat Products (India), we believe that success in modern dairying starts with precision and science-backed decision-making. Our Precision-Driven Breeding Programs are designed to take the guesswork out of genetics and empower farmers with consistent, high-performing results.
                                    <br /><br />
                                    Through advanced genetic selection, data analysis, and reproductive strategies, we ensure that each sire and dam pairing contributes meaningfully to herd improvement. We focus not just on milk production, but on fertility, longevity, health traits, and overall profitability—because real progress is measured in generations.
                                    <br /><br />By using top-ranking bulls with proven records (such as elite TPI, HCR, and CCR values), our breeding programs aim to:



                                </p>

                                <ul className='list-disc flex flex-col gap-2 text-start ps-5 ml-2 mt-6'>
                                    <li className='font-normal text-lg lg:text-xl text-[#2E3646] text-start'>
                                        <strong> Increase conception rates
                                        </strong>
                                    </li>
                                    <li className='font-normal text-lg lg:text-xl text-[#2E3646] text-start'>
                                        <strong>Reduce calving intervals</strong>
                                    </li>
                                    <li className='font-normal text-lg lg:text-xl text-[#2E3646] text-start'>
                                        <strong> Strengthen herd health and immunity</strong>
                                    </li>
                                    <li className='font-normal text-lg lg:text-xl text-[#2E3646] text-start'>
                                        <strong> Maximize genetic gain with every generation</strong>
                                    </li>

                                </ul>

                                <p className='font-normal text-lg lg:text-xl text-black text-start'>We also integrate real-time
                                    performance data and on-ground
                                    support to help you make smarter,
                                    faster, and more profitable breeding
                                    decisions.</p>

                                <div className='mt-5 md:mt-12 lg:mt-14 flex gap-5 items-center flex-wrap'>
                                    <CommonBtn btnName="Read All" btnStyling=" py-2.5 px-3 xl:px-6" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/*SHAPING DAIRY FUTURES WITH SMART SOLUTIONS */}


            <div className='pb-14 md:pb-32 lg:pb-40 xl:pb-44 overflow-hidden'>
                <div className='custom_container container px-5 mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-4.5'>
                        {/* <p className='font-semibold text-lg md:text-xl xl:text-2xl flex items-center gap-2 uppercase'> <span className='black_star'><StarIcons /></span> Sustainable Progress</p> */}
                        <h2 className='font-semibold text-3xl md:text-5xl xl:leading-[120%] text-center'>SHAPING DAIRY FUTURES WITH <span className='lg:block text-[#9E1E1D]'>SMART SOLUTIONS</span></h2>
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
            <div className='py-24 md:py-32 lg:py-40 xl:py-44 overflow-hidden'>
                <div className='custom_container container px-5 mx-auto'>
                    <div className='flex flex-wrap items-center justify-center text-center lg:-mx-4'>
                        <div className='w-full lg:w-6/12 lg:px-4'>
                            <div className='relative h-full lg:ps-10'>
                                <video autoPlay
                                    muted
                                    loop
                                    playsInline
                                    controls src={wwsVideo}></video>
                            </div>
                        </div>
                        <div className='w-full lg:w-6/12 lg:px-4 mt-8 lg:mt-0'>
                            <div className='relative text-start'>


                                <p className='font-normal text-lg lg:text-xl text-black text-start'>World Wide Sires is proud to provide superior bovine genetics, innovative services and customized solutions helping our global customers be profitable and sustainable for generations to come. Our team is eager to strengthen current and grow new relationships with distributors and customers around the world.

                                    <br /><br />
                                    <strong>         World Wide Sires (WWS)</strong> is a global leader in bovine genetics, providing high-quality semen from top-ranking bulls known for their superior fertility, production, and longevity traits. With a presence in over 80 countries, WWS is committed to helping dairy farmers achieve genetic progress and long-term profitability through science



                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* GLOBAL DEMANDS */}
            {/* <section className='pb-14 md:pb-32 lg:pb-40 xl:pb-44 overflow-hidden'>
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
            </section> */}


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
            <section id='news' className='mt-6 md:mb-32 lg:mb-40 xl:mb-44  bg-[#C8F9E4] py-6 relative'>
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
