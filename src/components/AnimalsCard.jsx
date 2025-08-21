import React from 'react'
import { ArrowIcons } from './common/Icons'
import previewImg from '../assets/images/png/no-preview.jpg'
import { useCart } from '../context/CardContext';
// import { useCart } from '../context/CardContext';

const AnimalsCard = ({ mapData, btnStyling }) => {
      const { addToCart } = useCart();


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
                    <div className={`flex flex-col gap-2 mt-4 ${btnStyling ? 'hidden' : 'block'}`}>
                        <button onClick={handleOpenPdf} className={`inline-flex items-center justify-center gap-2 py-2.5 capitalize font-semibold text-base lg:text-lg text-[#9E1E1D] cursor-pointer border border-[#9E1E1D] px-3 text-center ${btnStyling}`}>Explore More
                            <span className='red_Icon'><ArrowIcons />
                            </span>
                        </button>
                        <button  onClick={() => addToCart(mapData)} className={`btn btn-primary bg-[#9E1E1D] capitalize font-semibold text-base lg:text-lg text-white inline-block py-2.5 px-3 xl:px-6 cursor-pointer`}>Add to Cart
                        </button>
                       
                    </div>

                </div>

            </div>

        </>
    )
}

export default AnimalsCard
