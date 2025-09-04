import React from "react";
import aboutImg from "../assets/images/png/about-us-img.png";
import { ourTeamList, servicesList } from "../components/common/Helper";
import CommonHero from "../components/common/CommonHero";
import anantBerry from "../assets/images/png/Anant_Berry.jpeg";

const AboutPage = () => {

    const categories = ["Admin","Operations",  "Accounts","Sales & Marketing", "Delivery" ];

    return (
        <>


            <CommonHero heading=" Delivering Genetics & Services That Transform Dairy Farming" lable=" " heroBgImg="gallary_hero_bg_img" />


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
            <div className="container custom_container mx-auto px-4 py-16">
                <div className="flex flex-col-reverse items-center lg:flex-row justify-between px-[-12px] py-14 lg:py-28 lg:-mx-4">
                    {/* LEFT SIDE CONTENT */}
                    <div className="w-full xl:w-1/2 px-4">

                        <h1 className="font_outfit font-medium text-lg lg:text-5xl mt-3 lg:mt-4 xl:mt-6 text-black lg:leading-[60px]">
                            Meet Our Team Adviser – Mr. Anant Berry

                        </h1>
                        <p className="pt-3">Mr. Anant Berry is a trusted name in dairy genetics and herd improvement, with years of expertise in animal breeding and dairy farm management. As an official partner of World Wide Sires (WWS), he has been instrumental in connecting Indian farmers with world-class bovine genetics that enhance both productivity and profitability.
                            <br />

                            <br />
                            At Qualitat Products (India), Mr. Berry provides progressive farmers with expert guidance, technical support, and reliable access to high-quality semen. His leadership ensures farmers receive the right solutions at the right time, empowering them to adopt modern breeding practices.
                            <br />
                            <br />
                            With more than 20 years of sales experience and having served in multiple leadership positions, Mr. Berry brings unmatched knowledge, vision, and dedication to the dairy sector. His focus on innovation, digital integration, and farmer-centric services is driving sustainable growth and shaping the future of India’s dairy industry.
                        </p>




                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="w-full sm:w-8/12 lg:w-1/2 px-4 mx-auto">
                        <div className="flex justify-center">  <img src={anantBerry} alt="advisor-img" /></div>
                    </div>
                </div>
            </div>

            {/* Our team */}
            <div className="bg-gray-100 py-16 md:px-6">
                <div className="container custom_container px-4 mx-auto">
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-3">
                        Our Team Members
                    </h2>
                    <p className="text-base font-normal text-center mb-10">Meet the passionate individuals behind our mission.</p>
                    {/* <div className="flex flex-wrap">
                        {ourTeamList.map((team, index) => (
                            <div className="w-full sm:w-1/2 lg:w-1/4 p-4" key={index}>
                                <div
                                    className="bg-white rounded-xl shadow hover:shadow-2xl transition relative overflow-hidden group h-full">
                                    <div className="absolute top-0 -left-full group-hover:left-0 h-full text-center align-bottom overflow-auto duration-300 w-full bg-black/70 text-white p-6 flex items-center">
                                        <p>{team.about}</p>
                                    </div>
                                    <img className="w-full h-[280px]" src={team.img} alt="" />
                                    <div className="p-6 text-center">
                                        <h3 className="font-semibold text-lg md:text-xl">{team.Name}</h3>
                                        <p>{team.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> */}
                      {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6">{cat}</h3>
            <div className="flex flex-wrap">
              {ourTeamList
                .filter((team) => team.category === cat)
                .map((team, index) => (
                  <div className="w-full sm:w-1/2 lg:w-1/4 p-4" key={index}>
                    <div className="bg-white rounded-xl shadow hover:shadow-2xl transition relative overflow-hidden group h-full">
                      <div className="absolute top-0 -left-full group-hover:left-0 h-full text-center align-bottom overflow-auto duration-300 w-full bg-black/70 text-white p-6 flex items-center">
                        <p>{team.about}</p>
                      </div>
                      <img className="w-full h-[280px]" src={team.img} alt={team.Name} />
                      <div className="p-6 text-center">
                        <h3 className="font-semibold text-lg md:text-xl">{team.Name}</h3>
                        <p>{team.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
                </div>
            </div>
            {/* Products Section */}
            <div className="bg-white py-16 md:px-6">
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
            <div className="bg-gray-100 py-16 md:px-6">
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
