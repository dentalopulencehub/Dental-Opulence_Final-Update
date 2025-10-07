import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CustomLinkProps {
  title: string;
  href: string;
  style: string;
  image: any;
  textStyle: string;
  setHovered?: (hovered: boolean) => void;
}

const CustomLink = ({
  href,
  title,
  style,
  image,
  textStyle,
  setHovered,
}: CustomLinkProps) => {
  return (
    <Link
      href={href}
      onMouseOver={() => setHovered && setHovered(true)}
      onMouseOut={() => setHovered && setHovered(false)}
      className={style}
    >
      <span className={textStyle}>{title}</span>
      <span className="w-10 h-10 items-center flex justify-center">
        <Image src={image} alt="" />
      </span>
    </Link>
  );
};

export default CustomLink;
