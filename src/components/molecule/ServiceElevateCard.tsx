import React from "react";
import Image from "next/image";
import { ServiceElevateType } from "../../../types";

const ServiceElevateCard = ({
  description,
  number_img,
  title,
}: ServiceElevateType) => {
  return (
    <div className="max-w-[384px] w-full rounded-2xl bg-[#222222] p-8 relative z-[5]">
      <Image src={number_img} className="absolute z-[3] right-8 top-8" alt={title} />
      <h3 className="text-2xl text-white font-Pangram-Regular mt-11 z-[5] relative">
        {title}
      </h3>
      <p className="text-sm text-[#D0D0D0] mt-4">{description}</p>
    </div>
  );
};

export default ServiceElevateCard;
