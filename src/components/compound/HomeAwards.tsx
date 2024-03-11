import React from "react";
import Image from "next/image";
import { home_awards_images, homer_awards_images2 } from "../../../constants";
import Marquee from "react-fast-marquee";

const HomeAwards = () => {
  return (
    <div className="w-full">
      <div className="bg-[#100E10] w-full">
        {/* <Marquee className="" speed={100}>
          {home_awards_images.map((award, index) => (
            <Image
              key={index}
              src={award}
              alt=""
              className="ml-[180px] w-[120px]"
            />
          ))}
        </Marquee> */}

        <div className="flex relative">
          <Marquee className="" speed={100} direction="right">
            {homer_awards_images2.map((award, index) => (
              <Image
                key={index}
                src={award}
                alt=""
                className="ml-[48px] w-[120px]"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HomeAwards;
