import React from "react";
import Image from "next/image";
import service_scribble_underline_vector from "../../../assets/images/service-scribble-underline-vector.svg";
import service_01 from "../../../assets/images/service-01.svg";
import service_02 from "../../../assets/images/service-02.svg";
import service_03 from "../../../assets/images/service-03.svg";

import { ServiceElevateType } from "../../../types";

import { ServiceElevateCard } from "../molecule";

const service_elevate: ServiceElevateType[] = [
  {
    title: "Restoring Functionality",
    description:
      "Dental bridges help restore your ability to chew and speak properly by filling in the gaps caused by missing teeth.",
    number_img: service_01,
  },
  {
    title: "Restoring Functionality",
    description:
      "Dental bridges help restore your ability to chew and speak properly by filling in the gaps caused by missing teeth.",
    number_img: service_02,
  },
  {
    title: "Restoring Functionality",
    description:
      "Dental bridges help restore your ability to chew and speak properly by filling in the gaps caused by missing teeth.",
    number_img: service_03,
  },
];

const ServiceElevate = () => {
  return (
    <div className="w-full">
      <div className="bg-[#100E10] w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px]">
        <div className="flex flex-col items-start">
          <p className="text-white text-base">Elevate Your Smile</p>
          <Image
            src={service_scribble_underline_vector}
            alt="scribble underline vector"
          />
        </div>
        <h3 className="text-white text-[34px] sm:max-w-[357px] mt-4">
          Discover the Benefits of Dental Bridges
        </h3>

        <div className="flex flex-row flex-wrap gap-6 mt-16 justify-center" >
          {service_elevate.map((service: ServiceElevateType, index: number) => (
            <ServiceElevateCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceElevate;
