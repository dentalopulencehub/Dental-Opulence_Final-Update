import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import nav_logo from "../../../assets/images/nav-logo.svg";
import pointer_down from "../../../assets/images/pointer-down.svg";
import logo_background_overlay from "../../../assets/images/logo-bg-overlay.svg";
import nav_drop_down_img from "../../../assets/images/nav-drop-down-img-optimized.jpg";

import PrimaryLink from "../atom/PrimaryLink";
import Hambuger from "../atom/Hamburger";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../lib/gsap";

import { GlobalContext } from "../../../context/GlobalContext";
import { handleSetPathToNavigate } from "../../../context/action";

import { navlinks } from "../../../constants";

const Navbar = () => {
  const { dispatch } = useContext(GlobalContext);

  const [hoverId, setHoverId] = useState<number | null>(null);

  useGSAP(() => {
    let link_list = document.querySelectorAll(".link-list");

    link_list?.forEach((link) => {
      let arrow = link.querySelector(".link-pointer-down");

      link?.addEventListener("mouseover", () => {
        gsap.to(arrow, { rotate: 180, duration: 0.5 });
      });

      link?.addEventListener("mouseleave", () => {
        gsap.to(arrow, { rotate: 0, duration: 0.5 });
      });
    });
  }, []);

  return (
    <div className="relative lg:px-[100px] sm:px-[40px] px-[20px] w-full h-full">
      <nav className="fixed w-fit mix-blend-difference bg-transparent flex items-center justify-between top-[30px] z-[10]">
        <Link href="/" className="nav-logo-wrapper flex items-center cursor-pointer">
          <Image width={100} height={40} src={nav_logo} alt="Dentist in Hall Green" title="Dental Opulence" className="w-[80px] sm:w-[100px] h-auto object-contain" />
        </Link>
      </nav>
      <div className="fixed w-fit top-[30px] z-[10] lg:right-[100px] sm:right-[40px] right-[20px] flex items-center">
        <div className="pl-[43.5px] pr-[14px] justify-between min-w-[872px] bg-[#494849]/40 rounded-[80px] lg:flex hidden items-center bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
          <ul className="flex items-center text-white gap-7">
            {navlinks.map((link, index) => (
              <li
                key={index}
                className="font-Pangram-Regular link-list dropdown"
              >
                {link.subLinks ? (
                  <div className="cursor-pointer">
                    <p className="flex items-center py-6">
                      <span className="dropbtn">{link.label}</span>
                      <Image
                        src={pointer_down}
                        alt=""
                        className="ml-2 link-pointer-down"
                      />
                    </p>
                  </div>
                ) : (
                  <Link href={link.href} className="cursor-pointer">
                    <p className="flex items-center py-6">
                      <span className="dropbtn">{link.label}</span>
                    </p>
                  </Link>
                )}
                {link?.subLinks && (
                  <div
                    className={`dropdown-content h-fit w-full ${
                      link?.label === "Cases" ? "w-1/2" : "w-full"
                    } text-white font-Pangram-Regular rounded-lg ${
                      link?.label === "General Treatment"
                        ? "-right-[277%]"
                        : "-right-[140%]"
                    } cursor-pointer`}
                  >
                    <div
                      className={`inline-grid p-6 grid-flow-row place-content-start place-items-start ${
                        link?.label === "Cases" ? "grid-cols-1" : "grid-cols-2"
                      }`}
                    >
                      {link.subLinks.map((subLink, index: number) => (
                        <Link
                          href={subLink.href}
                          key={index}
                          className="relative h-fit flex items-center w-full"
                          onMouseOver={() => setHoverId(index)}
                          onMouseOut={() => setHoverId(null)}
                        >
                          <p className="flex items-center relative">
                            <Image
                              src={
                                hoverId === index
                                  ? subLink?.icon_hovered
                                  : subLink.icon
                              }
                              className=""
                              alt=""
                            />
                            <span className="text-white text-base ml-3">
                              {subLink.title}
                            </span>
                          </p>
                        </Link>
                      ))}
                    </div>
                    <div className="relative w-[351px] bg-[#222222] py-[31px] px-[27px] z-[40] rounded-tr-2xl rounded-br-2xl">
                      <Image src={nav_drop_down_img} className="w-fit" alt="" />
                      <h3 className="text-[#8A8A8A] w-full text-[20px] mt-5 leading-[24px]">
                        <span className="text-white">Transform</span> Your Smile
                        Today with Dental Opulence!
                      </h3>

                      <PrimaryLink
                        href="/contact"
                        title="Contact Us"
                        style="py-2 px-4 rounded-[34px] bg-white text-[#100E10] font-Pangram-Medium text-xs mt-[14px] z-[9] w-fit hover:text-white hover:bg-transparent border border-transparent hover:border-white relative duration-0"
                      />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <a className="py-3 cursor-pointer px-4 rounded-[34px] bg-white text-[#100E10] font-Pangram-Medium text-sm ml-10 hover:text-white hover:bg-transparent border border-transparent hover:border-white duration-0" href='https://book.do.co.uk/' target="_blank">
          Book now
          </a>
          {/* <PrimaryLink
            href="/contact"
            title="Contact"
            style="py-3 cursor-pointer px-4 rounded-[34px] bg-white text-[#100E10] font-Pangram-Medium text-sm ml-10 hover:text-white hover:bg-transparent border border-transparent hover:border-white duration-0"
          /> */}
        </div>
        <div className="relative right-0">
          <Hambuger />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
