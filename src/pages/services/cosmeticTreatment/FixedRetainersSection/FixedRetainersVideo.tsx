import React, { useState, useRef } from "react";
import PrimaryLink from "@/components/atom/PrimaryLink";
import videoPlayButton from "../../../../../assets/videoPlayButton/videoPlayButton.svg";
import speakerIcon from "../../../../../assets/speakerIcon/speakerIcon.svg";
import speakerMuteIcon from "../../../../../assets/speakerIcon/speakerMuteIcon.svg";
import Image from "next/image";

const FixedRetainersVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white w-full lg:px-[100px] sm:px-[40px] px-[20px] py-[80px] flex flex-col items-center justify-between sm:gap-[64px] gap-[37px]">
        <h2 className="text-[#100E10] sm:text-[34px] text-[26px] font-normal font-Pangram-Medium md:w-[650px] text-center w-full">
          What You Should Know
          <br /> about Fixed Retainers
        </h2>
        <div className="relative mx-auto my-4 w-full">
          <iframe
            src="https://player.vimeo.com/video/1006678339?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            width="100%"
            height="700"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            title="Fixed Retainers"
          ></iframe>
        </div>
        <PrimaryLink
          href="/contact"
          title="Contact us"
          style="py-4 px-8 rounded-[34px] w-fit text-white bg-[#100E10] font-Pangram-Medium text-xs mt-6 hover:text-[#100E10] hover:bg-transparent border border-transparent hover:border-[#100E10] duration-0"
        />
      </div>
    </div>
  );
};

export default FixedRetainersVideo;
