/* eslint-disable no-unused-vars */
import React from 'react'
import logo from '../../assets/images/svg/logo.svg'
import { Link } from 'react-router'
import { FbIcons, InstaIcons, TelegramIcons, TwitterIcons } from './Icons'

const Footer = () => {
    const currentYear = new Date().getFullYear();
     const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
    return (
        <>
            <section className='pt-14 bg-[#000000E5]'>
                <div className='custom_container container px-5 mx-auto'>
                    <div className="flex flex-wrap lg:-mx-3">
                        <div className='w-full lg:w-1/3 lg:px-3 xl:pe-10'>
                            <img className='mb-6' width={100} src={logo} alt="logo" />
                       <ul className='text-base lg:text-lg text-white flex gap-3 items-center mt-6'>
                                        <li>
                                            <Link onClick={handleScrollTop} to="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><InstaIcons />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={handleScrollTop} to="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><TelegramIcons />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={handleScrollTop} to="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><TwitterIcons />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={handleScrollTop} to="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><FbIcons />
                                            </Link>
                                        </li>

                                    </ul>
                        </div>
                        <div className='w-full lg:w-2/3 lg:px-3 mt-6 lg:mt-0'>
                            <div className='flex flex-wrap justify-between'>
                                <div className='w-full sm:w-1/3 mb-4 sm:mb-0 mt-8 sm:mt-0'>
                                    <h4 className='font-semibold text-lg text-white uppercase'>Quick Links</h4>
                                    <ul className='text-base lg:text-lg text-white mt-6 flex flex-col gap-3'>
                                        <li><Link onClick={handleScrollTop} to="/" className='hover:text-[#9E1E1D] uppercase'>Cases</Link></li>
                                        <li><Link onClick={handleScrollTop} to="/#news" className='hover:text-[#9E1E1D] uppercase'>News</Link></li>
                                        <li><Link onClick={handleScrollTop} to="/" className='hover:text-[#9E1E1D] duration-300 uppercase'>About Us</Link></li>
                                        <li><Link onClick={handleScrollTop} to="/" className='hover:text-[#9E1E1D] duration-300 uppercase'>Career</Link></li>
                                        <li><Link onClick={handleScrollTop} to="/" className='hover:text-[#9E1E1D] duration-300 uppercase'>Management tips</Link></li>
                                        <li><Link onClick={handleScrollTop} to="/" className='hover:text-[#9E1E1D] duration-300 uppercase'>Download</Link></li>
                                        <li><Link onClick={handleScrollTop} to="/" className='hover:text-[#9E1E1D] duration-300 uppercase'>NAV Bull search</Link></li>
                                        <li><Link onClick={handleScrollTop} to="/" className='hover:text-[#9E1E1D] duration-300 uppercase'>Future-friendly farming</Link></li>
                                    </ul>
                                </div>
                                <div className='w-full sm:w-1/5 lg:w-1/3 mb-4 sm:mb-0 mt-8 sm:mt-0'>
                                    <h4 className='font-semibold text-lg text-white uppercase'>Products</h4>
                                    <ul className='text-base lg:text-lg text-white mt-6 flex flex-col gap-3'>
                                        <li><Link onClick={handleScrollTop} to="/" className='hover:text-[#9E1E1D] duration-300 uppercase'>Dairy</Link></li>
                                        <li><Link onClick={handleScrollTop} to="/" className='hover:text-[#9E1E1D] duration-300 uppercase '>poultry</Link></li>
                                    </ul>
                                </div>
                                {/* <div className='w-full sm:w-1/3 mb-4 sm:mb-0 mt-8 sm:mt-0'>
                                    <h4 className='font-semibold text-lg lg:text-xl text-white'>Follow Us</h4>
                                    <ul className='text-base lg:text-lg text-white flex gap-3 items-center mt-6'>
                                        <li>
                                            <Link onClick={handleScrollTop} to="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><InstaIcons />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={handleScrollTop} to="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><TelegramIcons />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={handleScrollTop} to="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><TwitterIcons />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link onClick={handleScrollTop} to="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#9E1E1D] duration-300 hover:border-[#9E1E1D] group border border-white rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center'><FbIcons />
                                            </Link>
                                        </li>

                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <p className='text-base lg:text-lg text-white text-center py-5 lg:py-[30px] mt-10 border-t border-white/20'>
                        {/* Copyright © {currentYear} Chetan Medical & Distributors, All Rights Reserved. */}
                    </p>
                </div>
            </section>
        </>
    )
}

export default Footer
