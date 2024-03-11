import React from "react";
import Image from "next/image";
import service_hero3_vid from "../../../assets/images/service-hero-video3.svg";
import PrimaryLink from "../atom/PrimaryLink";

const ServiceHero3 = () => {
  return (
    <div className="w-full">
      <div className="bg-white w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex flex-col items-center justify-between sm:gap-[64px] gap-[37px]">
        <h2 className="text-[#100E10] sm:text-[34px] text-[26px] font-normal font-Pangram-Medium md:w-[650px] text-center w-full">
          Same Day Composite Bonding Smile Makeovers - 500 Every Year
        </h2>
        <Image src={service_hero3_vid} alt="" />
        <PrimaryLink
          href="/contact"
          title="Book Free Consultation Now"
          style="py-4 px-8 rounded-[34px] w-fit text-white bg-[#100E10] font-Pangram-Medium text-xs mt-6 hover:text-[#100E10] hover:bg-transparent border border-transparent hover:border-[#100E10] duration-0"
        />
      </div>
    </div>
  );
};

export default ServiceHero3;
