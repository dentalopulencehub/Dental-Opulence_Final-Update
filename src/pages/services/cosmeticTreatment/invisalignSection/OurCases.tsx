import React from "react";
import Image from "next/image";
import underline_vector_dark from "../../../../../assets/images/underline-vector-dark.svg";
import slider_arrow_left from "../../../../../assets/images/service-slider-left.svg";
import slider_arrow_right from "../../../../../assets/images/service-slider-right.svg";
import result_logo_mini from "../../../../../assets/images/result-mini-logo.svg";
import result_logo_micro from "../../../../../assets/images/result-logo-micro.svg";

import Carousel from "@/components/helper/carousel";
import { home_result_images, invisalign_our_cases_images, white_fillings_our_cases_images } from "../../../../../constants";
import { ResultCard } from "@/components/molecule";

type dir = "Left" | "right";

const InvisalignOurCases = () => {
  const [direction, setDirection] = React.useState<dir | null>(null);

  const handleOuterLeftClick = () => {
    setDirection("Left");
  };

  const handleOuterRightClick = () => {
    setDirection("right");
  };

  return (
    <div className="w-full">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] pt-[80px] bg-white flex justify-between items-center">
        <div className="">
          <p className="flex flex-col">
            <span className={`text-[#4e4e4e] text-base font-Pangram-Regular`}>
              Our Cases
            </span>
            <Image src={underline_vector_dark} alt="" />
          </p>
          <h2
            className={`mt-4 text-[#100E10] text-[32px] leading-[38px] font-Pangram-Bold xs:w-[412px] w-full`}
          >
            Transforming Smiles with Exceptional Care{" "}
          </h2>
        </div>

        {/* <div className="flex items-center gap-3">
          <Image
            src={slider_arrow_left}
            alt=""
            onClick={handleOuterLeftClick}
            className="cursor-pointer"
          />
          <Image
            src={slider_arrow_right}
            alt=""
            onClick={handleOuterRightClick}
            className="cursor-pointer"
          />
        </div> */}
      </div>

      
      
      <div className="flex gap-6 mt-10">
        <div className="block sm:hidden overflow-x-auto whitespace-nowrap ml-5">
          {invisalign_our_cases_images.map((data, index) => (
            <div className="inline-block mr-4" key={index}>
              <ResultCard image={data} />
            </div>
          ))}
        </div>
        <div className="hidden sm:grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full md:mx-[97px]">
          {invisalign_our_cases_images.map((data, index) => (
            <ResultCard key={index} image={data} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default InvisalignOurCases;
