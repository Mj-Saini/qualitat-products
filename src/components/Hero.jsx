


import React from 'react';
import Slider from 'react-slick';
import { ArrowIcons } from './common/Icons';
import CommonBtn from './common/CommonBtn';
import video1 from '../assets/video/WhatsApp Video 2025-07-29 at 11.49.15.mp4';
import heroImage from '../assets/images/png/hero-bg-img.png'; // example image

const heroSlides = [
  {
    type: 'video',
    src: video1,
    title: 'Innovative breeding',
    description:
      'Get healthy, efficient, trouble-free cows with the highest milk production and the lowest use of antibiotics and hormones.',
  },
  {
    type: 'image',
    src: heroImage,
    title: 'Efficient Genetics',
    description:
      'Optimize your dairy herd with proven results from elite genetics and responsible farming.',
  },
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {heroSlides.map((slide, index) => (
        <div key={index}>
          <div className="relative h-[calc(100vh-87px)] w-full overflow-hidden flex items-center">
            {/* 🔹 Background media */}
            {slide.type === 'video' ? (
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={slide.src}
                alt={slide.title || 'Slide Background'}
              />
            )}

            {/* 🔹 Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" />

            {/* 🔹 Slide Content */}
            <div className="relative z-[2] container custom_container px-5 mx-auto grow">
              <div className="flex flex-col justify-center text-start text-white h-full xl:w-2/3">
                <h1 className="font-extrabold capitalize text-5xl md:text-6xl lg:text-8xl xl:text-[120px] xl:leading-[120%] my-2">
                  {slide.title}
                </h1>
                <p className="font-normal text-lg lg:text-xl max-w-[630px]">{slide.description}</p>

                <div className="mt-14 flex gap-5 items-center flex-wrap">
                  <CommonBtn
                    path="/products"
                    btnName="View Products"
                    btnStyling="py-2.5 px-3 xl:px-6"
                  />
                  <button className="flex gap-2 py-2.5 px-3 capitalize font-semibold text-base lg:text-lg text-white hover:bg-[#9E1E1D] duration-300">
                    Explore More <span><ArrowIcons /></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSlider;
