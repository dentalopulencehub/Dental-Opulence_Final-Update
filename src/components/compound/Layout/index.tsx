import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import pen_icon from "../../../../assets/images/pen-icon.svg";
import { gsap } from "../../../../lib/gsap";
import { NavigationLoader } from '../../molecule'

interface Props {
  children: React.ReactNode;
}

const Index = ({ children }: Props) => {
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
    <main>
      {children}
      
      <div className="fixed w-fit bottom-10 md:right-[100px] right-[50px] p-[22px] rounded-full bg-[#404040]/40 z-[10] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 contact-icon">
        <Link href="/contact">
          <Image src={pen_icon} alt="" />
        </Link>
      </div>
    </main>
  );
};

export default Index;
