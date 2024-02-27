import React from "react";
import Image from "next/image";
import underline_vector from "../../../assets/images/underline-vector.svg";
import about_hero_image from "../../../assets/images/about-hero-image.svg";
import CustomLink from "../atom/CustomLink";
import arrow_right_light from "../../../assets/images/arrow-right.svg";

const AboutHero = () => {
  return (
    <div className="bg-white sm:pt-5 sm:px-5 px-2 pt-2">
      <div className="bg-[#100E10] rounded-t-[24px] xl:pt-[120px] pt-[220px] xl:gap-0 gap-[40px] w-full h-full items-center flex xl:flex-row flex-col justify-between lg:px-[100px] sm:px-[40px] px-[20px] xl:pr-[10px]">
        <div className="flex flex-col xl:items-start items-center">
          <p className="flex flex-col items-center">
            <span className="text-white font-Pangram-Regular">About us</span>
            <Image src={underline_vector} alt="" />
          </p>
          <h1 className="font-Pangram-Bold sm:text-[64px] text-[44px] xl:text-left text-center sm:leading-[76px] leading-[56px] text-white">
            Discover Your Brightest Smile with Dental Opulence
          </h1>
          <CustomLink
            title="Book Your Appointment Online"
            href="#"
            image={arrow_right_light}
            style="bg-transparent rounded-[32px] xs:w-fit xs:h-[64px] xs:px-[50px] px-[20px] xs:py-5 py-2 flex items-center justify-center mt-10 border border-white"
            textStyle="text-white font-Pangram-Regular xs:text-[18px]"
          />
        </div>

        <Image
          src={about_hero_image}
          alt="About hero image"
          className="relative xl:-top-[110px] top-0"
        />
      </div>
    </div>
  );
};

export default AboutHero;
