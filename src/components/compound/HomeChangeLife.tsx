import React from "react";
import Image from "next/image";
import change_life_logo from "../../../assets/images/change-life-logo.svg";
import change_life_whatsapp_logo from "../../../assets/images/change-life-whatsapp-logo.svg";
import { change_life } from "../../../constants";
import { ChangeLifeCard } from "../molecule";

const HomeChangeLife = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] pt-[120px] bg-white">
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-7 items-center">
          <div className="w-full lg:w-[23%] xs:w-[40%] md:h-[284px] h-max bg-[#100E10] p-8 rounded-2xl xs:rounded-[14px] flex flex-col justify-between">
            <h3 className="text-white font-Pangram-Bold md:text-[32px] text-[26px] md:leading-[44px] leading-9">
              Experience Life-Changing Dental Care
            </h3>
            <div className="flex justify-between items-center mt-4">
              <Image src={change_life_logo} alt="" />
              {/* <Image src={change_life_whatsapp_logo} alt="" /> */}
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
