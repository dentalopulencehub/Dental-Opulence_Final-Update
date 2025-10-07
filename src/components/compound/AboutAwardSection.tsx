import React from "react";
import Image from "next/image";
import { about_award_winning } from "../../../constants";
import logo from "../../../assets/images/nav-logo.svg";
import { AboutAwardCard } from "../molecule";

const AboutAwardSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[#100E10] w-full lg:px-[100px] py-[50px] sm:py-[60px] lg:py-[70px] sm:px-[40px] px-[20px] flex xl:flex-row xl:items-center flex-col justify-between gap-[40px] sm:gap-[50px] xl:gap-0">
        <div className="xl:mt-0">
          <h3 className="text-white text-[28px] sm:text-[32px] font-Pangram-Bold max-w-[245px]">
            Award Winning Excellence
          </h3>
          <Image src={logo} alt="Logo" className="mt-6" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {about_award_winning.map((data, index) => (
            <AboutAwardCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutAwardSection;
