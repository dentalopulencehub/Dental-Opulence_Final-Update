import React from "react";
import { faq } from "../../../constants";
import { FaqAccordion } from "../molecule";
import { useGSAP } from "@gsap/react";
import { gsap } from "../../../lib/gsap";

const Faq = () => {
  useGSAP(() => {
    let groups = gsap.utils.toArray(".accordion-group");
    let menus = gsap.utils.toArray(".accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu: any) => {
      menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu: any) {
      menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element: any) {
      let menu = element.querySelector(".accordion-menu");
      let plus = element.querySelector(".faq-plus");
      let box = element.querySelector(".accordion-content");

      let spanElem = element.getElementsByTagName("span");
      let paraElem = element.getElementsByTagName("p");

      gsap.set(box, { height: "auto", marginTop: 24 });

      const tl = gsap.timeline({ paused: true });

      let animation = tl
        .from(box, {
          height: 0,
          marginTop: 0,
          duration: 0.5,
          ease: "power1.inOut",
        })
        .to(
          plus,
          {
            attr: {
              src: "/image/faq-open-icon.svg",
            },
          },
          0
        )
        .to(
          element,
          {
            backgroundColor: "#F8F8F8",
          },
          0
        )
        .to(
          spanElem,
          {
            color: "#100E10",
          },
          0
        )
        .to(paraElem, {
          color: "#757575",
        },0)
        .reverse();

      return function (clickedMenu: any) {
        if (clickedMenu === menu) {
          animation.reversed(!animation.reversed());
          //plus.setAttribute("src", '/videos/minus.svg')
        } else {
          animation.reverse();
        }
      };
    }
  }, []);

  return (
    <div className="bg-white sm:px-5 px-2">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] bg-[#100E10]">
        <h2 className="text-[32px] font-Pangram-Bold text-white text-center">
          Frequently Asked Question
        </h2>

        <div className="flex flex-col gap-2 mt-10">
          {faq.map((item, index) => (
            <FaqAccordion key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
