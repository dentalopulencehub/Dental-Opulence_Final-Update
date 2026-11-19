import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import footer_logo from "../../../assets/images/do_logo.png";
import footer_logo2 from "../../../assets/images/footer_logo2.svg";

import footer_text from "../../../assets/images/Dental Opulence.svg";
import ig_logo from "../../../assets/images/instagram-icon.svg";
import ig_logo_dark from "../../../assets/images/instagram-icon-dark.svg";
import fb_logo from "../../../assets/images/facebook-icon.svg";
import fb_logo_dark from "../../../assets/images/facebook-icon-dark.svg";
import whatsapp_logo from "../../../assets/images/whatsapp-icon.svg";
import whatsapp_logo_dark from "../../../assets/images/whatsapp-icon-dark-footer.svg";
import tiktok_icon from "../../../assets/images/tiktok-icon.svg";
import titktok_icon_dark from "../../../assets/images/tiktok-icon-dark.svg";
import letter_icon from "../../../assets/images/Letter.svg";
import location_icon from "../../../assets/images/Map Point.svg";

import phone_icon from "../../../assets/images/call-calling.svg";
import whatsapp_icon_mini from "../../../assets/images/whatsapp-icon-mini.svg";

import logo_Link1 from "../../../assets/fonts/footer-logo-link1.svg";
import logo_Link2 from "../../../assets/fonts/footer-logo-link2.svg";
import logo_Link3 from "../../../assets/fonts/footer-logo-link3.svg";

const hoverLinks = [
  {
    title: "Instagram",
    image: ig_logo,
    image_inverted: ig_logo_dark,
    link: "https://www.instagram.com/dentalopulence/",
  },
  {
    title: "Facebook",
    image: fb_logo,
    image_inverted: fb_logo_dark,
    link: "https://www.facebook.com/DentalOpulence/",
  },
  {
    title: "Whatsapp",
    image: whatsapp_logo,
    image_inverted: whatsapp_logo_dark,
    link: "https://wa.me/+447301253447",
  },
  {
    title: "Tiktok",
    image: tiktok_icon,
    image_inverted: titktok_icon_dark,
    link: "https://www.tiktok.com/@dentalopulence",
  },
];

