import React from "react";
import Image from "next/image";
import change_life_logo from "../../../assets/images/change-life-logo.svg";
import change_life_whatsapp_logo from "../../../assets/images/change-life-whatsapp-logo.svg";
import { change_life } from "../../../constants";
import { ChangeLifeCard } from "../molecule";

const HomeChangeLife = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] pt-[120px] pb-[40px] bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-6 md:gap-7">
          <div className="w-full lg:w-[23%] md:h-[284px] h-max bg-[#100E10] p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <h3 className="text-white font-Pangram-Bold text-[24px] sm:text-[26px] md:text-[32px] leading-8 sm:leading-9 md:leading-[44px]">
              Experience Life-Changing Dental Care
            </h3>
            <div className="flex justify-between items-center mt-4 sm:mt-6">
              <Image src={change_life_logo} alt="Dental Opulence" className="w-12 h-12 sm:w-auto sm:h-auto" />
            </div>
          </div>
          {change_life.map((data, index) => (
            <ChangeLifeCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeChangeLife;
