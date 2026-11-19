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
import VideoTestimonialSelectOption from "@/components/compound/videoTestimonialSelectOption";
import VideoGallary from "@/components/compound/VideoGallary";
import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import Head from "next/head";

export default function Cases() {
  return (
    <Layout>
      <Head>
        <title>Patient Reviews and Video Testimonials | Dental Opulence</title>
        <meta
          name="description"
          content="Hear from patients treated at Dental Opulence in Hall Green, Birmingham. Watch video testimonials and read reviews of our cosmetic and general dental care."
        />
        <link rel="canonical" href="https://www.do.co.uk/testimonials" />
      </Head>
      <Navbar />
      <VideoTestHero />
      {/* <VideoTestimonialSelectOption/> */}
     {/* <VideoTestimonialStrokeLine/>   */}
      
     {/* <VideoTestimonials/> */}
    <VideoGallary/>

  
    
      {/* <CaseSelectOptions /> */}
      {/* <CaseSelectedImages />
      <HomePeopleSlider /> */}
        <HomePeopleSlider2 />
      <Footer />
    </Layout>
  );
}
