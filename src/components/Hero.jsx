


import React from 'react';
import Slider from 'react-slick';
import { ArrowIcons } from './common/Icons';
import CommonBtn from './common/CommonBtn';
import { heroSlides } from './common/Helper';



const HeroSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {heroSlides.map((slide, index) => (
        <div key={index}>
          <div className="relative h-[calc(100vh-80px)] w-full overflow-hidden flex items-center">
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
                  {/* <button className="flex gap-2 py-2.5 px-3 capitalize font-semibold text-base lg:text-lg text-white hover:bg-[#9E1E1D] duration-300">
                    Explore More <span><ArrowIcons /></span>
                  </button> */}
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
