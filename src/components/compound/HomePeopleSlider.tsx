import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { people_slider } from "../../../constants";

const HomePeopleSlider = () => {
  return (
    <div className="bg-white sm:px-5 px-2 w-full">
      <div className="bg-[#100E10] w-full py-[80px] border-t border-t-[#3D3D3D] border-b border-b-[#3D3D3D]">
        <Marquee className="" speed={100} autoFill >
          {people_slider.map((award, index) => (
            <Image
              key={index}
              src={award}
              alt={index.toString()}
              className="ml-[40px]"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HomePeopleSlider;
