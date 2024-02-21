import React from "react";
import Image from "next/image";
import { home_awards_images } from "../../../constants";
import Marquee from "react-fast-marquee";

const HomeAwards = () => {
  return (
    <div className="bg-white sm:px-5 px-2 w-full">
      <div className="bg-[#100E10] w-full">
        <Marquee className="flex items-center justify-center" speed={100} >
          {home_awards_images.map((award, index) => (
            <Image key={index} src={award} alt="" className="ml-16" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HomeAwards;
