import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import footer_logo from "../../../assets/images/footer-logo.svg";
import ig_logo from "../../../assets/images/instagram-icon.svg";
import ig_logo_dark from "../../../assets/images/instagram-icon-dark.svg";
import fb_logo from "../../../assets/images/facebook-icon.svg";
import fb_logo_dark from "../../../assets/images/facebook-icon-dark.svg";
import whatsapp_logo from "../../../assets/images/whatsapp-icon.svg";
import whatsapp_logo_dark from "../../../assets/images/whatsapp-icon-dark-footer.svg";
import tiktok_icon from "../../../assets/images/tiktok-icon.svg";
import titktok_icon_dark from "../../../assets/images/tiktok-icon-dark.svg";

import phone_icon from "../../../assets/images/phone-icon.svg";
import whatsapp_icon_mini from "../../../assets/images/whatsapp-icon-mini.svg";
import { handleSetPathToNavigate } from "../../../context/action";
import { GlobalContext } from "../../../context/GlobalContext";

import logo_Link1 from '../../../assets/fonts/footer-logo-link1.svg'
import logo_Link2 from '../../../assets/fonts/footer-logo-link2.svg'
import logo_Link3 from '../../../assets/fonts/footer-logo-link3.svg'



const hoverLinks = [
  {
    image: ig_logo,
    image_inverted: ig_logo_dark,
    link: "https://www.instagram.com/dentalopulence/",
  },
  {
    image: fb_logo,
    image_inverted: fb_logo_dark,
    link: "https://www.facebook.com/DentalOpulence/",
  },
  {
    image: whatsapp_logo,
    image_inverted: whatsapp_logo_dark,
    link: "https://wa.me/+447301253447",
  },
  {
    image: tiktok_icon,
    image_inverted: titktok_icon_dark,
    link: "https://www.tiktok.com/@dentalopulence",
  },
];

