import React, { useRef } from "react";
import Image from "next/image";
import about_mission_logo from "../../../assets/images/about-mission-logo.svg";
import expert_dentist_img from "../../../assets/images/expert-dentists-img.svg";
import twoK_review_image from "../../../assets/images/2k-review-img.svg";
import threeK_clients_image from "../../../assets/images/3k-client-img.svg";
import { useScroll, motion, useTransform } from "framer-motion";

const AboutMissionVision = () => {
  let value = `Our mission is to elevate the dental experience by combining state-of-the-art technology with personalised care, tailored to the unique needs of each patient. We are dedicated to promoting oral health and enhancing smiles, empowering our patients to achieve optimal dental wellness and confidence. At Dental Opulence, we are committed to creating a luxurious and transformative journey towards a brighter, healthier smile.`;

  let value2 = `Our vision at Dental Opulence is to revolutionise the dental industry by providing unparalleled service and creating an environment of opulence and comfort for our patients. We strive to exceed expectations, delivering exceptional results and ensuring the utmost satisfaction of every individual who walks through our doors.`;

  const element = useRef(null);
  const element2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.37", "start 0.15"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: element2,
    offset: ["start 0.95", "start 0.15"],
  });

  const words = value2.split(" ");
  const words2 = value.split(" ");

  return (
    <div className="w-full">
      <div className="bg-[#100E10] w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex xl:flex-row flex-col justify-between gap-[70px] xl:gap-0">
        <div className="flex xl:flex-row flex-col gap-6 w-full">
          <div className="flex flex-col flex-wrap gap-6 justify-between xl:max-w-[425px] w-full">
            <div className="sm:max-w-[425px] w-full xl:h-[225px] bg-[#222222] rounded-2xl xs:p-10 p-7">
              <Image src={about_mission_logo} alt="" />
              <h3 className="text-white text-[48px] mt-[58px]">Who we are</h3>
            </div>
            <div className="w-full xl:min-h-[388px] bg-[#222222] rounded-2xl xs:p-10 p-7">
              <h4 className="text-white text-[34px]">Vision</h4>
              <h4
                className="text-white font-Pangram-Regular mt-6 text-[18px] leading-[23px] xl:text-left text-center flex flex-wrap"
                ref={element}
              >
                {words.map((word, index) => {
                  const start = index / words.length;
                  const end = start + 1 / words.length;
                  //console.log(start, end);
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
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div className=" w-full xl:min-h-[310px] bg-[#222222] rounded-2xl xs:p-10 p-7">
              <h4 className="text-white text-[34px]">Mission</h4>
              <h4
                className="text-white font-Pangram-Regular mt-6 text-[18px] leading-[23px] xl:text-left text-center flex flex-wrap"
                ref={element2}
              >
                {words2.map((word, index) => {
                  const start = index / words2.length;
                  const end = start + 1 / words2.length;
                  //console.log(start, end);
                  return (
                    <Word
                      key={index}
                      range={[start, end]}
                      progress={scrollYProgress2}
                    >
                      {word}
                    </Word>
                  );
                })}
              </h4>
            </div>
            <div className=" w-full xl:h-[310px] bg-[#222222] rounded-2xl flex sm:flex-row flex-col md:justify-around justify-between xs:p-10 p-7 sm:gap-0 gap-10">
              <div className="flex flex-col items-center justify-center gap-2">
                <Image src={expert_dentist_img} alt="" />
                <h3 className="text-[48px] text-white">30+</h3>
                <p className="text-base font-Pangram-Regular text-[#D0D0D0]">
                  EXPERT DENTISTS
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Image src={twoK_review_image} alt="" />
                <h3 className="text-[48px] text-white">2k+</h3>
                <p className="text-base font-Pangram-Regular text-[#D0D0D0]">
                  REVIEWS
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Image src={threeK_clients_image} alt="" />
                <h3 className="text-[48px] text-white">3k+</h3>
                <p className="text-base font-Pangram-Regular text-[#D0D0D0]">
                  CLIENTS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMissionVision;

const Word = ({
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
    <span className="mr-2">
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
};

const Character = ({
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
};
