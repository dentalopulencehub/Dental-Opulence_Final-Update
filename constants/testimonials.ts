import { TestimonialType, TestiVideoStudyTypeProp } from "../types";

import manuel_lanzini from "../assets/images/manuel-lanzini.svg";
import luis_image from "../assets/images/luis-image.svg";

export const testimonial: TestimonialType[] = [
  {
    name: "Manuel Lanzini (Professional Footballer)",
    testimony:
      "My experience at Dental Opulence was nothing short of remarkable. This clinic isn't just a place for dental treatment; it's where art meets science. I went in for a smile makeover, a decision that I had been pondering over for months. From the moment I stepped in, the ambiance set a calming tone, with its modern decor and soothing colors.",
    profilePicture: manuel_lanzini,
  },
  {
    name: "Luis Hasanaj (Entrepreneur)",
    testimony:
      "I wasn't very confident with my teeth until I met Dr Ali and the team at Dental Opulence. My smile was transformed giving me a new-found spring in my step. I cannot stop smiling, quite literally. The service and execution was second to none.",
    profilePicture: luis_image,
  },
  {
    name: "Manuel Lanzini (Professional Footballer)",
    testimony:
      "My experience at Dental Opulence was nothing short of remarkable. This clinic isn't just a place for dental treatment; it's where art meets science. I went in for a smile makeover, a decision that I had been pondering over for months. From the moment I stepped in, the ambiance set a calming tone, with its modern decor and soothing colors.",
    profilePicture: manuel_lanzini,
  },
];

export const testi_video_studies: TestiVideoStudyTypeProp[] = [
  {
    type: "all",
    name: "All",
    videos: [
      "/videoTestimonials/All/COMPOSITEVENEERS-2.mp4",
      "/videoTestimonials/All/EDGEBONDING-1.mp4",
      "/videoTestimonials/All/EDGEBONDING-2.mp4",
      "/videoTestimonials/All/EDGEBONDING-5.mp4",
      "/videoTestimonials/All/EDGEBONDING-6.mp4",
      "/videoTestimonials/All/EDGEBONDING-7.mp4",
      "/videoTestimonials/All/PORCELAINVENEER-1.mp4",
      // cases_all_img8,
      // cases_all_img9,
      // cases_all_img10,
      // cases_all_img11,
      // cases_all_img12,
      // cases_all_img13,
      // cases_all_img14,
      // cases_all_img15,
      // cases_all_img16,
    ],
  },
  {
    type: "reactions",
    name: "Reactions",
    videos: [
      "/videoTestimonials/All/COMPOSITEVENEERS-2.mp4",
      "/videoTestimonials/All/EDGEBONDING-1.mp4",
      "/videoTestimonials/All/EDGEBONDING-2.mp4",
      "/videoTestimonials/All/EDGEBONDING-5.mp4",
    ],
  },
  {
    type: "before_&_after",
    name: "Before & After ",
    videos: [
      "/videoTestimonials/All/COMPOSITEVENEERS-2.mp4",
      "/videoTestimonials/All/EDGEBONDING-1.mp4",
    ],
  },
];
