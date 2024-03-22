import React from "react";
import Image from "next/image";
import result_sample_image1 from "../../../assets/images/result-image-sample1.svg";
import result_sample_video1 from "../../../assets/images/result-video-sample1.svg";
import { useRouter } from "next/router";

const CompositeBondingHowLong = () => {
  const { pathname } = useRouter();

  return (
    <div
      className={`w-full`}
    >
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-white">
        <div className="mt-12 flex flex-col items-center">
          <h2 className="font-Pangram font-bold text-[48px] leading-[53px] text-[#100E10] text-center sm:max-w-[593px]">
            How Long Does Composite Bonding Take
          </h2>
          <p className="text-[#4C4C4C] text-[18px] font-Pangram-Regular text-center sm:max-w-[453px] mt-4">
            Composite bonding on average takes 3-4 hours.Take a look at some of
            our results below
          </p>
          <div className="flex flex-wrap justify-center w-full gap-6 mt-16">
            <Image src={result_sample_image1} alt="" className=" h-[416px] max-w-[394px] w-full object-cover rounded-2xl" />
            <Image src={result_sample_video1} alt="" className=" h-[416px] max-w-[394px] w-full object-cover rounded-2xl" />
            <Image src={result_sample_video1} alt="" className=" h-[416px] max-w-[394px] w-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompositeBondingHowLong;
