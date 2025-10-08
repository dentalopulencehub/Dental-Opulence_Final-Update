import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HomePopularServicesType } from "../../../types";
import pointer_right_dark from "../../../assets/images/pointer-right-dark.svg";
import pointer_right_light from "../../../assets/images/pointer-right-light.svg";

const PopularServiceCard = ({
  description,
  href,
  image,
  title,
  image_inverted,
}: HomePopularServicesType) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="w-full h-auto min-h-[360px] md:min-h-[320px] p-4 md:p-6 hover:bg-[#000000] hover:shadow-xl ease-in-out transition border border-[#E8E8E8] rounded-[24px] duration-0 block"
    >
      <Image
        className="hidden md:block w-full h-auto"
        src={hover ? image_inverted : image}
        alt={title}
      />
      <h3
        className={`mt-4 md:mt-7 ${
          hover ? "text-white" : "text-[#100E10]"
        } text-[18px] xs:text-[16px] sm:text-[18px] md:text-[20px] font-Pangram-Bold text-center md:text-left leading-tight`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 md:mt-4 text-[13px] xs:text-[12px] sm:text-[13px] md:text-[14px] font-Pangram-Regular leading-[20px] md:leading-[22px] text-center md:text-left ${
          hover ? "text-[#D6D6D6]" : "text-[#4E4E4E]"
        }`}
      >
        {description}
      </p>
      <div className="flex justify-center md:justify-stretch">
        <button
          className={`py-2 px-4 border border-[#100E10] rounded-[32px] mt-7 flex justify-center ${
            hover ? "bg-white" : "bg-transparent"
          }`}
        >
          <p className="flex items-center gap-[10px] justify-center">
            <span
              className={`text-xs ${
                hover ? "text-[#100E10]" : "text-[#100E10]"
              }`}
              aria-label={`More Info about ${title}`}
            >
              More Info
            </span>
            <Image
              src={hover ? pointer_right_dark : pointer_right_dark}
              alt=""
            />
          </p>
        </button>
      </div>
    </Link>
  );
};

export default PopularServiceCard;
