"use client";
import React, { useRef, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import pen_icon from "../../../../assets/images/pen-icon.svg";
import { gsap } from "../../../../lib/gsap";
import { NavigationLoader } from "../../molecule";
import { GlobalContext } from "../../../../context/GlobalContext";
import { handleSetPathToNavigate } from "../../../../context/action";
import tr_radius from "../../../../assets/images/Dental Opulence (1)/Vector-1.svg";
import bl_radius from "../../../../assets/images/Dental Opulence (1)/Vector-2.svg";
import br_radius from "../../../../assets/images/Dental Opulence (1)/Vector-3.svg";
import tl_radius from "../../../../assets/images/Dental Opulence (1)/Vector.svg";

import contact_info_button from "../../../../assets/contact_icons/contact_info_icon.svg";
import contact_cross_button from "../../../../assets/contact_icons/contact_cross_icon.svg";
import contact_page_button from "../../../../assets/contact_icons/contact_info_icon.svg";
import whatsapp_icon from "../../../../assets/contact_icons/whatsAppIcon.svg";
import call_icon from "../../../../assets/contact_icons/call_icon.svg";

import messageIcon from "../../../../assets/contact_icons/messageIcon.svg";

import contact_pen_icon from "../../../../assets/contact_icons/contact_pen_icon.svg";

interface Props {
  children: React.ReactNode;
}

// const Index = ({ children }: Props) => {
//   const { dispatch, menuOpen } = useContext(GlobalContext);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const tl: any = useRef(null);

//   const toggleExpanded = () => {
//     setIsExpanded(!isExpanded);
//   };

//   useGSAP(() => {
//     tl.current = gsap.timeline({ paused: true });
//     gsap.set(".contact-icon", { scale: 0.6 });

//     let contact_icon = document.querySelector(".contact-icon");

//     function learnMoreHover() {
//       tl.current.to(contact_icon, 0.3, {
//         scale: 1,
//         duration: 0.3,
//         ease: "back",
//       });
//       return tl.current;
//     }

//     contact_icon?.addEventListener("mouseover", () => {
//       learnMoreHover().play();
//     });

//     contact_icon?.addEventListener("mouseleave", () => {
//       learnMoreHover().reverse();
//     });

//     return () => {
//       contact_icon?.removeEventListener("mouseover", () => {
//         learnMoreHover().play();
//       });

//       contact_icon?.removeEventListener("mouseleave", () => {
//         learnMoreHover().reverse();
//       });
//     };
//   }, []);

//   return (
//     <main
//       className={`sticky show-scrollbar`}
//     >
//       {/* <main className="fixed bg-white rounded-[24px] z-[700] w-full top-0 left-0 ">
//         <div className="fixed bg-white w-screen h-[5px] top-0" />
//         <Image src={tr_radius} className="fixed top-[5px] right-[5px]" alt="" />
//         <Image src={bl_radius} className="fixed bottom-[5px] left-[5px]" alt="" />
//         <Image src={br_radius} className="fixed bottom-[5px] right-[5px]" alt="" />
//         <Image src={tl_radius} className="fixed top-[5px] left-[5px]" alt="" />

//         <div className="fixed bg-white w-[5px] h-screen left-0 " />

//         <div className="fixed bg-white w-[5px] h-screen right-0 " />
//         <div className="fixed bg-white w-screen h-[5px] bottom-0 " />
//       </main> */}

//       <main className="relative w-[calc(100%)] mx-auto rounded-[24px] z-[690]">
//         {children}
//         <div className="fixed sm:bottom-10 bottom-3 right-[10px]">
//           {isExpanded && (
//             <div className="flex flex-col items-center space-y-2 mb-1">
//               <Link href="tel:+441212729229" target="blank">
//                 <Image
//                   className="w-[45px] h-[45px] cursor-pointer bg-[#000] rounded-full"
//                   src={call_icon}
//                   alt="Call Icon"
//                 />
//               </Link>
//               <Link href="https://wa.me/+447301253447" target="blank">
//                 <Image
//                   className="w-[45px] h-[45px] cursor-pointer bg-[#000] rounded-full"
//                   src={whatsapp_icon}
//                   alt="WhatsApp Icon"
//                 />
//               </Link>
//               <Link href="/contact">
//                 <Image
//                   className="w-[45px] h-[45px] cursor-pointer bg-[#000] rounded-full"
//                   src={messageIcon}
//                   alt="Contact Icon"
//                 />
//               </Link>
//             </div>
//           )}
//           <Image
//             className="w-[86px] h-[86px] contact-icon cursor-pointer "
//             src={isExpanded ? contact_cross_button : contact_pen_icon}
//             alt="floating contact page button"
//             onClick={toggleExpanded}
//           />
//         </div>

//       </main>
//     </main>
//   );
// };

// export default Index;

const Index = ({ children }: Props) => {
  const { dispatch, menuOpen } = useContext(GlobalContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLeftExpanded, setIsLeftExpanded] = useState(false); // New state for left button
  const [isMounted, setIsMounted] = useState(false);
  const tl: any = useRef(null);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleLeftExpanded = () => {
    setIsLeftExpanded(!isLeftExpanded); // Toggle left button
    if (!isLeftExpanded) {
      window.open("https://book.do.co.uk/");
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // const toggleLeftExpanded = () => {
  //   setIsLeftExpanded(!isLeftExpanded); // Toggle left button

  // };

  useGSAP(() => {
    if (!isMounted) return;

    tl.current = gsap.timeline({ paused: true });
    gsap.set(".contact-icon, .left-contact-icon", { scale: 1 });

    let contact_icon = document.querySelector(".contact-icon");
    let left_contact_icon = document.querySelector(".left-contact-icon");

    function learnMoreHover(iconClass: string) {
      tl.current.to(iconClass, 0.2, {
        scale: 1.1,
        duration: 0.2,
        ease: "power2.out",
      });
      return tl.current;
    }

    contact_icon?.addEventListener("mouseover", () => {
      learnMoreHover(".contact-icon").play();
    });

    contact_icon?.addEventListener("mouseleave", () => {
      learnMoreHover(".contact-icon").reverse();
    });

    left_contact_icon?.addEventListener("mouseover", () => {
      learnMoreHover(".left-contact-icon").play();
    });

    left_contact_icon?.addEventListener("mouseleave", () => {
      learnMoreHover(".left-contact-icon").reverse();
    });

    return () => {
      contact_icon?.removeEventListener("mouseover", () => {
        learnMoreHover(".contact-icon").play();
      });
      contact_icon?.removeEventListener("mouseleave", () => {
        learnMoreHover(".contact-icon").reverse();
      });
      left_contact_icon?.removeEventListener("mouseover", () => {
        learnMoreHover(".left-contact-icon").play();
      });
      left_contact_icon?.removeEventListener("mouseleave", () => {
        learnMoreHover(".left-contact-icon").reverse();
      });
    };
  }, [isMounted]);

  return (
    <main className={`sticky show-scrollbar`}>
      <main className="relative w-[calc(100%)] mx-auto rounded-[24px] z-[690]">
        {children}

        {/* Mobile sticky bottom bar with Book now and Call buttons */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[800] bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-lg">
          <div className="flex items-center justify-between gap-2 px-4 py-2">
            <a
              href="https://book.do.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#000000] text-white flex-1 py-2 rounded-full text-sm font-Pangram-Bold hover:bg-[#2f2f2f] transition-colors duration-200 text-center"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/+447301253447"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#222222] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="tel:+441212729229"
              className="bg-[#222222] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#333333] transition-colors duration-200"
              aria-label="Call"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Desktop floating buttons */}
        <div className="hidden lg:flex fixed sm:bottom-10 bottom-3 right-[10px] flex-col items-center space-y-3">
          {/* Book now button */}
          <button
            className="w-[100px] h-[100px] left-contact-icon cursor-pointer bg-[#2f2f2f] rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg"
            onClick={toggleLeftExpanded}
            aria-label="Book now"
          >
            <span className="flex items-center justify-center text-white font-Pangram-Bold text-[15px] leading-tight">
              Book<br/>Now
            </span>
          </button>

          {/* Contact options */}
          {isExpanded && (
            <div className="flex flex-col items-center space-y-2">
              <Link href="tel:+441212729229" target="blank">
                <Image
                  className="w-[45px] h-[45px] cursor-pointer bg-[#000] rounded-full"
                  src={call_icon}
                  alt="Call Icon"
                />
              </Link>
              <Link href="https://wa.me/+447301253447" target="blank">
                <Image
                  className="w-[45px] h-[45px] cursor-pointer bg-[#000] rounded-full"
                  src={whatsapp_icon}
                  alt="WhatsApp Icon"
                />
              </Link>
              <Link href="/contact">
                <Image
                  className="w-[45px] h-[45px] cursor-pointer bg-[#000] rounded-full"
                  src={messageIcon}
                  alt="Contact Icon"
                />
              </Link>
            </div>
          )}

          {/* Contact button */}
          <Image
            className="w-[86px] h-[86px] contact-icon cursor-pointer"
            src={isExpanded ? contact_cross_button : contact_pen_icon}
            alt="floating contact page button"
            onClick={toggleExpanded}
          />
        </div>

        {/* Left bottom button */}
        {/* <div className="fixed sm:bottom-[160px] bottom-[120px] right-[10px]"></div> */}
      </main>
    </main>
  );
};

export default Index;
