import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrow_right_dark from "../../../assets/images/arrow-right-dark.svg";


interface CustomLinkProps {
  title: string;
  href: string;
  style: string;
  image: any;
  textStyle: string;
}

const CustomLink = ({ href, title, style, image, textStyle }: CustomLinkProps) => {
  return (
    <Link href={href}>
      <button className={style}>
        <span className={textStyle}>{title}</span>
        <Image src={image} alt="" />
      </button>
    </Link>
  );
};

export default CustomLink;
