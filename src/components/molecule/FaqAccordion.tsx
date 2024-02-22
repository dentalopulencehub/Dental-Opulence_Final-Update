import React from "react";
import Image from "next/image";
import faq_close_icon from "../../../assets/images/faq-close-icon.svg";
import faq_open_icon from "../../../assets/images/faq-open-icon.svg";
import { FaqType } from "../../../types";

const FaqAccordion = ({ answer, question }: FaqType) => {
  return (
    <div className="py-4 px-5 accordion-group rounded-md cursor-pointer">
      <h3 className="accordion-menu flex flex-row items-center justify-between">
        <span className="text-white text-[18px] font-Inter"> <span className="relative -top-[4px]" >. {` `}</span>{question}</span>
        <Image src={faq_close_icon} alt="Plus" className="faq-plus" />
      </h3>
      <div className="faq_divider bg-[#CFCFCF] h-[1px] w-full mt-8" />
      <p className="accordion-content h-0 overflow-hidden text-[#C2C0C0] font-light text-sm font-Inter">
        {answer}
      </p>
    </div>
  );
};

export default FaqAccordion;
