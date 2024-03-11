import React, { useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "../../../context/GlobalContext";
import PrimaryLink from "../atom/PrimaryLink";
import service_hero_image from "../../../assets/images/service-hero-image.svg";

const ServiceHero = () => {
  const { dispatch, servicePageData } = useContext(GlobalContext);

  return (
    <div className="w-full">
      <div className="bg-[#FFFFFF] rounded-t-[24px] lg:pt-0 xs:pt-[220px] pt-[150px] pb-[120px] h-full xl:gap-0 gap-[40px] w-full items-center flex lg:flex-row flex-col justify-between lg:px-[100px] sm:px-[40px] px-[20px]">
        <div className="flex flex-col lg:items-start items-center lg:w-[467px] sm:w-[70%] lg:py-[220px]">
          <div className="flex flex-row items-center gap-4">
            <h1 className="font-Pangram-Bold sm:text-[60px] sm:leading-[64px] text-[44px] lg:text-left text-center text-[#161616]">
              {servicePageData?.title}
            </h1>
            <span className="text-[#161616] sm:text-2xl text-base">
              /from {servicePageData?.price}
            </span>
          </div>
          <p className="text-[18px] text-[#161616] mt-6 lg:text-left text-center">
            {servicePageData?.description}
          </p>
          <PrimaryLink
            href="/contact"
            title="Book Now"
            style="py-4 px-8 rounded-[34px] text-white bg-[#100E10] font-Pangram-Medium text-xs mt-6 hover:text-[#100E10] hover:bg-transparent border border-transparent hover:border-[#100E10] duration-0"
          />
        </div>
        <Image src={service_hero_image} alt="Service hero image" className="relative lg:hidden block" />
        <Image src={service_hero_image} alt="Service hero image" className="absolute right-0 xl:w-fit w-[45%] lg:block hidden" />
      </div>
    </div>
  );
};

export default ServiceHero;
