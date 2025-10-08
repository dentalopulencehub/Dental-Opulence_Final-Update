import React from "react";
import Image from "next/image";
import underline_vector_dark from "../../../assets/images/underline-vector-dark.svg";

const HomeAboutSection = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-white">
        <h2 className="text-[#100E10] sm:text-[34px] sm:leading-[42px] text-[28px] font-Pangram-Bold mb-6">
          Elevate Your Smile with Dental Opulence
        </h2>
        <p className="text-[#4e4e4e] text-base sm:text-[18px] leading-7 sm:leading-8 font-Pangram-Regular max-w-[900px]">
          Dental Opulence is a new dental clinic in Hall Green that offers a combination of general dentistry and cosmetic dentistry services. The clinic is equipped with modern facilities and technology to provide exceptional dental care. The team at Dental Opulence is dedicated to ensuring a comprehensive and comfortable dental experience for patients. The clinic&apos;s focus is on maintaining oral health and enhancing smiles through cosmetic procedures.
        </p>
      </div>
    </div>
  );
};

export default HomeAboutSection;
