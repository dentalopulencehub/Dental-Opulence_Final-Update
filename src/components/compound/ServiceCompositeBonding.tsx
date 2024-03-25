import React from "react";
import Image from "next/image";
import about_mission_logo from "../../../assets/images/about-mission-logo.svg";
import service_composite_images from "../../../assets/images/service-composite-images.svg";
import checked_icon from "../../../assets/images/check-circle.svg";
import service_tooth_vector from "../../../assets/images/service-tooth-vector.svg";
import PrimaryLink from "../atom/PrimaryLink";

const ServiceCompositeBonding = () => {
  return (
    <div className="w-full">
      <div className="bg-[#100E10] w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex xl:flex-row flex-col justify-between gap-[70px] xl:gap-0">
        <div className="flex xl:flex-row flex-col gap-6 w-full">
          <div className="flex flex-col flex-wrap gap-6 xl:max-w-[425px] w-full">
            <div className="w-full xl:h-[243px] bg-[#222222] rounded-2xl xs:p-10 p-7">
              <Image src={about_mission_logo} alt="" />
              <h3 className="text-white text-[34px] mt-[48px]">
                100 Happy smile{" "}
                <span className="text-[#8A8A8A]">around the world</span>
              </h3>
            </div>
            <div className="w-full xl:min-h-[538px] bg-[#222222] rounded-2xl xs:p-10 p-7">
              <h4 className="text-[#8A8A8A] text-[34px]">
                Situation where{" "}
                <span className="text-white">Composite bonding</span> is
                suitable.
              </h4>

              <div className="flex flex-col mt-[64px]">
                <div className="flex items-center gap-4 border-b border-b-[#737373] pb-4">
                  <Image src={checked_icon} alt="Checked Icon" />
                  <p className="text-white">CHIPPED TOOTH</p>
                </div>
                <div className="flex items-center gap-4 border-b border-b-[#737373] py-4">
                  <Image src={checked_icon} alt="Checked Icon" />
                  <p className="text-white">CRACKS</p>
                </div>
                <div className="flex items-center gap-4 border-b border-b-[#737373] py-4">
                  <Image src={checked_icon} alt="Checked Icon" />
                  <p className="text-white">STAINS</p>
                </div>
                <div className="flex items-center gap-4 border-b border-b-[#737373] py-4">
                  <Image src={checked_icon} alt="Checked Icon" />
                  <p className="text-white">GENERAL WEAR</p>
                </div>
                <div className="flex items-center gap-4  pt-4">
                  <Image src={checked_icon} alt="Checked Icon" />
                  <p className="text-white">AESTHETICS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-between w-full">
            <div className=" w-full xl:min-h-[310px] bg-[#222222] rounded-2xl xs:pt-10 xs:px-10 pt-7 px-7 ">
              <h4 className="text-[#8A8A8A] text-[34px] sm:max-w-[571px] mx-auto text-center">
                What is <span className="text-white">Composite bonding</span>{" "}
                explained made simple.
              </h4>
              <p className="text-white text-center sm:max-w-[571px] mx-auto mt-[51px] text-[18px] font-Pangram-Regular">
                Some text Some text Some text Some text Some textSome text Some
                text Some text Some text Some textome text Some text Some
                textome text Some text Some textome text Some text Some textome
                text Some text Some text
              </p>
              <Image
                src={service_composite_images}
                alt=""
                className="mt-[74px]"
              />
            </div>
            <div className="w-full xl:h-[310px] bg-[#222222] rounded-2xl xs:p-10 p-7 relative">
              <h3 className="text-[#8A8A8A] text-[34px] sm:max-w-[336px] w-full">
                <span className="text-white">Transform</span> Your Smile Today
                with Dental Opulence!
              </h3>
              <PrimaryLink
                href="/contact"
                title="Book Now"
                style="py-4 px-8 rounded-[34px] text-[#100E10] bg-white font-Pangram-Medium text-xs mt-6 hover:text-[#fff] w-fit hover:bg-transparent border border-transparent hover:border-[#fff] cursor-pointer duration-0"
              />
              <Image src={service_tooth_vector} alt="" className="absolute top-[2%] right-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCompositeBonding;
