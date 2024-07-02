import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import {  people_slider2 } from "../../../constants";

const HomePeopleSlider2 = () => {
  return (
    <div className=" w-full relative ">
      <div className="bg-[#100E10] w-full py-[80px] border-b border-b-[#3D3D3D]">
        <Marquee className="" speed={100}  >
          {people_slider2.map((award, index) => (
            <Image
              key={index}
              src={award}
              alt={index.toString()}
              className="ml-[40px] md:w-full w-[100px] "
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default HomePeopleSlider2;
