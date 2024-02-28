import React, { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import underline_vector_dark from "../../../assets/images/underline-vector-dark.svg";
import tooth_image_light from "../../../assets/images/tooth-image-light.svg";
import tooth_image_dark from "../../../assets/images/tooth-image-dark.svg";

import tooth_image_light2 from "../../../assets/images/tooth-image-light2.svg";
import tooth_image_dark2 from "../../../assets/images/tooth-image-dark2.svg";
import { our_services, our_services2 } from "../../../constants";
import { OurServiceCard } from "../molecule";
import { gsap } from "../../../lib/gsap";
import { motion } from "framer-motion";

type theme = "light" | "dark";

const HomeOurServices = () => {
  const tl: any = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState<theme>("light");

  const handleHover1 = () => {
    setIsHovered(!isHovered);
  };

  const handleHover2 = () => {
    setIsHovered2(!isHovered2);
  };

  const handleSetSelectedTheme = (_theme: theme) => {
    setSelectedTheme(_theme);
  };

  return (
    <div
      className={` ${
        selectedTheme === "light" ? "bg-[#100E10]" : "bg-white"
      } sm:px-5 px-2 w-full`}
    >
      <div
        className={`w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] ${
          selectedTheme === "light" ? "bg-white" : "bg-[#100E10]"
        }`}
      >
        <p className="flex flex-col">
          <span
            className={` ${
              selectedTheme === "light" ? "text-[#4e4e4e]" : "text-white"
            } text-base font-Pangram-Regular`}
          >
            Our Services
          </span>
          <Image src={underline_vector_dark} alt="" />
        </p>
        <h2
          className={`mt-4 ${
            selectedTheme === "light" ? "text-[#100E10]" : "text-white"
          } text-[32px] leading-[38px] font-Pangram-Bold xs:w-[412px] w-full`}
        >
          Demand meets excellence at Dental Opulence.
        </h2>

        <div className="flex items-center mt-10">
          <div
            onClick={() => handleSetSelectedTheme("light")}
            className="flex flex-col items-center justify-center service-tooth-div"
          >
            <motion.div
              /* whileHover={{
                backgroundColor: "transparent",
                border: "1px solid #100E10",
                borderRadius: "999px",
              }}
              onHoverStart={handleHover1}
              onHoverEnd={handleHover1}
              transition={{
                duration: 0.1,
              }} */
              className="py-[26px] border px-6 bg-[#100E10] rounded-full flex items-center justify-center w-fit"
            >
              <Image
                src={isHovered ? tooth_image_dark2 : tooth_image_light}
                alt="Tooth image light"
                className="tooth-image"
              />
            </motion.div>
            <p
              className={`font-Pangram-Bold text-xs mt-2 ${
                selectedTheme === "light" ? "text-[#100E10]" : "text-white"
              } `}
            >
              General Treatments
            </p>
          </div>
          <div
            onClick={() => handleSetSelectedTheme("dark")}
            className="ml-6 flex flex-col items-center justify-center service-tooth-div"
          >
            <motion.div
              whileHover={{
                backgroundColor: "#100E10",
                border: "1px solid #100E10",
                borderRadius: "999px",
              }}
              onHoverStart={handleHover2}
              onHoverEnd={handleHover2}
              transition={{
                duration: 0.1,
              }}
              className={`py-6 px-6 bg-transparent border rounded-full flex items-center justify-center w-fit`}
            >
              <Image
                src={isHovered2 || selectedTheme === 'dark' ? tooth_image_light2 : tooth_image_dark}
                alt="Tooth image light"
                className="tooth-image"
                width={40}
                height={40}
              />
            </motion.div>
            <p
              className={`font-Pangram-Bold text-xs mt-2 ${
                selectedTheme === "light" ? "text-[#100E10]" : "text-white"
              } `}
            >
              Cosmetic Treatments
            </p>
          </div>
        </div>

        {selectedTheme === "light" ? (
          <div className="grid big:grid-cols-2 grid-cols-1 mt-10 gap-8">
            {our_services.map((service, index) => (
              <OurServiceCard key={index} {...service} />
            ))}
          </div>
        ) : (
          <div className="grid big:grid-cols-2 grid-cols-1 mt-10 gap-8">
            {our_services2.map((service, index) => (
              <OurServiceCard key={index} {...service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeOurServices;
