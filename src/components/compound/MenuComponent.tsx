import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../lib/gsap";
import { GlobalContext } from "../../../context/GlobalContext";
import PrimaryLink from "../atom/PrimaryLink";
import {
  handleSetMenuState,
  handleSetPathToNavigate,
} from "../../../context/action";
import { navlinks } from "../../../constants";
import menu_pointer_down from "../../../assets/images/menu-pointer-down.svg";

const MenuComponent = () => {
  const { dispatch, menuOpen } = useContext(GlobalContext);
  let tl: any = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl?.current
      ?.to(".menuOverlay", {
        duration: 0.2,
        opacity: 1,
        display: "block",
      })
      .to("#__next", {
        position: "fixed",
        overflow: "hidden",
        duration: 0.2,
      });
    /* .fromTo(
        ".menu_links",
        {
          y: 100,
        },
        {
          duration: 0.5,
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.inOut",
        }
      ) */
  }, []);

  useGSAP(() => {
    if (menuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
      // Reset all dropdowns when menu closes
      setTimeout(() => {
        setInnerLinkState((prev) =>
          prev.map((item) => ({ ...item, state: false }))
        );
        // Close all dropdowns visually
        navlinks.forEach((_, index) => {
          gsap.set(`.innerlink-${index}`, {
            height: 0,
            opacity: 0,
          });
        });
      }, 200);
    }
  }, [menuOpen]);

  const [innerLinkState, setInnerLinkState] = useState<any[]>([]);

  useEffect(() => {
    navlinks?.forEach((el, index) => {
      if (el.subLinks) {
        setInnerLinkState((prev) => [
          ...prev,
          { name: el.label, state: false },
        ]);
      }
    });
  }, []);

  const handleInnerLinkDropToggle = (title: string, classSelector: string) => {
    const findState = innerLinkState.find((el: any) => el.name === title);

    // Close all other dropdowns first
    innerLinkState.forEach((item, idx) => {
      if (item.name !== title && item.state) {
        gsap.to(`.innerlink-${navlinks.findIndex(l => l.label === item.name)}`, {
          height: 0,
          opacity: 0,
          duration: 0.2,
        });
      }
    });

    // Toggle current dropdown
    if (findState?.state) {
      gsap.to(`.${classSelector}`, {
        height: 0,
        opacity: 0,
        duration: 0.2,
      });
    } else {
      gsap.to(`.${classSelector}`, {
        height: "auto",
        opacity: 1,
        zIndex: 1,
        duration: 0.2,
      });
    }

    // Update state: close all others, toggle current
    let newState = innerLinkState.map((el: any) => {
      if (el.name === title) {
        return { ...el, state: !el.state };
      }
      return { ...el, state: false };
    });
    setInnerLinkState(newState);
  };

  return (
    <div className="fixed xs:h-[88%] h-[85%] overflow-y-scroll -bottom-[1%] px-5 hidden opacity-0 -translate-x-[50%] w-[calc(100%-10px)] left-[50%] menuOverlay z-[14]  bg-[#222222]">
      <ul>
        {navlinks.map((link, index) => (
          <div
            key={index}
            className="border-b border-b-[#2D2D2D] w-full py-5"
          >
            <li>
              {link.subLinks ? (
                <div
                  className="text-[#B9B9B9] flex items-center justify-between cursor-pointer py-2 active:bg-[#2D2D2D] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleInnerLinkDropToggle(link?.label, `innerlink-${index}`);
                  }}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleInnerLinkDropToggle(link?.label, `innerlink-${index}`);
                  }}
                >
                  <span className="text-base">{link.label}</span>
                  <Image
                    src={menu_pointer_down}
                    className={`transition-transform duration-200 ${
                      innerLinkState.find(item => item.name === link.label)?.state ? 'rotate-180' : ''
                    }`}
                    alt="menu arrow"
                  />
                </div>
              ) : (
                <div
                  className="text-[#B9B9B9] flex items-center justify-between cursor-pointer py-2"
                  onClick={() => handleSetPathToNavigate(dispatch, link.href)}
                >
                  <span className="text-base">{link.label}</span>
                </div>
              )}
            </li>

            <ul
              className={`${
                link.subLinks ? "flex" : "hidden"
              } gap-[21px] flex-col relative top-5 h-0 -z-[1] opacity-0 innerlink-${index}`}
            >
              {link.subLinks?.map((innerlink, innerindex) => (
                <Link
                  href={innerlink.href}
                  onClick={() => handleSetMenuState(dispatch, false)}
                  key={innerindex}
                  className="text-sm flex gap-3 items-center px-[10px] relative cursor-pointer"
                >
                  <Image src={innerlink.icon} alt={innerlink.title} />
                  <span className="text-white">{innerlink.title}</span>
                </Link>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <PrimaryLink
        href="/contact"
        title="Contact Us"
        style="py-2 px-4 rounded-[34px] w-full max-w-[335px] h-[56px] flex items-center justify-center mt-6 mx-auto text-center bg-white text-[#100E10] font-Pangram-Medium text-xs hover:text-white hover:bg-transparent border border-transparent hover:border-white duration-0"
      />
    </div>
  );
};

export default MenuComponent;
