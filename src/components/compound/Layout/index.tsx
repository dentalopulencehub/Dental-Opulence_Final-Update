import React from "react";
import Image from "next/image";
import Link from "next/link";
import pen_icon from "../../../../assets/images/pen-icon.svg";

interface Props {
  children: React.ReactNode;
}

const index = ({ children }: Props) => {
  return (
    <main>
      {children}
      <div className="fixed w-fit bottom-10 md:right-[100px] right-[50px] md:p-[22px] p-[11px] rounded-full bg-[#404040]/40 z-[10] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
        <Link href="">
          <Image src={pen_icon} alt="" />
        </Link>
      </div>
    </main>
  );
};

export default index;
