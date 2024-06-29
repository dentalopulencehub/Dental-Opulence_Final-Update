import React, { useState } from 'react';
import VideoTestimonialStrokeLine from './videoTestimonialStrokeLine';
import VideoCard from './videoCard';


// Define videos with specific paths and titles
const videos = {
    all: [
        { src: `/videoTestimonials/All/video1.mp4`, title: `Composite Veneers`, rating: 5 },
        { src: `/videoTestimonials/All/video2.mp4`, title: `Composite Edge Bonding`, rating: 5 },
        { src: `/videoTestimonials/All/video3.mp4`, title: `Composite Veneers`, rating: 5 },
        { src: `/videoTestimonials/All/video4.mp4`, title: `Porcelain veneers`, rating: 5 },
        { src: `/videoTestimonials/All/video5.mp4`, title: `Edge Bonding For Two Teeth`, rating: 5 },
        { src: `/videoTestimonials/All/video6.mp4`, title: `Composite Veneers`, rating: 5 },
        { src: `/videoTestimonials/All/video7.mp4`, title: `Composite Veneers`, rating: 5 },
        { src: `/videoTestimonials/All/video8.mp4`, title: `Edge Bonding`, rating: 5 },
        { src: `/videoTestimonials/All/video9.mp4`, title: `Edge Bonding`, rating: 5 },
        { src: `/videoTestimonials/All/video10.mp4`, title: `Edge Bonding`, rating: 5 },
        { src: `/videoTestimonials/All/video11.mp4`, title: `Edge Bonding`, rating: 5 },
        { src: `/videoTestimonials/All/video12.mp4`, title: `Edge Bonding`, rating: 5 },
        { src: `/videoTestimonials/All/video13.mp4`, title: `Edge Bonding`, rating: 5 },
        { src: `/videoTestimonials/All/video14.mp4`, title: `Composite Veneers`, rating: 5 },
        { src: `/videoTestimonials/All/video15.mp4`, title: `Edge Bonding`, rating: 5 },
      ],

  reactions: [
    { src: `/videoTestimonials/REACTIONS/video1.mp4`, title: `Composite Veneers`, rating: 5 },
    { src: `/videoTestimonials/REACTIONS/video2.mp4`, title: `Composite Edge Bonding`, rating: 5 },
    { src: `/videoTestimonials/REACTIONS/video3.mp4`, title: `Composite Veneers`, rating: 5 },
    { src: `/videoTestimonials/REACTIONS/video4.mp4`, title: `Porcelain veneers`, rating: 5 },
    { src: `/videoTestimonials/REACTIONS/video5.mp4`, title: `Edge Bonding For Two Teeth`, rating: 5 },
    { src: `/videoTestimonials/REACTIONS/video6.mp4`, title: `Composite Veneers`, rating: 5 },
  ],



  before: [
    { src: `/videoTestimonials/BeforeAfter/video1.mp4`, title: `Edge Bonding For Two Teeth`, rating: 5 },
    { src: `/videoTestimonials/BeforeAfter/video2.mp4`, title: `Composite Veneers`, rating: 5 },
    { src: `/videoTestimonials/BeforeAfter/video3.mp4`, title: `Composite Veneers`, rating: 5 },
    { src: `/videoTestimonials/BeforeAfter/video4.mp4`, title: `Edge Bonding`, rating: 5 },
    { src: `/videoTestimonials/BeforeAfter/video5.mp4`, title: `Edge Bonding`, rating: 5 },
    { src: `/videoTestimonials/BeforeAfter/video6.mp4`, title: `Edge Bonding`, rating: 5 },
    { src: `/videoTestimonials/BeforeAfter/video7.mp4`, title: `Edge Bonding`, rating: 5 },
    { src: `/videoTestimonials/BeforeAfter/video8.mp4`, title: `Edge Bonding`, rating: 5 },
    { src: `/videoTestimonials/BeforeAfter/video9.mp4`, title: `Edge Bonding`, rating: 5 },
    { src: `/videoTestimonials/BeforeAfter/video10.mp4`, title: `Composite Veneers`, rating: 5 },
    { src: `/videoTestimonials/BeforeAfter/video11.mp4`, title: `Porcelain veneers`, rating: 5 },
  ],
};

const VideoGallary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'reactions' | 'before'>('all');

  return (
    <div className="bg-[#100E10] lg:px-[100px] sm:px-[40px] px-[20px]">
      <div className="text-[#fff] container">
        <div>
          <VideoTestimonialStrokeLine />
        </div>
        <div className="flex justify-between gap-4 w-full py-7">
          {['all', 'reactions', 'before'].map((category) => (
            <button
              key={category}
              className={`w-full py-3 ${
                activeCategory === category
                  ? 'bg-white text-black text-[16px] font-[500]'
                  : 'bg-[#383638] text-[#AFAFAF] text-[16px] font-[500]'
              } rounded-full shadow`}
              onClick={() => setActiveCategory(category as 'all' | 'reactions' | 'before')}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="mb-14">
          <VideoTestimonialStrokeLine />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos[activeCategory].map((video, index) => (
            <VideoCard key={index} videoSrc={video.src} title={video.title} rating={video.rating} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallary;


