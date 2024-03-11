import React from "react";
import Image from "next/image";
import { HomePopularServicesType } from "../../../types";

const ChangeLifeCard = ({
  description,
  image,
  title,
}: HomePopularServicesType) => {
  return (
    <div className="w-[278px] h-[284px] pb-8 px-6 flex flex-col border-b bg-[#FFFFFF] border-b-[#E5E5E5]">
      <Image src={image} alt="" />
      <h3 className="text-[34px] font-Pangram-Regular font-normal mt-4 w-full leading-[42px]">{title}</h3>
      <p className="text-[18px] text-[#605E60] font-Pangram-Regular mt-6">
        {description}
      </p>
    </div>
  );
};

export default ChangeLifeCard;