// Footer link lists. These are real links so they work on click, open in a
// new tab on middle click, and can be read by search engines.
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Pricing", href: "/our-pricing" },
  { label: "Cases", href: "/cases" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact us", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Complaints Procedure", href: "/complaints-procedure" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Health & Safety", href: "/health-and-safety" },
  { label: "Appointment Terms", href: "/appointment-terms" },
  { label: "Data Protection", href: "/data-protection" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Competitions & Offers Terms", href: "/competitions-and-offer-terms" },
  { label: "Black Friday Invisalign Offer Terms", href: "/black-friday-terms" },
  { label: "Sitemap", href: "/sitemap" },
];

const linkClass =
  "text-sm text-[#A2A2A2] font-Pangram-Regular cursor-pointer hover:text-white transition-colors mt-5 block";

const Footer = () => {
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  return (
    <div className="w-full">
      <div className="bg-[#100E10] w-full py-[80px] md:px-[90px] sm:px-[40px] px-4">
        <div className="flex xl:flex-row flex-col md:gap-[90px] gap-[50px] items-start">
          <div>
            <div className="flex gap-4">
              <Image src={footer_logo} height={60} alt="Dental Practice in Hall Green" title="Dental Practice in Hall Green" />
              <Image src={footer_text} alt="Dental Opulence" title="Dental Opulence" />
            </div>
            <div className="flex flex-col md:gap-0 gap-[40px] justify-between mt-10">
              <div className="">
                <h3 className="text-white  text-sm">Find us on social media</h3>
                <div className="flex items-center gap-4 mt-4">
                  {hoverLinks.map((item, index) => (
                    <div
                      key={index}
                      onMouseOver={() => setHoverIndex(index)}
                      onMouseOut={() => setHoverIndex(null)}
                      className="w-10 h-10 p-[13px] rounded-full border border-[#fff] cursor-pointer hover:bg-white"
                    >
                      <Link href={item.link} target="blank" aria-label={`Visit our ${item.title}`}>
                        <Image
                          src={
                            hoverIndex === index
                              ? item.image_inverted
                              : item.image
                          }
                          alt={`Link to ${item.title}`}
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:flex items-center gap-2 md:mt-10 h-full w-full">
                <Link
                  href="https://www.cqc.org.uk/location/1-17708997775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2"
                  aria-label="Contact us at CQC" // Added aria-label for clarity
                >
                  <Image src={logo_Link1} alt="Footer Logo Link 1" className="w-[100px]" /> {/* Updated alt text */}
                  <Image
                    src={footer_logo2}
                    alt="Footer Logo" // Updated alt text
                    className="filter brightness-[1] invert-[1] saturate-[0] w-[50px]"
                  />
                </Link>

              </div>
            </div>
          </div>
          <div className="w-full font-Pangram-Regular">
            <div className="grid grid-cols-2 md:flex md:flex-wrap md:gap-[49px] justify-between">
              <div className="flex flex-col gap-10 w-[176px]">
                <div>
                  <h3 className="text-white font-Pangram-Regular  text-xl">
                    Quick Links
                  </h3>
                  {quickLinks.map((item) => (
                    <Link key={item.href} href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex-1 md:mt-0 mt-8">
                <h3 className="text-white font-Pangram-Regular text-xl mb-5">
                  Opening Hours
                </h3>
                <div className="grid grid-cols-2 gap-8 text-sm text-[#A2A2A2] font-Pangram-Regular">
                  <div className="space-y-5">
                    <p>Sunday</p>
                    <p>Monday</p>
                    <p>Tuesday</p>
                    <p>Wednesday</p>
                    <p>Thursday</p>
                    <p>Friday</p>
                    <p>Saturday</p>
                  </div>
                  <div className="space-y-5">
                    <p>Closed</p>
                    <p>Closed</p>
                    <p>9am - 5pm</p>
                    <p>Closed</p>
                    <p>9am - 5pm</p>
                    <p>9am - 5pm</p>
                    <p>9am - 5pm</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 w-[176px] md:mt-0 mt-8 flex-1">
                <div>
                  <h3 className="text-white   font-Pangram-Regular text-xl">Legal</h3>
                  {legalLinks.map((item) => (
                    <Link key={item.href} href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex-1 md:mt-0 mt-8">
                <h3 className="text-white mt-7 md:mt-0 font-Pangram-Regular text-xl">Our Info</h3>
                <a
                  href="mailto:info@do.co.uk"
                  className="text-sm text-[#A2A2A2] font-Pangram-Regular cursor-pointer hover:text-white transition-colors mt-5 flex items-center gap-2"
                >
                  <Image src={letter_icon} alt="" />
                  <span className="font-Pangram-Regular">info@do.co.uk</span>
                </a>
                <a
                  href="tel:+441212729229"
                  className="text-sm text-[#A2A2A2] font-Pangram-Regular cursor-pointer hover:text-white transition-colors mt-5 flex items-center gap-2"
                >
                  <Image src={phone_icon} alt="" />
                  <span className="font-Pangram-Regular">0121 272 9229</span>
                </a>
                <a
                  href="https://wa.me/+447301253447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A2A2A2] font-Pangram-Regular cursor-pointer hover:text-white transition-colors mt-5 flex items-center gap-2"
                >
                  <Image src={whatsapp_icon_mini} alt="" />
                  <span className="font-Pangram-Regular">+447301253447</span>
                </a>
                <a
                  href="https://maps.google.com/?q=1190+Stratford+Rd,+Birmingham+B28+8AB,+United+Kingdom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A2A2A2] font-Pangram-Regular cursor-pointer hover:text-white transition-colors mt-5 flex items-start gap-2"
                >
                  <Image src={location_icon} alt="" />
                  <span className="font-Pangram-Regular">
                    1190 Stratford Rd,
                    <br /> Birmingham B28 8AB,
                    <br /> United Kingdom
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm font-light  font-Pangram-Regular max-w-[788px] mx-auto text-white mt-[140px] mb-[40px]">
          Copyright © {new Date().getFullYear()} John Clive Industries Ltd.
          Registered in England and Wales, UK. All rights reserved. Website
          Developed by Lintech Group
        </p>
      </div>
    </div>
  );
};

export default Footer;
