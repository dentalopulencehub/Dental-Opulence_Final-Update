import React, { useState, useRef, useContext } from "react";
import videoPlayButton from "../../../../assets/videoPlayButton/videoPlayButton.svg";
import Image from "next/image";
import PrimaryLink from "@/components/atom/PrimaryLink";



const PatientWalkThrough = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);



  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex flex-col items-center justify-between sm:gap-[64px] gap-[37px]">
        <h2 className="text-[#100E10] sm:text-[34px] text-[26px] font-normal font-Pangram-Medium md:w-[650px] text-center w-full">
          Discover Your Perfect Smile at Dental Opulence
        </h2>
        <div className="relative mx-auto my-4">
          <video
            ref={videoRef}
            className="object-cover rounded-2xl w-full h-full opacity-1"
            onClick={handleVideoClick}
            playsInline
          >
            <source src="/videos/walkThrough/patientWalkThoroughCompressed.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div
              className="absolute inset-0 flex justify-center items-center cursor-pointer"
              onClick={handleVideoClick}
            >
              <Image src={videoPlayButton} alt="videoPlayButton" />
            </div>
          )}
        </div>
        <PrimaryLink
          href="/contact"
          title="Book Free Consultation Now"
          style="py-4 px-8 rounded-[34px] w-fit text-white bg-[#100E10] font-Pangram-Medium text-xs mt-6 hover:text-[#100E10] hover:bg-transparent border border-transparent hover:border-[#100E10] duration-0"
        />
      </div>
    </div>
  );
};

export default PatientWalkThrough;
