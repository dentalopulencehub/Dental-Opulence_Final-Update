import React from "react";
import Image from "next/image";
import { HomeOurServicesType } from "../../../types";

const ProcessCard = ({ description, image, title }: HomeOurServicesType) => {
  return (
    <div className="xs:w-[370px] w-full xs:h-[228px] h-full bg-[#141414] py-8 px-6 border border-[#282828] rounded-lg">
      <Image src={image} alt={title} />
      <h3 className="font-Pangram-Bold text-2xl text-white mt-4">{title}</h3>
      <p className="mt-6 text-[#C2C2C2] text-xs font-Pangram-Light">
        {description}
      </p>
    </div>
  );
};

export default ProcessCard;
