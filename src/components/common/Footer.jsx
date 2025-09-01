/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../../assets/images/svg/logo.svg'
import { Link } from 'react-router'
import { InstaIcons, LinkedinIcons, YouTubeIcons } from './Icons'
import { FacebookIcon, Mail, Phone } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <section className='pt-14 bg-[#000000E5]'>
                <div className='custom_container container px-5 mx-auto'>
                    <div className="flex flex-wrap lg:-mx-3 pb-5">
                        <div className='w-full lg:w-1/3 lg:px-3 xl:pe-10'>
                            <Link onClick={handleScrollTop} to="/">   <img className='mb-6 sm:-translate-x-3.5' width={250} src={logo} alt="logo" /></Link>


                            <ul className='text-base lg:text-lg text-white flex gap-3 items-center mt-6'>
                                <li>
                                    <Link onClick={handleScrollTop} to="https://www.instagram.com/qualitatproducts.wws/" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><InstaIcons />
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={handleScrollTop} to="https://www.youtube.com/@qualitatproductsindia-worl1283" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><YouTubeIcons />
                                    </Link>
                                </li>

                                <li>
                                    <Link onClick={handleScrollTop} to="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><LinkedinIcons />
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={handleScrollTop} to="https://www.facebook.com/qualitatproducts-" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><FacebookIcon />
                                    </Link>
                                </li>

                            </ul>
                        </div>
                        <div className='w-full lg:w-2/3 lg:px-3 mt-6 lg:mt-0 lg:pt-20'>
                            <div className='flex flex-wrap justify-between'>
                                <div className='w-full sm:w-1/4 mb-4 sm:mb-0 mt-8 sm:mt-0'>
                                    <h4 className='font-semibold text-lg text-white uppercase'>Quick Links</h4>
                                    <ul className='text-base lg:text-lg text-white mt-6 flex flex-col gap-3'>

                                        <li><Link onClick={handleScrollTop} to="/news" className='hover:text-[#9E1E1D] uppercase'>News</Link></li>
                                        <li><Link onClick={handleScrollTop} to="/about-us" className='hover:text-[#9E1E1D] duration-300 uppercase'>About Us</Link></li>

                                        <li><Link onClick={handleScrollTop} to="/bulls" className='hover:text-[#9E1E1D] duration-300 uppercase'>Download</Link></li>

                                    </ul>
                                </div>
                                <div className='w-full sm:w-1/5 lg:w-1/4 mb-4 sm:mb-0 mt-8 sm:mt-0'>
                                    <h4 className='font-semibold text-lg text-white uppercase'>Products</h4>
                                    <ul className='text-base lg:text-lg text-white mt-6 flex flex-col gap-3'>
                                        <li><Link onClick={handleScrollTop} to="/products" className='hover:text-[#9E1E1D] duration-300 uppercase'>Dairy</Link></li>

                                    </ul>
                                </div>
                                <div className='w-full sm:w-1/2 mb-4 sm:mb-0 mt-8 sm:mt-0 text-white'>

                                    <h3 className='text-xl font-bold uppercase pb-2'>India Address</h3>
                                    <p className='text-white text-sm'>QUALITAT PRODUCTS (INDIA) PLOT NO- 805,
                                        INDUSTRIAL AREA- PHASE-2, CHANDIGARH- 160002</p>
                                  
                                     <Link href="mailto:qualitatproducts02@gmail.com"
                                        className=' pt-2 inline-flex items-center text-xs gap-2 text-[#00BFFF]'
                                    > <Mail /> qualitatproducts02@gmail.com</Link>
                                    <br />
                                    <Link href="tel:9592912726"
                                        className=' pt-2 inline-flex items-center text-xs gap-2 text-[#00BFFF]'
                                    > <Phone />9592912726, 9517772726</Link>

                                    <h3 className='text-xl font-bold uppercase pb-2  mt-10'>Dubai Address</h3>
                                    <p className='text-white text-sm'>Qualitat Products Dubai Unit No.107 Sheikh Al Latifa Building , Opposite AL Ras Metro Station ,Deira ,Dubai</p>
                                      

                                      <Link href="mailto:qualitatproductsdubai@gmail.com"
                                        className=' pt-2 inline-flex items-center text-xs gap-2 text-[#00BFFF]'
                                    > <Mail /> qualitatproductsdubai@gmail.com</Link> <br />
                                    <Link href="tel:+971 55 519 6545"
                                        className=' pt-2 inline-flex items-center text-xs gap-2 text-[#00BFFF]'
                                    > <Phone /> +971 55 519 6545</Link>
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* <p className='text-base lg:text-lg text-white text-center py-5 lg:py-[30px] mt-10 border-t border-white/20'>
                        Copyright © {currentYear} Chetan Medical & Distributors, All Rights Reserved.
                    </p> */}
                </div>
            </section>
        </>
    )
}

export default Footer
