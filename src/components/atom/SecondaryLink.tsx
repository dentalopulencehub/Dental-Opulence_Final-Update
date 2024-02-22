import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrow_right_dark from "../../../assets/images/arrow-right-dark.svg";

interface SecondaryLinkProps {
  title: string;
  href: string;
  style: string;
}

const SecondaryLink = ({ href, title, style }: SecondaryLinkProps) => {
  return (
    <Link href={href}>
      <button className={style}>
        <span className="text-[18px]">{title}</span>
        <Image src={arrow_right_dark} alt="" />
      </button>
    </Link>
  );
};

export default SecondaryLink;
