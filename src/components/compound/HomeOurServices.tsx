import React, { useRef } from "react";
import Image from "next/image";
import underline_vector_dark from "../../../assets/images/underline-vector-dark.svg";
import tooth_image_light from "../../../assets/images/tooth-image-light.svg";
import tooth_image_dark from "../../../assets/images/tooth-image-dark.svg";
import { our_services } from "../../../constants";
import { OurServiceCard } from "../molecule";


const HomeOurServices = () => {


  return (
    <div className="bg-[#100E10] sm:px-5 px-2 w-full">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-white">
        <p className="flex flex-col">
          <span className="text-[#4e4e4e] text-base font-Pangram-Regular">
            Our Services
          </span>
          <Image src={underline_vector_dark} alt="" />
        </p>
        <h2 className="mt-4 text-[#100E10] text-[32px] leading-[38px] font-Pangram-Bold xs:w-[412px] w-full">
          Demand meets excellence at Dental Opulence.
        </h2>

        <div className="flex items-center mt-10">
          <div className="flex flex-col items-center justify-center">
            <div className="py-[26px] px-6 bg-[#100E10] rounded-full flex items-center justify-center w-fit">
              <Image src={tooth_image_light} alt="Tooth image light" />
            </div>
            <p className="font-Pangram-Bold text-xs mt-2">General Treatments</p>
          </div>
          <div className="ml-6 flex flex-col items-center justify-center">
            <div className="py-6 px-6 bg-transparent border border-[#100E10] rounded-full flex items-center justify-center w-fit">
              <Image src={tooth_image_dark} alt="Tooth image light" />
            </div>
            <p className="font-Pangram-Bold text-xs mt-2">
              Cosmetic Treatments
            </p>
          </div>
        </div>

        <div className="grid big:grid-cols-2 grid-cols-1 mt-10 gap-8">
          {our_services.map((service, index) => (
            <OurServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeOurServices;
