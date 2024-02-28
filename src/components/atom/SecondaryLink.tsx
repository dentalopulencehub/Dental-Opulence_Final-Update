import React from "react";
import Image from "next/image";
import Link from "next/link";
import arrow_right_dark from "../../../assets/images/arrow-right-dark.svg";
import arrow_right_light from "../../../assets/images/arrow-right.svg";

interface SecondaryLinkProps {
  title: string;
  href: string;
  style: string;
  hovered?: boolean;
  setHovered?: (hovered: boolean) => void;
}

const SecondaryLink = ({
  href,
  title,
  style,
  hovered,
  setHovered,
}: SecondaryLinkProps) => {
  return (
    <Link
      href={href}
      onMouseOver={() => setHovered!(true)}
      onMouseOut={() => setHovered!(false)}
    >
      <button className={style}>
        <span className="text-[18px]">{title}</span>
        <div className="w-10 h-10 items-center flex justify-center" >
          <Image src={hovered ? arrow_right_light : arrow_right_dark} alt="" />
        </div>
      </button>
    </Link>
  );
};

export default SecondaryLink;
