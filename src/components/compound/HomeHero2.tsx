import React, { useRef } from "react";
import Image from "next/image";
import home_hero2_ill from "../../../assets/images/home-hero2-ill.png";
import underline_vector from "../../../assets/images/underline-vector.svg";
import { useScroll, motion, useTransform } from "framer-motion";
import { useIsomorphicLayoutEffect } from "../../../hooks";

const HomeHero2 = () => {
  let value = `Dental Opulence is a new dental clinic that offers a combination of
  general dentistry and cosmetic dentistry services. The clinic is
  equipped with modern facilities and technology to provide
  exceptional dental care. The team at Dental Opulence is dedicated to
  ensuring a comprehensive and comfortable dental experience for
  patients. The clinic's focus is on maintaining oral health and
  enhancing smiles through cosmetic procedures.`;

  const element = useRef(null);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    container: container,
    target: element,
    offset: ["start 0.9", "start 0.15"],
  });

  const words = value.split(" ");

  return (
    <>
      <style>
        {`
          .bg-[#100E10] { background-color: #100E10; }
          .text-white { color: white; }
        `}
      </style>
      <div className="w-full">
        <div className="bg-[#100E10] w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex xl:flex-row flex-col justify-between gap-[70px] xl:gap-0">
          <div className="xl:max-w-[600px] md:w-[70%] w-[100%] mx-auto sm:text-center xl:ml-0">
            <Image src={home_hero2_ill} alt="" className="mt-10 w-[100%] h-auto xl:w-[500px]" />
          </div>

          <div className="xl:max-w-[690px] w-[100%] mx-auto flex flex-col xl:items-start items-center">
            <div className="flex flex-col justify-start">
              <span className="text-white font-Pangram-Regular">About us</span>
              <Image src={underline_vector} alt="" />
            </div>
            <p
              className="text-white font-Pangram-Regular mt-6 sm:text-[25px] text-[20px] sm:leading-[36px] leading-[28px] text-left flex flex-wrap "
              ref={element}
            >
              {words.map((word, index) => {
                const start = index / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word
                    key={index}
                    range={[start, end]}
                    progress={scrollYProgress}
                  >
                    {word}
                  </Word>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero2;

const Word = React.memo(({
  children,
  range,
  progress,
}: {
  children: any;
  range: any;
  progress: any;
}) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="mr-2 mt-1.5">
      {characters.map((char: any, index: number) => {
        const start = range[0] + index * step;
        const end = range[0] + step * (index + 1);
        return (
          <Character key={index} range={[start, end]} progress={progress}>
            {char}
          </Character>
        );
      })}
    </span>
  );
});

// Set displayName for better debugging
Word.displayName = "Word";

const Character = React.memo(({
  children,
  range,
  progress,
}: {
  children: any;
  range: any;
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
});

// Set displayName for better debugging
Character.displayName = "Character";
