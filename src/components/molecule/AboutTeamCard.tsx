import React from "react";
import Image from "next/image";
import { TeamType } from "../../../types";

const AboutTeamCard = ({ image, name, title }: TeamType) => {
  return (
    <div className="flex flex-col items-start">
      <Image src={image} alt={name} />
      <h3 className="text-2xl font-bold mt-6 text-[#161616]">{name}</h3>
      <p className="text-base text-[#737373] mt-2">{title}</p>
    </div>
  );
};

export default AboutTeamCard;
