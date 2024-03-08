import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { testimonial } from "../../../constants";
import { DotButton } from "../atom/DotButton";
import { TestimonyCard } from "../molecule";
import { useRouter } from "next/router";

const TestimonyComp = () => {
  const { pathname } = useRouter();

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
    <div
      className={` w-full`}
    >
      <div className="w-full lg:px-[100px] sm:px-[40px] px-[20px] pb-[80px] bg-white">
        <div className="relative">
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
        </div>
      </div>
    </div>
  );
};

export default TestimonyComp;
