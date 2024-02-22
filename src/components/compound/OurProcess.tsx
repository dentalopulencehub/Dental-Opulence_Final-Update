import React from "react";
import Image from "next/image";
import { home_process } from "../../../constants";
import { ProcessCard } from "../molecule";

import arrow_right_light from "../../../assets/images/arrow-right.svg";

const OurProcess = () => {
  return (
    <div className="bg-white sm:pt-5 sm:px-5 px-2 pt-2">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-[#100E10]">
        <div className="flex flex-wrap xl:justify-between justify-evenly">
          <div className="xs:w-[388px] w-full h-[228px] bg-[#383638] rounded-lg py-8 px-6 flex flex-col justify-between">
            <p className="text-base font-Pangram-Bold text-[#AFAFAF] ">
              Our Process
            </p>
            <h3 className="text-[36px] font-Pangram-Bold text-white">
              Streamlined Dental Excellence
            </h3>
            <button>
              <span className="text-xs font-Pangram-Regular">Our story</span>
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
