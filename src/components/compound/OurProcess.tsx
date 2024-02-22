import React from "react";
import Image from "next/image";
import { home_process } from "../../../constants";
import { ProcessCard } from "../molecule";

import arrow_right_light from "../../../assets/images/arrow-right.svg";

const OurProcess = () => {
  return (
    <div className="bg-white sm:px-5 px-2">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-[#100E10]">
        <div className="flex flex-wrap xl:justify-between justify-evenly">
          <div className="xs:w-[388px] w-full sm:h-[228px] h-full bg-[#383638] rounded-lg py-8 px-6 flex flex-col justify-between items-start">
            <p className="text-base font-Pangram-Bold text-[#AFAFAF] ">
              Our Process
            </p>
            <h3 className="xs:text-[36px] text-2xl font-Pangram-Bold text-white">
              Streamlined Dental Excellence
            </h3>
            <button className="flex flex-row items-center">
              <span className="text-xs font-Pangram-Regular text-white">Our story</span>
              <Image src={arrow_right_light} alt="" />
            </button>
          </div>
          {home_process.map((data, index) => (
            <ProcessCard key={index} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
