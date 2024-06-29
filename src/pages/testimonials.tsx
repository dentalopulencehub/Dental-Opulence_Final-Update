import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  CaseHero,
  CaseSelectOptions,
  CaseSelectedImages,
  HomePeopleSlider,
  Footer,
} from "../components/import";
import VideoTestimonials from "@/components/compound/videoTestimonials";
import VideoTestimonialStrokeLine from "@/components/compound/videoTestimonialStrokeLine";
import VideoTestHero from "@/components/compound/videoTestHero";

export default function Cases() {
  return (
    <Layout>
      <Navbar />
      <VideoTestHero />
      
     <VideoTestimonialStrokeLine/>  
      
     <VideoTestimonials/>


      {/* <CaseSelectOptions /> */}
      {/* <CaseSelectedImages />
      <HomePeopleSlider /> */}
      <Footer />
    </Layout>
  );
}
