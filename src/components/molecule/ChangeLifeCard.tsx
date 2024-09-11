import React from "react";
import Image from "next/image";
import { HomePopularServicesType } from "../../../types";

const ChangeLifeCard = ({
  description,
  image,
  title,
}: HomePopularServicesType) => {
  return (
    <div className="w-full lg:w-[23%] xs:w-[40%] h-max md:h-[284px] pb-8 pt-4 flex flex-col items-start border-b bg-[#FFFFFF] border-b-[#E8E8E8]">
      <Image src={image} alt="" />
      <h3 className="md:text-[34px] text-[24px] font-Pangram-Bold text-[#161616] font-normal mt-3 w-full md:leading-[42px] leading-8">{title}</h3>
      <p className="text-[18px] text-[#454545] font-Pangram-Regular mt-4">
        {description}
      </p>
    </div>
  );
};

export default ChangeLifeCard;
