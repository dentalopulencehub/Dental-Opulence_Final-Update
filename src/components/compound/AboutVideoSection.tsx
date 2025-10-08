import React, { useState, useRef } from "react";
import Image from "next/image";
import videoPlayButton from "../../../assets/videoPlayButton/videoPlayButton.svg";
import speakerIcon from "../../../assets/speakerIcon/speakerIcon.svg";
import speakerMuteIcon from "../../../assets/speakerIcon/speakerMuteIcon.svg";

const AboutVideoSection = () => {
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
    <div className="bg-white sm:px-5 px-2 w-full py-[80px]">
      <div className="relative mx-auto max-w-[1200px] bg-gray-100 rounded-2xl">
        <video
          ref={videoRef}
          className="object-cover rounded-2xl w-full h-full opacity-1"
          onClick={handleVideoClick}
          playsInline
          muted={isMuted}
          preload="metadata"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E"
          onLoadedData={(e) => {
            (e.target as HTMLVideoElement).poster = '';
          }}
        >
          <source src="https://player.vimeo.com/progressive_redirect/playback/1006678002/rendition/1080p/file.mp4?loc=external&signature=f2118c0959b5af3eb77bbbf91b71d5029beeac99866e7113d2e17043f39d36e3" />
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
        <div
          className="absolute bottom-4 left-4 cursor-pointer"
          onClick={toggleMute}
        >
          <Image
            src={isMuted ? speakerMuteIcon : speakerIcon}
            alt="Speaker Icon"
            className="w-10 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutVideoSection;
