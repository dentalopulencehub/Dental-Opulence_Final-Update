import React, { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import underline_vector_dark from "../../../assets/images/underline-vector-dark.svg";

import general_treatment_tooth_icon from "../../../assets/images/general-treatment-tooth-icon.svg";
import general_treatment_tooth_icon_dark from "../../../assets/images/general-treatment-tooth-icon-inverted.svg";
import cosmetic_treatment_tooth_icon from "../../../assets/images/cosmetic-treatment-tooth-icon.svg";
import cosmetic_treatment_tooth_icon_dark from "../../../assets/images/cosmetic-treatment-tooth-icon-inverted.svg";

import { our_services, our_services2 } from "../../../constants";
import { OurServiceCard, OurServiceCardDark } from "../molecule";
import { gsap } from "../../../lib/gsap";
import { motion } from "framer-motion";

type theme = "light" | "dark";

const HomeOurServices = () => {
  const tl: any = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState<theme>("light");

  const handleHover1 = () => {
    setIsHovered(!isHovered);
  };

  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };

  const handleSetSelectedTheme = (_theme: theme) => {
    setSelectedTheme(_theme);
  };

  return (
    <div className={`w-full`}>
      <div
        className={`flex sm:flex-row  sm:items-end items-start mt-10 gap-4 justify-center border-b ${
          selectedTheme === "light" ? "border-[#000000]" : "border-[#000000]"
        }`}
      >
        <div
          onClick={() => handleSetSelectedTheme("light")}
          className={` ${
            selectedTheme === "dark" ? "border border-[#000000] bg-[#fff] md:py-0 py-2" : ""
          } flex gap-3 md:py-[6px] border border-[#000000] py-[7px] flex-row items-center justify-center service-tooth-div bg-[#000000] rounded-tl-2xl rounded-tr-[4px] px-3  cursor-pointer`}
        >
          <Image
            src={
              selectedTheme === "light"
                ? general_treatment_tooth_icon
                : general_treatment_tooth_icon_dark
            }
            alt="Tooth image light"
            className="tooth-image w-8 h-8"
          />
          <p
            className={`font-Pangram-Bold md:text-[18px] text-[15px] ${
              selectedTheme === "dark" ? "text-[#000000]" : "text-white"
            } `}
          >
            General Treatments
          </p>
        </div>
        
        <div
          onClick={() => handleSetSelectedTheme("dark")}
          className={` flex gap-3 flex-row items-center justify-center service-tooth-div md:py-1 py-[6px] ${
            selectedTheme === "dark"
              ? "bg-[#161616] border border-[#000000]"
              : "border border-[#000000]"
          } rounded-tl-2xl rounded-tr-[4px] px-3 md:py-[6px] py-[12px] cursor-pointer`}
        >
          <Image
            src={
              selectedTheme === "dark"
                ? cosmetic_treatment_tooth_icon_dark
                : cosmetic_treatment_tooth_icon
            }
            alt="Tooth image light"
            className="tooth-image w-8 h-8"
          />
          <p
            className={`font-Pangram-Bold md:text-[18px] text-[15px] mt-[0px] ${
              selectedTheme === "light" ? "text-[#100E10]" : "text-white"
            } `}
          >
            Cosmetic Treatments
          </p>
        </div>
      </div>
      <div
        className={`w-full md:py-[120px] py-[80px] lg:px-[100px] sm:px-[40px] px-[20px] ${
          selectedTheme === "light" ? "bg-white" : "bg-[#161616]"
        }`}
      >
        {selectedTheme === "light" ? (
          <div className="md:flex md:flex-wrap grid grid-cols-2 md:gap-6 gap-4 justify-center items-center">
            {our_services.map((service, index) => (
              <OurServiceCard
                key={index}
                {...service}
                selectedTheme={selectedTheme}
              />
            ))}
          </div>
        ) : (
          <div className="md:flex md:flex-wrap grid grid-cols-2 md:gap-6  gap-4 justify-center items-center">
            {our_services2.map((service, index) => (
              <OurServiceCardDark
                key={index}
                {...service}
                selectedTheme={selectedTheme}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeOurServices;
