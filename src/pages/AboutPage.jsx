import React from "react";
import aboutImg from "../assets/images/png/about-us-img.png";
import { servicesList } from "../components/common/Helper";
import CommonHero from "../components/common/CommonHero";

const AboutPage = () => {
    return (
        <>
          

      <CommonHero heading=" Delivering Genetics & Services That Transform Dairy Farming" lable=" " heroBgImg="gallary_hero_bg_img"/>


            {/* About Section */}
            <div className="container custom_container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Qualitat Products (India) is a trusted name in the field of animal
                        breeding and dairy solutions, proudly serving farmers with
                        world-class genetics and reliable services. With a strong commitment
                        to farmer success, we bring globally renowned World Wide Sires (WWS)
                        semen to India, along with professional guidance and technical
                        support.
                    </p>
                    <p className="text-lg leading-relaxed">
                        By combining global genetics from WWS with local farmer support,
                        Qualitat Products (India) has become a reliable partner in dairy
                        growth. We don’t just supply semen – we deliver knowledge, service,
                        and trust.
                    </p>
                </div>
                <div className="flex justify-center">
                    <img
                        src={aboutImg}
                        alt="Dairy Farming"
                        className="rounded-2xl shadow-lg"
                    />
                </div>
            </div>

            {/* Products Section */}
            <div className="bg-white py-16 px-6">
                <div className="container custom_container px-4 mx-auto">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-3">
                        🔹 Products – World Wide Sires (WWS) Semen
                    </h2>
                    <p className="text-base font-normal text-center mb-10">WWS is a global leader in bovine genetics, and through Qualitat Products, Indian farmers gain
                        access to</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div className="p-6 border rounded-xl shadow  hover:shadow-2xl transition">
                            <h3 className="font-bold text-lg mb-2">Proven Bulls with High TPI</h3>
                            <p>Ensuring better milk yield, fertility, and longevity.</p>
                        </div>
                        <div className="p-6 border rounded-xl shadow  hover:shadow-2xl transition">
                            <h3 className="font-bold text-lg mb-2">
                                High HCR & CCR Value Sires
                            </h3>
                            <p>Improving conception rates and reproductive efficiency.</p>
                        </div>
                        <div className="p-6 border rounded-xl shadow  hover:shadow-2xl transition">
                            <h3 className="font-bold text-lg mb-2">Elite Red & Jersey Genetics</h3>
                            <p>Catering to diverse farmer needs and competition standards.</p>
                        </div>
                        <div className="p-6 border rounded-xl shadow  hover:shadow-2xl transition">
                            <h3 className="font-bold text-lg mb-2">
                                Next-Gen Semen Technology
                            </h3>
                            <p>Fresh, reliable, and performance-driven genetics.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="bg-gray-100 py-16 px-6">
                <div className="container custom_container px-4 mx-auto">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-3">
                        🔹 Our Services
                    </h2>
                    <p className="text-base font-normal text-center mb-10">By combining global genetics from WWS with local farmer support, Qualitat Products (India) has
                        become a reliable partner in dairy growth. The company not only supplies semen but also delivers
                        knowledge, service, and trust—helping farmers move towards greater profitability and long-term
                        success.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesList.map((service, index) => (
                            <div
                                key={index}
                                className="p-6 bg-white border rounded-xl shadow hover:shadow-2xl transition"
                            >
                                <h3 className="font-semibold text-lg">{service.heading}</h3>
                                <p>helping farmers choose the right sires for their herds.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

       
        </>
    );
};


export default AboutPage
