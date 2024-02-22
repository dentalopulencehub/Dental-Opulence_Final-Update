import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { people_slider } from "../../../constants";

const HomePeopleSlider = () => {
  return (
    <div className="bg-white sm:px-5 px-2 w-full">
      <div className="bg-[#100E10] w-full py-[80px] border-t border-t-[#3D3D3D] border-b border-b-[#3D3D3D]">
        <Marquee className="flex items-center justify-center" speed={100}>
          {people_slider.map((award, index) => (
            <Image
              key={index}
              src={award}
              alt=""
              className="ml-[60px] w-[120px]"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HomePeopleSlider;
