import React from "react";
import Link from "next/link";
import Image from "next/image";
import footer_logo from "../../../assets/images/footer-logo.svg";
import ig_logo from "../../../assets/images/instagram-icon.svg";
import fb_logo from "../../../assets/images/facebook-icon.svg";
import whatsapp_logo from "../../../assets/images/whatsapp-icon.svg";
import tiktok_icon from "../../../assets/images/tiktok-icon.svg";
import phone_icon from "../../../assets/images/phone-icon.svg";
import whatsapp_icon_mini from "../../../assets/images/whatsapp-icon-mini.svg";

const Footer = () => {
  return (
    <div className="bg-white sm:px-5 px-2 w-full sm:pb-5 pb-2">
      <div className="bg-[#100E10] rounded-b-[24px] w-full py-[80px] md:px-[100px] sm:px-[40px] px-5">
        <div className="flex xl:flex-row flex-col gap-[115px] items-start">
          <Image src={footer_logo} alt="" />
          <div className="w-full">
            <div className="flex md:flex-row flex-col md:gap-0 gap-[40px] justify-between">
              <div>
                <h3 className="text-white font-Pangram-Bold mb-8 text-2xl">
                  Want to work with us
                </h3>
                <Link
                  href="mailto:info@dentalopulence.co.uk"
                  className="text-[#C2C2C2] text-xl"
                >
                  info@dentalopulence.co.uk
                </Link>
              </div>
              <div>
                <h3 className="text-white font-Pangram-Bold text-2xl">
                  Find us on social media
                </h3>
                <div className="flex items-center gap-4 mt-4">
                  <Image src={whatsapp_logo} alt="" />
                  <Image src={tiktok_icon} alt="" />
                  <Image src={ig_logo} alt="" />
                  <Image src={fb_logo} alt="" />
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#CFCFCF] my-10" />

            <div className="flex flex-wrap gap-[90px] justify-between">
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="text-white font-Pangram-Bold text-2xl">
                    Quick Links
                  </h3>
                  <Link href="#">
                    <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                      Home
                    </p>
                  </Link>
                  <Link href="#">
                    <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                      About us
                    </p>
                  </Link>
                  <Link href="#">
                    <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                      Contact us
                    </p>
                  </Link>
                </div>
                <div>
                  <h3 className="text-white font-Pangram-Bold text-2xl">
                    Our Info
                  </h3>
                  <Link href="#">
                    <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6 flex items-center gap-2">
                      <Image src={phone_icon} alt="" />
                      <span>0121 272 9229  (Fri-Sat)</span>
                    </p>
                  </Link>
                  <Link href="#">
                    <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6 flex items-center gap-2">
                      <Image src={whatsapp_icon_mini} alt="" />
                      <span>+447301253447</span>
                    </p>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-white font-Pangram-Bold text-2xl">
                  General Treatments
                </h3>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Bridges
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Dentures
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Crowns / Veneers
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Examination
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Extractions
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Hygienist
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    White Fillings
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Root Canal Treatments
                  </p>
                </Link>
              </div>

              <div>
                <h3 className="text-white font-Pangram-Bold text-2xl">
                  Cosmetic Treatment
                </h3>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Invisalign
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Fixed Retainers
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Teeth Whitening
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Vivera Retainers
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Crowns/Veneers
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Composite Veneers
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Routine Examination
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Internal Tooth Whitening
                  </p>
                </Link>
                <Link href="#">
                  <p className="text-base text-[#C2C2C2] font-Pangram-Regular mt-6">
                    Composite Edge Bonding
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-base font-Pangram-Regular max-w-[788px] mx-auto text-white mt-[80px]" >
          Copyright © {new Date().getFullYear()} John Clive Industries Ltd.
          Registered in England and Wales, UK. All rights reserved. Website
          Developed by Lintech Group
        </p>
      </div>
    </div>
  );
};

export default Footer;
