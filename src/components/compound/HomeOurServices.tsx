import React, { useRef, useState } from "react";
import { our_services, our_services2 } from "../../../constants";
import { OurServiceCard, OurServiceCardDark } from "../molecule";

type Theme = "light" | "dark";

const HomeOurServices: React.FC = () => {
  const tl: any = useRef(null);

  const [selectedTheme, setSelectedTheme] = useState<Theme>("light");

  const handleSetSelectedTheme = (theme: Theme) => {
    setSelectedTheme(theme);
  };

  return (
    <div className={`w-full`}>
      <div
        className={`flex sm:flex-row  sm:items-end items-start mt-10 gap-4 justify-center border-b ${
          selectedTheme === "light" ? "border-[#000000]" : "border-[#000000]"
        }`}
      >
        <div
          onClick={() => handleSetSelectedTheme("dark")}
          className={`flex gap-3 flex-row items-center justify-center service-tooth-div 
        bg-[#161616] border border-[#000000]"
       rounded-t-xl  px-4 md:py-[9px] py-[12px] cursor-pointer`}
        >
          <p
            className={` md:text-[18px] text-[15px] mt-[0px] text-white `}
          >
            Cosmetic Treatments
          </p>
        </div>
        <div
          onClick={() => handleSetSelectedTheme("light")}
          className={`${
            selectedTheme === "dark" ? "border border-[#000000] bg-[#fff] md:py-0 py-2" : " bg-gray-100"
          } flex gap-3 md:py-[9px] border border-[#000000] py-[7px] flex-row items-center justify-center service-tooth-div  rounded-t-xl px-4 cursor-pointer`}
        >
          <p
            className={` md:text-[18px] text-[15px] ${
              selectedTheme === "dark" ? "text-[#000000]" : "text-gray-800"
            } `}
          >
            General Treatments
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
