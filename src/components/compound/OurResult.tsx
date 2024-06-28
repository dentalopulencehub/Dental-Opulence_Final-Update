import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import underline_vector_dark from "../../../assets/images/underline-vector-dark.svg";
import SecondaryLink from "../atom/SecondaryLink";
import { home_result_images, testimonial } from "../../../constants";
import { ResultCard } from "../molecule";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { TestimonyCard } from "../molecule";
import { DotButton } from "../atom/DotButton";

import result_sample_image1 from "../../../assets/images/result-image-sample1.svg";
import result_sample_video1 from "../../../assets/images/result-video-sample1.svg";

const OurResult = () => {
  const [linkHover, setLinkHover] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="w-full">
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[20px] bg-white">
        
        <div className="flex justify-between items-start">
          <div>
            <p className="flex flex-col">
              <span className="text-[#4e4e4e] text-base font-Pangram-Regular">
                Our Result
              </span>
              <Image src={underline_vector_dark} alt="" />
            </p>
            <h2 className="mt-4 text-[#100E10] text-[32px] leading-[38px] font-Pangram-Bold xs:w-[412px] w-full">
              Demand meets excellence at Dental Opulence.
            </h2>
          </div>

          <div className="md:block hidden">
            <SecondaryLink
              href="#"
              title="See All"
              style="border border-[#100E10] hover:bg-[#100E10] hover:text-white flex flex-row gap-3 items-center justify-center rounded-[32px] w-[173px] h-[56px] duration-0"
              hovered={linkHover}
              setHovered={setLinkHover}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mt-10">
          {home_result_images.map((data, index) => (
            <ResultCard key={index} image={data} />
          ))}
        </div>

        {/*  <div className="relative" >
          <div className="embla">
            <div
              className="embla__viewport bg-[#F8F8F8] rounded-xl md:px-10 sm:px-5 px-4 md:py-[56px] py-[30px] mt-20 "
              ref={emblaRef}
            >
              <div className="embla__container">
                {testimonial.map((data, index) => (
                  <TestimonyCard key={index} {...data} />
                ))}
              </div>
            </div>
          </div>
          <div className="embla__dots">
            {scrollSnaps.map((_, index: any) => (
              <DotButton
                key={index}
                onClick={() => scrollTo(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OurResult;


{/* 
 <video
            autoPlay={true}
            loop
           
            height="483"
            className="rounded-[20px] w-fit"
            id="video1"
            playsInline
            muted
          >
            <source src={`/videos/BULLSTACKNOTXT.mp4`} type="video/mp4" />
            <source src="example.webm" type="video/webm" />
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
*/}