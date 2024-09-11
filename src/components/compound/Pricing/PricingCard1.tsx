import React, { useRef, useState } from "react";
import Image from "next/image";
// import { HomeOurServicesType } from "../../../types";

import arrow_right from "../../../../assets/images/arrow-right.svg";
import bordered_arrow_right from "../../../../assets/images/bordered-arrow-right.svg";

import { useGSAP } from "@gsap/react";
// import { gsap } from "../../../lib/gsap";
import Link from "next/link";
import { HomeOurServicesType } from "../../../../types";
import { gsap } from "../../../../lib/gsap";

const PricingCard1 = ({
  price,
  image,
  title,
  href,
  image_inverted,
  selectedTheme,
}: HomeOurServicesType & { selectedTheme: any }) => {
  const tl: any = useRef(null);
  const [hover, setHover] = useState(false);

  useGSAP(() => {
    tl.current = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      paused: true,
    });

    let service_cards = document.querySelectorAll(".service-card");

    service_cards?.forEach((card) => {
      let arrow_right = card.querySelector(".arrow-right");
      let bordered_arrow_right = card.querySelector(".bordered-arrow-right");
      let title = card.getElementsByTagName("h3");
      let text = card.getElementsByTagName("p");

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          background: selectedTheme === "light" ? "#100E10" : "#ffffff",
          ease: "back.in",
          duration: 0.2,
        });
        gsap.to(title, { color: "white", duration: 0.2, ease: "power3.inOut" });
        gsap.to(text, { color: "white", duration: 0.2, ease: "power3.inOut" });
        gsap.to(arrow_right, {
          left: 0,
          opacity: 1,
          duration: 0.2,
          delay: 0.1,
          ease: "power3.inOut",
        });
        gsap.to(bordered_arrow_right, {
          left: 20,
          opacity: 0,
          duration: 0.2,
          ease: "power3.inOut",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          background: selectedTheme === "light" ? "#F8F8F8" : "#282828",
        });
        gsap.to(title, { color: "#100E10" });
        gsap.to(text, { color: "#4e4e4e" });
        gsap.to(arrow_right, { left: -16, opacity: 0 });
        gsap.to(bordered_arrow_right, { left: 0, opacity: 1, delay: 0.1 });
      });

      return () => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      };
    });
  }, [selectedTheme]);

  return (
    <Link href={href}>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={` px-5 py-[21px] ${
          selectedTheme === "light" ? "bg-[#F3F3F3]" : "bg-[#282828]"
        } border border-[#f4f4f4] rounded-xl max-w-[395px] h-[150px] md:h-[110px] service-card duration-0`}
      >
        <div className="flex flex-row justify-between items-center gap-3">
          <div className="flex flex-col items-start justify-start w-[70%]">
            {/* <div>
             <Image src={hover ? image_inverted : image} alt="" className="w-[55px] h-[55px]"/>
           </div>  */}
              <h3 className="text-base text-[#100E10] font-Pangram-Bold text-left">
                {title}
              </h3>
              <p className="mt-1 text-left">{price}</p>
          </div>

          <div className="self-center md:self-end mb-1 w-[30%]">
            <Image
              src={arrow_right}
              alt=""
              className="absolute -left-4 arrow-right opacity-0e w-6 md:w-8"
            />
            <Image
              src={bordered_arrow_right}
              alt=""
              className="bordered-arrow-right  w-6 md:w-8 "
            />
          </div>
        </div>

        {/* <div className="">
        <Image src={hover ? image_inverted : image} alt="" />
      </div>
      <div>
        <h3 className="text-base text-[#100E10] font-Pangram-Bold">{title}</h3>
      
      </div>
      <div className="relative self-end mt-auto">
        <Image
          src={arrow_right}
          alt=""
          className="absolute -left-4 arrow-right opacity-0"
        />
        <Image
          src={bordered_arrow_right}
          alt=""
          className="bordered-arrow-right relative"
        />
      </div> */}
      </div>
    </Link>
  );
};

export default PricingCard1;
