import React, { memo } from "react";
import Image from "next/image";
import home_hero_ill from "../../../assets/DO Format/DO 1.webp";
import PrimaryLink from "../atom/PrimaryLink";

import right_thick from "../../../assets/fonts/right_thick_home.svg";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
// import cloudinary from "../../../cloudinaryConfig"

const HomeHero = memo(() => {
  const renderFinanceOptions = () => (
    <div className="flex gap-2 w-full items-center justify-start">
      <Image src={right_thick} alt="right_thick" />
      <p className="text-[16px] text-[#fff] lg:text-left text-center">
        0% Finance Options
      </p>
    </div>
  );

  return (
    <div className="show-scrollbar">
      <style>
        {`
          .bg-[#100E10] { background-color: #100E10; }
          .text-white { color: white; }
        `}
      </style>
      <div className="bg-[#100E10] pt-[220px] pb-[100px] w-full h-full items-center flex xl:flex-row flex-col justify-between lg:px-[100px] sm:px-[40px] px-[20px]">
        <div className="flex flex-col max-w-[539px]">
          <h1 className="font-Pangram-Bold sm:text-[64px] text-[44px] text-left sm:leading-[76px] leading-[56px] text-white">
            Elevate Your Smile with Dental Opulence
          </h1>
          <p className="mt-6 sm:text-[18px] sm:leading-8 text-base leading-7 text-white text-left">
            Welcome to Dental Opulence, where we blend everyday dentistry with
            cosmetic artistry to create your perfect smile. Our modern clinic
            offers cutting-edge technology and amenities for your comfort.
            Achieve your perfect smile with us.
          </p>

          <div className="mt-6 mt-6 flex-col w-full items-center text-center md:text-left">
            {renderFinanceOptions()}{" "}
            {/* Use the function to render finance options */}
            <div className="flex gap-2 items-center justify-start mt-3">
              <Image src={right_thick} alt="right_thick" />
              <p className="text-[16px] text-[#fff] lg:text-left text-center">
                Evening and weekend appointments
              </p>
            </div>
          </div>

          <div className="flex justify-center w-full md:w-[60%] mt-8 xl:mt-0 md:hidden">
            <CldImage
              src="https://res.cloudinary.com/dxdupctdf/image/upload/v1726766335/DO_1_xk8sj7.webp"
              alt="Composite Bonding Hero Image"
              className="max-w-full h-full"
              width={380}
              height={100}
              style={{ objectFit: "cover" }} // Add style for cover
            />
          </div>

          <div className="flex gap-4 w-full md:w-auto xs:mt-[56px] mt-[32px] sm:mx-0 mx-auto flex-col md:flex-row ">
            <Link
              href="https://book.do.co.uk/"
              target="_blank"
              title="Book now"
              className="py-4 px-[49px] rounded-[32px] text-center bg-white text-[#100E10] font-Pangram-Medium text-base hover:text-white hover:bg-transparent border border-transparent hover:border-white duration-0"
            >
              Book now
            </Link>

            <PrimaryLink
              href="/about"
              title="About us"
              style="py-4 px-[49px] rounded-[32px] text-center bg-transparent text-white border border-[#fff] font-Pangram-Medium text-base hover:text-[#100E10] hover:bg-white duration-0"
            />
          </div>
        </div>
        <div className="hidden md:flex justify-center w-full xl:w-[60%] mt-8 xl:mt-0 ">
          <CldImage
            src="https://res.cloudinary.com/dxdupctdf/image/upload/v1726766335/DO_1_xk8sj7.webp"
            alt="Composite Bonding Hero Image"
            className="max-w-full h-full"
            width={800}
            height={100}
            style={{ objectFit: "cover" }} // Add style for cover
          />
        </div>
      </div>
    </div>
  );
});

export default HomeHero;
