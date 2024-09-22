import React, { lazy, Suspense, memo } from "react"; // Lazy loading
import Image from "next/image";
import { home_awards_images, homer_awards_images2 } from "../../../constants";
import Marquee from "react-fast-marquee";

// Memoize the Image component to prevent unnecessary re-renders
const MemoizedImage = memo(({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    className="ml-[10px] w-[120px]"
    loading="lazy"
  />
));

// Set the displayName for debugging purposes
MemoizedImage.displayName = "MemoizedImage";

const HomeAwards = () => {
  const repeatedAwards = Array.from({ length: 100 }, (_, index) => (
    homer_awards_images2.map((award, i) => (
      <MemoizedImage
        key={`${index}-${i}`} 
        src={award}
        alt={`Award ${index * homer_awards_images2.length + i}`} 
      />
    ))
  )).flat(); 

  // Inline critical CSS
  const criticalStyles = `
    .marquee {
      display: flex;
      overflow: hidden;
      white-space: nowrap;
    }
  `;

  return (
    <div className="w-full">
      <style>{criticalStyles}</style> {/* Inlined critical CSS */}
      <div className="bg-[#100E10] w-full py-[120px]">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex relative">
            <Marquee className="marquee" speed={60} direction="left">
              {repeatedAwards}
            </Marquee>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default HomeAwards;
