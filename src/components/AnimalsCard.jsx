import React from 'react'
import { ArrowIcons } from './common/Icons'
import previewImg from '../assets/images/png/no-preview.jpg'
import CommonBtn from './common/CommonBtn';

const AnimalsCard = ({ mapData }) => {


    const handleOpenPdf = (e) => {
        e.preventDefault();
        if (mapData.detailsPdf) {
            window.open(mapData.detailsPdf, "_blank");
        }
    };



    return (
        <>
            <div className='relative border border-[#ccc] hover:shadow-2xl duration-300'>
                <img className='w-full object-fit h-[300px]' src={mapData.img || previewImg} alt="" />
                <div className='w-full h-full  flex flex-col justify-end p-5'>
                    <h3 className='text-xl lg:text-2xl font-semibold text-black leading-[160%] uppercase'>{mapData.name}</h3>
                    <div className='flex flex-col gap-2 mt-4'>
                        <button onClick={handleOpenPdf} className='inline-flex items-center justify-center gap-2 py-2.5 capitalize font-semibold text-base lg:text-lg text-[#9E1E1D] cursor-pointer border border-[#9E1E1D] px-3 text-center'>Explore More
                            <span className='red_Icon'><ArrowIcons />
                            </span>
                        </button>
                         {/* <CommonBtn
                    path="/products"
                    btnName="View Products"
                    btnStyling="py-2.5 px-3 xl:px-6 text-center"
                  /> */}
                    </div>

                </div>

            </div>

        </>
    )
}

export default AnimalsCard
