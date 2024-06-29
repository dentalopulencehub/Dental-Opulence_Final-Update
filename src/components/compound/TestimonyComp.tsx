'use client'
import React from 'react'

import Carousel from '../atom/carousel'
import GoogleCard from '../molecule/GoogleCard'


import underline_vector from "../../../assets/fonts/underlineBlackStoke.svg";
import reaction_right_arrow from "../../../assets/fonts/reaction-arrow-right.svg";

import Image from 'next/image'
import Link from 'next/link';



const TestimonyComp = () => {
    const reviews = [
    {
      name: 'LUIS HASANAJ (Entrepreneur)',
      rating: '5.0',
      comment:
        'I wasn’t very confident with my teeth until I met Dr Ali and the team at Dental Opulence. My smile was transformed giving me a new-found spring in my step. I cannot stop smiling, quite literally. The service and execution was second to none.',
    },
    {
      name: 'MANUEL LANZINI (Footballer)',
      rating: '5.0',
      comment:
        'My experience at Dental Opulence was remarkable. The clinic combines art and science. I visited for a smile makeover, a decision I would considered for months. The calming ambiance, modern decor, and soothing colors made the visit memorable.',
    },
    {
      name: 'MANUEL LANZINI (Footballer)',
      rating: '5.0',
      comment:
        'My experience at Dental Opulence was remarkable. The clinic combines art and science. I visited for a smile makeover, a decision I would considered for months. The calming ambiance, modern decor, and soothing colors made the visit memorable.',
    },
    // {
    //   name: 'Z EL-HAFFAR',
    //   rating: '5.0',
    //   comment:
    //     'As a family we have used this law firm for many years which we ALL highly recommend. Excellent communication, very friendly and always aim to do their very best for their clients. A* service.',
    // },
  ]
  return (
    <div className="md:container mx-auto  md:px-14 px-5  mb-[9.44rem] md:mt-20 mt-14">

     <div>
         <p className="">
           <span className="text-[#000] font-Pangram-Regular text-[16px] font-[500]">Online Reviews</span>
           <Image src={underline_vector} alt="underline_vector" />
          </p>

        <div className='md:flex justify-between items-center'>
         <p className="md:text-[34px] text-[28px] font-encode font-[700] mt-3 leading-[42px]">
           Your Reliable Dentist for <br/>Optimal Oral Health
         </p>
         <div className='border border-[#100E10] rounded-full md:mt-0 mt-6'> 
           <Link href={'/testimonials'} className='flex gap-3 items-center  px-7 py-2 '>
             <button className='text-[16px] font-[500]'>See Client Reactions</button> 
             <Image src={reaction_right_arrow} alt='reaction_right_arrow' className='mt-[1px]'/>
           </Link>
         </div>
        </div> 

     </div>

    
      <Carousel className="md:mt-[3.25rem] mt-[2rem]">
        <div
          className={`max-w-[309px] flex-shrink-0 w-full md:max-w-[28.0625rem] mr-[2rem]`}
        >
          <GoogleCard />
        </div>
        {reviews.map((review, i, arr) => (
          <div
            key={i}
            className={`max-w-[309px] flex-shrink-0 w-full md:max-w-[28.0625rem] ${
              i !== arr.length - 1 ? 'mr-[2rem]' : ''
            }`}
          >
            <div className=" md:pt-[3.75rem] pt-[1.4rem] card pb-[4.19rem] w-full md:min-h-[35rem] min-h-[26rem] md:px-12 px-6 rounded-[1.25rem] bg-black flex flex-col justify-between">
              <div>
                <p className=" text-white font-encode font-medium md:text-3xl text-2xl">
                  {review.rating}
                </p>
                <p className="md:mt-[2.87rem] mt-[1.7rem] font-[400] text-white md:text-[20px] text-[16px]">
                  {review.comment}
                </p>
              </div>
              <p className=" text-white font-[700] md:text-[24px] text-[18px]">{review.name}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default TestimonyComp









// import { EmblaCarouselType } from "embla-carousel";
// import Autoplay from "embla-carousel-autoplay";
// import useEmblaCarousel from "embla-carousel-react";
// import { useCallback, useEffect, useState } from "react";
// import { testimonial } from "../../../constants";
// import { DotButton } from "../atom/DotButton";
// import { TestimonyCard } from "../molecule";
// import { useRouter } from "next/router";

// const TestimonyComp = () => {
//   const { pathname } = useRouter();

//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
//   const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const onInit = useCallback((emblaApi: EmblaCarouselType) => {
//     setScrollSnaps(emblaApi.scrollSnapList());
//   }, []);

//   const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, []);

//   const scrollTo = useCallback(
//     (index: number) => emblaApi && emblaApi.scrollTo(index),
//     [emblaApi]
//   );

//   useEffect(() => {
//     if (!emblaApi) return;

//     onInit(emblaApi);
//     onSelect(emblaApi);
//     emblaApi.on("reInit", onInit);
//     emblaApi.on("reInit", onSelect);
//     emblaApi.on("select", onSelect);
//   }, [emblaApi, onInit, onSelect]);

//   return (
//     <div
//       className={` w-full`}
//     >
//       <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] pb-[80px] bg-white">
//         <div className="relative">
//           <div className="embla">
//             <div
//               className="embla__viewport bg-[#F8F8F8] rounded-xl md:px-10 sm:px-5 px-4 md:py-[56px] py-[30px] mt-20 "
//               ref={emblaRef}
//             >
//               <div className="embla__container">
//                 {testimonial.map((data, index) => (
//                   <TestimonyCard key={index} {...data} />
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="embla__dots">
//             {scrollSnaps.map((_, index: any) => (
//               <DotButton
//                 key={index}
//                 onClick={() => scrollTo(index)}
//                 className={"embla__dot".concat(
//                   index === selectedIndex ? " embla__dot--selected" : ""
//                 )}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonyComp;








