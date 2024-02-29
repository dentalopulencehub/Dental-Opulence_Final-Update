"use client";

import { useGSAP } from "@gsap/react";
import { useRouter } from "next/router";
import { useRef } from "react";
import { gsap } from "../../../lib/gsap";

const NavigationLoader = () => {
  const tl: any = useRef(null);
  const router = useRouter();

  useGSAP(() => {
    let ctx: any;
    router.events.on("routeChangeStart", () => {
      ctx = gsap.context(() => {
        gsap.set(".loader-cnt", { display: "none" });
        tl.current = gsap.timeline({ paused: true });

        tl.current
          .fromTo(
            ".loader-cnt",
            {
              display: "none",
            },
            {
              duration: 0.1,
              display: "flex",
              ease: "power4.inOut",
            }
          )
          .to(
            "#__next",
            {
              height: "100vh",
              overflow: "hidden",
              ease: "power4.inOut",
            },
            "<"
          )

          .to(
            ".top-d",
            {
              duration: 1.2,
              top: "-50.5%",
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            ".bottom-d",
            {
              duration: 1.2,
              bottom: "-50.5%",
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            ".left-d",
            {
              duration: 1.2,
              left: "-90%",
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            ".right-d",
            {
              duration: 1.2,
              right: "-90%",
              ease: "power4.inOut",
            },
            "<"
          )
          .to(
            ".left-d",
            {
              duration: 1.2,
              left: "-50.5%",
              ease: "power4.inOut",
            },
            0.7
          )
          .to(
            ".right-d",
            {
              duration: 1.2,
              right: "-50.5%",
              ease: "power4.inOut",
            },
            0.7
          );

        tl.current.play().then(() => {
          tl.current.reverse();
        });
      });
    });

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <div className="loader-cnt hidden overflow-hidden h-screen w-full fixed top-0 left-0 z-[200]">
      <div className="top-d absolute w-dvw h-dvh bg-[#232323] z-[200] -top-full " />
      <div className="bottom-d absolute w-dvw h-dvh bg-[#232323] z-[200] -bottom-full" />
      <div className="left-d absolute w-dvw h-dvh bg-[#232323] z-[200] top-0 -left-full " />
      <div className="right-d absolute w-dvw h-dvh bg-[#232323] z-[200] top-0 -right-full" />
    </div>
  );
};

export default NavigationLoader;
