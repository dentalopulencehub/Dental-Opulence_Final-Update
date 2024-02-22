import React from "react";
import Image from "next/image";
import { HomePopularServicesType } from "../../../types";

const ChangeLifeCard = ({
  description,
  image,
  title,
}: HomePopularServicesType) => {
  return (
    <div className="w-[261px] h-[276px] py-8 px-6 flex flex-col border-b border-b-[#C2C2C2]">
      <Image src={image} alt="" />
      <h3 className="text-2xl font-Pangram-Bold mt-4">{title}</h3>
      <p className="text-xs text-[#605E60] font-Pangram-Regular mt-6">
        {description}
      </p>
    </div>
  );
};

export default ChangeLifeCard;
