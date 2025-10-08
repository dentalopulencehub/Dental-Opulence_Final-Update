import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../lib/gsap";
import { GlobalContext } from "../../../context/GlobalContext";
import { handleSetMenuState } from "../../../context/action";
import { navlinks } from "../../../constants";
import menu_pointer_down from "../../../assets/images/menu-pointer-down.svg";

const MenuComponent = () => {
  const { dispatch, menuOpen } = useContext(GlobalContext);
  const tl = useRef<any>(null);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(".menuOverlay", {
        duration: 0.2,
        opacity: 1,
        display: "block",
      })
      .to("#__next", {
        position: "fixed",
        overflow: "hidden",
        duration: 0.2,
      });
  }, []);

  useGSAP(() => {
    if (menuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
      // Reset dropdown state when menu closes
      setTimeout(() => {
        setOpenDropdown(null);
      }, 200);
    }
  }, [menuOpen]);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMenu = () => {
    handleSetMenuState(dispatch, false);
  };

  return (
    <div className="fixed xs:h-[88%] h-[85%] overflow-y-auto -bottom-[1%] px-5 hidden opacity-0 -translate-x-[50%] w-[calc(100%-10px)] left-[50%] menuOverlay z-[14] bg-[#222222] rounded-t-2xl">
      <ul className="pb-6">
        {navlinks.map((link, index) => (
          <li
            key={index}
            className="border-b border-b-[#2D2D2D] w-full"
          >
            {link.subLinks ? (
              <>
                <button
                  className="text-[#B9B9B9] flex items-center justify-between w-full py-5 active:opacity-70 transition-opacity"
                  onClick={() => toggleDropdown(index)}
                  type="button"
                >
                  <span className="text-base font-Pangram-Regular">{link.label}</span>
                  <Image
                    src={menu_pointer_down}
                    className={`transition-transform duration-300 ${
                      openDropdown === index ? 'rotate-180' : ''
                    }`}
                    alt=""
                    width={12}
                    height={12}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === index ? 'max-h-[500px] pb-4' : 'max-h-0'
                  }`}
                >
                  <ul className="flex flex-col gap-4 pt-2">
                    {link.subLinks.map((innerlink, innerindex) => (
                      <li key={innerindex}>
                        <Link
                          href={innerlink.href}
                          onClick={closeMenu}
                          className="flex gap-3 items-center px-2 py-2 active:opacity-70 transition-opacity"
                        >
                          <Image
                            src={innerlink.icon}
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span className="text-white text-sm font-Pangram-Regular">
                            {innerlink.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link
                href={link.href}
                className="text-[#B9B9B9] flex items-center justify-between w-full py-5 active:opacity-70 transition-opacity"
                onClick={closeMenu}
              >
                <span className="text-base font-Pangram-Regular">{link.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        onClick={closeMenu}
        className="py-3 px-6 rounded-full w-full max-w-[335px] h-[56px] flex items-center justify-center mt-4 mb-8 mx-auto text-center bg-white text-[#100E10] font-Pangram-Medium text-sm active:opacity-70 transition-opacity"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default MenuComponent;
