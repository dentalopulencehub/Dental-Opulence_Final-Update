import { useLayoutEffect } from "react";
import {
  Layout,
  Navbar,
  AboutHero,
  HomeAwards,
  AboutAwardSection,
  AboutVideoSection,
  AboutTeam,
  AboutPageAboutSection,
  AboutWhoWeAre,
  TestimonyComp,
  Faq,

  AboutMissionVision,
  CompositeBondingHowLong,
  Footer,
} from "../components/import";
import { gsap, ScrollTrigger } from "../../lib/gsap";
import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { aboutFaq, faq } from "../../constants";
import OurGallery from "@/components/compound/OurGallery";
import Head from "next/head";

export default function Home() {
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    let ctx: any = gsap.context(() => {
      mm.add("(min-width: 1280px)", () => {
        gsap.to(".elem-pin-about", {
          scrollTrigger: {
            trigger: ".elem-pin-about",
            start: () => `top 14%`,
            end: () => `+=300`,
            pin: true,
            pinSpacing: false,
          },
        });
      });
    });

    return () => {
      ctx.revert();

      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <AboutHero />
      <HomeAwards />
     {/*  <AboutAwardSection />
      <AboutVideoSection /> */}
      <AboutPageAboutSection />
      <AboutMissionVision />
      <AboutTeam />
      <OurGallery />
     {/*  <AboutWhoWeAre /> */}
      <TestimonyComp />
      
      <Faq faqList={aboutFaq} />
      <HomePeopleSlider2 />
      <Footer />
    </Layout>
  );
}
