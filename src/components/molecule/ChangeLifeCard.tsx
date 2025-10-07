import React from "react";
import Image from "next/image";
import { HomePopularServicesType } from "../../../types";

const ChangeLifeCard = ({
  description,
  image,
  title,
}: HomePopularServicesType) => {
  return (
    <div className="w-full lg:w-[23%] h-max md:h-[284px] pb-6 sm:pb-8 pt-4 flex flex-col items-start border-b bg-[#FFFFFF] border-b-[#E8E8E8]">
      <Image src={image} alt="" className="w-12 h-12 sm:w-14 sm:h-14 md:w-auto md:h-auto" />
      <h3 className="text-[22px] sm:text-[24px] md:text-[34px] font-Pangram-Bold text-[#161616] font-normal mt-3 w-full leading-7 sm:leading-8 md:leading-[42px]">
        {title}
      </h3>
      <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#454545] font-Pangram-Regular mt-3 md:mt-4 leading-6 sm:leading-7">
        {description}
      </p>
    </div>
  );
};

export default ChangeLifeCard;
