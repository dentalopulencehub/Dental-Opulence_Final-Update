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
      <div className="fixed w-fit bottom-10 right-[100px] p-[22px] rounded-full bg-[#404040]">
        <Link href="">
          <Image src={pen_icon} alt="" />
        </Link>
      </div>
    </main>
  );
};

export default index;
