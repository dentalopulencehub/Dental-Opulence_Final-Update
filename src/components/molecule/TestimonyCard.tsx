import React from "react";
import Image from "next/image";
import { TestimonialType } from "../../../types";
import quote_image from "../../../assets/images/quote-img.svg";
import review_stars from "../../../assets/images/review-stars.svg";

const TestimonyCard = ({
  name,
  profilePicture,
  testimony,
}: TestimonialType) => {
  return (
    <div className="flex big:flex-row flex-col big:items-start items-center gap-10 embla__slide">
      <Image src={quote_image} alt="" />
      <div className="">
        <p className="text-[#3C4959] text-xl font-Pangram-Light big:text-left text-center">
          {testimony}
        </p>
        <Image src={review_stars} alt="Review Stars" className="mt-8 big:mx-0 mx-auto" />
        <h3 className="mt-[7px] font-Pangram-Bold text-[#100E10] text-base big:text-left text-center">
          {name}
        </h3>
      </div>
      <Image src={profilePicture} alt="" />
    </div>
  );
};

export default TestimonyCard;