const Footer = () => {
  const { dispatch } = useContext(GlobalContext);

  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  return (
    <div className="w-full">
      <div className="bg-[#100E10] rounded-b-[24px] w-full py-[80px] md:px-[70px] sm:px-[40px] px-5">
        <div className="flex xl:flex-row flex-col md:gap-[90px] gap-[50px] items-start">
          <div>
            <Image src={footer_logo} alt="" />
            <div className="flex flex-col md:gap-0 gap-[40px] justify-between mt-10">
              <div>
                <h3 className="text-white font-Pangram-Bold text-base mb-4">
                  Want to work with us
                </h3>
                <Link
                  href="mailto:info@dentalopulence.co.uk"
                  className="text-[#A2A2A2] cursor-pointer text-xl font-Pangram-Light font-normal"
                >
                  info@do.co.uk
                </Link>
              </div>
              <div className="mt-10">
                <h3 className="text-white font-Pangram-Bold text-base">
                  Find us on social media
                </h3>
                <div className="flex items-center gap-4 mt-4">
                  {hoverLinks.map((item, index) => (
                    
                    <div
                      key={index}
                      onMouseOver={() => setHoverIndex(index)}
                      onMouseOut={() => setHoverIndex(null)}
                      className="w-10 h-10 p-[13px] rounded-full border border-[#fff] cursor-pointer hover:bg-white"
                    >
                      <Link href={item.link} target="blank">
                       <Image
                        src={
                          hoverIndex === index
                            ? item.image_inverted
                            : item.image
                        }
                        alt=""
                      />
                      </Link>
                   
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:flex items-center gap-2 md:mt-10 h-full w-full">
                <Link href='https://test.cqc.org.uk/location/1-17708997775/contact'>
                  <Image src={logo_Link1} alt="" className="w-[180px] h-[80px]"/>
                </Link>
                {/* <Link href='https://www.gdc-uk.org'>
                  <Image src={logo_Link2} alt="" className="w-[190px] h-[80px]  md:my-0 my-3"/>
                </Link>
                <Link href='https://gdpr-info.eu'>
                  <Image src={logo_Link3} alt="" className="w-[190px] h-[80px]"/>
                </Link> */}
              </div>


            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap md:gap-[49px] justify-between">
              <div className="flex flex-col gap-10 w-[176px]">
                <div>
                  <h3 className="text-white font-Pangram-Regular text-2xl">
                    Quick Links
                  </h3>
                  <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Home
                    </p>
                  </div>
                  <div onClick={() => handleSetPathToNavigate(dispatch, "/about")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      About us
                    </p>
                  </div>

                  <div onClick={() => handleSetPathToNavigate(dispatch, "/our-pricing")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Pricing
                    </p>
                  </div>

                  <div
                    onClick={() => handleSetPathToNavigate(dispatch, "/cases")}
                  >
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Cases
                    </p>
                  </div>
                  <div onClick={() => handleSetPathToNavigate(dispatch, "/testimonials")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Testimonials
                    </p>
                  </div>
                  <div onClick={() => handleSetPathToNavigate(dispatch, "/contact")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Contact us
                    </p>
                  </div>

                </div>
                <div>
                  <h3 className="text-white font-Pangram-Bold text-2xl">
                    Our Info
                  </h3>
                  <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6 flex items-center gap-2">
                      <Image src={phone_icon} alt="" />
                      <span>0121 272 9229</span>
                    </p>
                  </div>
                  <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6 flex items-center gap-2">
                      <Image src={whatsapp_icon_mini} alt="" />
                      <span>+447301253447</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-[227px] md:mt-0 mt-6">
                <h3 className="text-white font-Pangram-Regular text-2xl">
                  General Treatments
                </h3>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Bridges
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Dentures
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Crowns / Veneers
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Examination
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Extractions
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Hygienist
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    White Fillings
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Root Canal Treatments
                  </p>
                </div>


               <div className="mt-8">
                <h3 className="text-white font-Pangram-Regular text-2xl">
                   Opening Hours
                </h3>
                  <div>
                     <div className="flex text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-5">
                        <p>Tuesday</p>
                        <p>9am - 5pm</p>
                      </div>
                      <div className="flex text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-5">
                        <p>Thursday</p>
                        <p>9am - 5pm</p>
                      </div>
                      <div className="flex text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-5">
                        <p>Friday</p>
                        <p>9am - 5pm</p>
                      </div>
                      <div className="flex text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-5">
                        <p>Saturday</p>
                        <p>9am - 5pm</p>
                      </div>
                  </div>
               </div>


              </div>


              <div className="w-[227px] md:mt-0 mt-6">
                <h3 className="text-white font-Pangram-Regular text-2xl">
                  Cosmetic Treatment
                </h3>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Invisalign
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Fixed Retainers
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Teeth Whitening
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Vivera Retainers
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Crowns/Veneers
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Composite Veneers
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Routine Examination
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Internal Tooth Whitening
                  </p>
                </div>
                <div onClick={() => handleSetPathToNavigate(dispatch, null)}>
                  <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                    Composite Edge Bonding
                  </p>
                </div>
              </div>



              <div className="flex flex-col gap-10 w-[176px] md:mt-0 mt-8">
                <div>
                  <h3 className="text-white font-Pangram-Regular text-2xl">
                    Legal
                  </h3>
                  <div onClick={() => handleSetPathToNavigate(dispatch, "privacy-policy")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Privacy Policy
                    </p>
                  </div>
                  <div onClick={() => handleSetPathToNavigate(dispatch, "/complaints-procedure")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Complaints Procedure
                    </p>
                  </div>

                  <div onClick={() => handleSetPathToNavigate(dispatch, "/terms-of-use")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Terms of Use
                    </p>
                  </div>

                  <div
                    onClick={() => handleSetPathToNavigate(dispatch, "/health-and-safety")}
                  >
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Health & Safety
                    </p>
                  </div>
                  <div onClick={() => handleSetPathToNavigate(dispatch, "/appointment-terms")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Appointment Terms
                    </p>
                  </div>
 
                  <div onClick={() => handleSetPathToNavigate(dispatch, "/data-protection")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Data Protection
                    </p>
                  </div>
                  {/* <div onClick={() => handleSetPathToNavigate(dispatch, "/contact")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                     Dental Plan Terms
                    </p>
                  </div> */}
                  <div onClick={() => handleSetPathToNavigate(dispatch, "/cookie-policy")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Cookie Policy
                    </p>
                  </div>

                  {/* <div onClick={() => handleSetPathToNavigate(dispatch, "/contact")}>
                    <p className="text-base text-[#A2A2A2] cursor-pointer font-Pangram-Regular mt-6">
                      Competitions & Offers Terms
                    </p>
                  </div> */}


                </div>
              
              </div>








             

           
            </div>
          </div>
        </div>

        <div className="bg-[#454545] w-full h-[1px] mt-[60px]" />
        <p className="text-center text-base font-Pangram-Regular max-w-[788px] mx-auto text-white mt-[80px]">
          Copyright © {new Date().getFullYear()} John Clive Industries Ltd.
          Registered in England and Wales, UK. All rights reserved. Website
          Developed by Lintech Group
        </p>
      </div>
    </div>
  );
};

export default Footer;
