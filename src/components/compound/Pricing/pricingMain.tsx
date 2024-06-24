import React, { useRef, useState } from "react";
import Image from "next/image";

import general_treatment_tooth_icon from "../../../../assets/images/general-treatment-tooth-icon.svg";



import general_treatment_tooth_icon_dark from "../../../../assets/images/general-treatment-tooth-icon-inverted.svg";
import cosmetic_treatment_tooth_icon from "../../../../assets/images/cosmetic-treatment-tooth-icon.svg";
import cosmetic_treatment_tooth_icon_dark from "../../../../assets/images/cosmetic-treatment-tooth-icon-inverted.svg";

// import { our_services, our_services2 } from "../../../constants";
// import { OurServiceCard, OurServiceCardDark } from "../molecule";

import { motion } from "framer-motion";
import PricingCard1 from "./PricingCard1";
import PricingCard2 from "./PricingCard2";
import { our_services, our_services2 } from "../../../../constants";

type theme = "light" | "dark";

const PricingMain = () => {
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
    <div className={`w-full md:py-20 py-10`}>
      <div
        className={`flex sm:flex-row  sm:items-end items-start mt-10 gap-4 justify-center border-b ${
          selectedTheme === "light" ? "border-[#000000]" : "border-[#000000]"
        }`}
      >
        <div
          onClick={() => handleSetSelectedTheme("light")}
          className={` ${
            selectedTheme === "dark" ? "border border-[#000000] bg-[#fff] md:py-0 py-2" : ""
          } flex gap-3 md:py-[6px] py-[10px] flex-row items-center justify-center service-tooth-div bg-[#000000] rounded-tl-2xl rounded-tr-[4px] px-3  cursor-pointer`}
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
              ? "bg-[#161616]"
              : "border border-[#000000]"
          } rounded-tl-2xl rounded-tr-[4px] px-3 md:py-1 py-[6px] cursor-pointer`}
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
            className={`font-Pangram-Bold md:text-[18px] text-[15px] mt-2 ${
              selectedTheme === "light" ? "text-[#100E10]" : "text-white"
            } `}
          >
            Cosmetic Treatments
          </p>
        </div>
      </div>
      
      <div
        className={`w-full md:py-[100px] py-[80px] lg:px-[100px] sm:px-[40px] px-[20px] ${
          selectedTheme === "light" ? "bg-white" : "bg-[#FFF]"
        }`}
      >
        {selectedTheme === "light" ? (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {our_services.map((service, index) => (
              <PricingCard1
                key={index}
                {...service}
                selectedTheme={selectedTheme}
              />
            ))}
          </div>

          
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {our_services2.map((service, index) => (
              <PricingCard2
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

export default PricingMain;
