import React from "react";
import Image from "next/image";
import { service_award_images } from "../../../constants";
import Marquee from "react-fast-marquee";

const ServiceAwards = () => {
  return (
    <div className="w-full">
      <div className="bg-white w-full pb-[100px]">
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
            {service_award_images.map((award, index) => (
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

export default ServiceAwards;
