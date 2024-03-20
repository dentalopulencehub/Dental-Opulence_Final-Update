import React, { useRef, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import pen_icon from "../../../../assets/images/pen-icon.svg";
import { gsap } from "../../../../lib/gsap";
import { NavigationLoader } from "../../molecule";
import { GlobalContext } from "../../../../context/GlobalContext";
import { handleSetPathToNavigate } from "../../../../context/action";
import tl_radius from "../../../../assets/images/Dental Opulence Radius/top left.svg";
import contact_page_button from "../../../../assets/images/contact-page-button.svg";

interface Props {
  children: React.ReactNode;
}

const Index = ({ children }: Props) => {
  const { dispatch, menuOpen } = useContext(GlobalContext);

  const tl: any = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });
    gsap.set(".contact-icon", { scale: 0.6 });

    let contact_icon = document.querySelector(".contact-icon");

    function learnMoreHover() {
      tl.current.to(contact_icon, 0.3, {
        scale: 1,
        duration: 0.3,
        ease: "back",
      });
      return tl.current;
    }

    contact_icon?.addEventListener("mouseover", () => {
      learnMoreHover().play();
    });

    contact_icon?.addEventListener("mouseleave", () => {
      learnMoreHover().reverse();
    });

    return () => {
      contact_icon?.removeEventListener("mouseover", () => {
        learnMoreHover().play();
      });

      contact_icon?.removeEventListener("mouseleave", () => {
        learnMoreHover().reverse();
      });
    };
  }, []);

  return (
    <main
      className={`bg-white sticky`}
    >
      <main className="fixed bg-white rounded-[24px] z-[700] w-full top-0 left-0 ">
        <div className="fixed bg-white w-screen h-[5px] top-0" />
        {/* <Image src={tl_radius} className="fixed top-[5px] left-[5px]" alt="" /> */}

        <div className="fixed bg-white w-[5px] h-screen left-0 " />

        <div className="fixed bg-white w-[5px] h-screen right-0 " />
        <div className="fixed bg-white w-screen h-[5px] bottom-0 " />
      </main>

      <main className="relative w-[calc(100%-10px)] mx-auto rounded-[24px] z-[690]">
        {children}

        <Image
          className="fixed w-[86px] h-[86px] sm:bottom-10 bottom-3 md:right-[100px] sm:right-[50px] xs:right-[20px] right-[10px] contact-icon cursor-pointer"
          onClick={() => handleSetPathToNavigate(dispatch, "/contact")}
          src={contact_page_button}
          alt="floating contact page button"
        />
      </main>
    </main>
  );
};

export default Index;
