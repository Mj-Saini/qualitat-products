// src/components/GeneticsGrid.jsx
import React from "react";
import { Link } from "react-router-dom";

const ResourcesPage = ({mapData,pageName}) => {
    return (
        <div className="container custom_container px-5 mx-auto mt-6 py-14 mb-10">
            <div className="flex flex-wrap">
                {mapData.map((item, idx) => (
                    <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 px-2.5 mt-5">
                        <div className="px-5 shadow-2xl h-full pb-5">
                            <Link

                                to={`${pageName}/${item.slug}`}
                                className=""
                            >
                                <img src={item.img} alt={item.title} className="w-full" />
                                <h3 className="heading text-2xl text-black my-2">{item.title}</h3>
                                <p className="body text-sm text-black">{item.author}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ResourcesPage
