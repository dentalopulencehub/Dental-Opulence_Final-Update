import React from "react";
import Image from "next/image";
import home_hero2_ill from "../../../assets/images/home-hero2-ill.svg";
import underline_vector from "../../../assets/images/underline-vector.svg";

const HomeHero2 = () => {
  return (
    <div className="bg-white sm:px-5 px-2 w-full">
      <div className="bg-[#100E10] w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex xl:flex-row flex-col justify-between gap-[70px] xl:gap-0">
        <div className="xl:max-w-[400px] md:w-[70%] w-[90%]">
          <h2 className="sm:text-[40px] text-[30px] text-white font-Pangram-Bold">
            Experience Dental Opulence: Radiant Smiles, Optimal Oral Health
          </h2>
          <Image src={home_hero2_ill} alt="" className="mt-10" />
        </div>

        <div className="xl:max-w-[690px] w-[90%] mx-auto flex flex-col xl:items-start items-center">
          <p className="flex flex-col items-center">
            <span className="text-white font-Pangram-Regular">About us</span>
            <Image src={underline_vector} alt="" />
          </p>
          <h4 className="text-white font-Pangram-Regular mt-6 sm:text-[30px] text-[20px] sm:leading-[43px] leading-[32px] xl:text-left text-center">
            Dental Opulence is a new dental clinic that offers a combination of
            general dentistry and cosmetic dentistry services. The clinic is
            equipped with modern facilities and technology to provide
            exceptional dental care. The team at Dental Opulence is dedicated to
            ensuring a comprehensive and comfortable dental experience for
            patients. The clinic&apos;s focus is on maintaining oral health and
            enhancing smiles through cosmetic procedures.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HomeHero2;
