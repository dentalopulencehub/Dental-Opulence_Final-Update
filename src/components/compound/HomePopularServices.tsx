import React from "react";
import Image from "next/image";
import underline_vector_dark from "../../../assets/images/underline-vector-dark.svg";
import { popular_services } from "../../../constants";
import { PopularServiceCard } from "../molecule";

const HomePopularServices = () => {
  return (
    <div className=" w-full">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-white">
        <p className="flex flex-col">
          <span className="text-[#4e4e4e] text-base font-Pangram-Regular">
            Popular Services
          </span>
          <Image src={underline_vector_dark} alt="" />
        </p>
        <h2 className="mt-4 text-[#100E10] text-[32px] leading-[38px] font-Pangram-Bold sm:w-[333px]">
          Client Favorites for Proven Results.
        </h2>
        {/* flex flex-wrap justify-center */}
        <div className="mt-2 gap-6 lg:flex grid md:grid-cols-[4, 1fr]  xs:grid-cols-2 grid-cols-2 sm:gap-4">
          {popular_services.map((service, index) => (
            // <div className="w-full sm:w-auto">
              <PopularServiceCard key={index} {...service} />
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePopularServices;
