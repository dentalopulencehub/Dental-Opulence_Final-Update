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
      onTouchStart={() => setHover(true)}
      className="w-full h-auto min-h-[320px] md:h-[360px] p-4 md:p-4 hover:bg-[#000000] hover:shadow-xl ease-in-out transition border border-[#E8E8E8] rounded-[24px] duration-0 flex flex-col group"
    >
      <Image
        className="hidden md:block"
        src={hover ? image_inverted : image}
        alt={title}
      />
      <h3
        className="mt-4 md:mt-7 text-[#100E10] group-hover:text-white text-[16px] sm:text-[18px] md:text-[20px] font-Pangram-Bold text-center md:text-left leading-tight"
      >
        {title}
      </h3>
      <p
        className="mt-2 md:mt-4 text-[#4E4E4E] group-hover:text-[#D6D6D6] text-[11px] sm:text-[12px] md:text-[14px] font-Pangram-Regular leading-[16px] sm:leading-[18px] md:leading-[22px] text-center md:text-left line-clamp-4"
      >
        {description}
      </p>
      <div className="flex justify-center md:justify-stretch mt-auto pt-4 md:pt-7">
        <button
          className="py-2 px-4 border border-[#100E10] group-hover:border-white rounded-[32px] flex justify-center bg-transparent group-hover:bg-white w-full sm:w-auto"
        >
          <p className="flex items-center gap-[10px] justify-center">
            <span
              className="text-xs text-[#100E10]"
              aria-label={`More Info about ${title}`}
            >
              More Info
            </span>
            <Image
              src={pointer_right_dark}
              alt=""
            />
          </p>
        </button>
      </div>
    </Link>
  );
};

export default PopularServiceCard;
