import { useLayoutEffect } from "react";
import {
  Layout,
  Navbar,
  AboutHero,
  AboutAwardSection,
  AboutVideoSection,
  AboutPageAboutSection,
  AboutWhoWeAre,
  TestimonyComp,
  Faq,
  HomePeopleSlider,
  Footer,
} from "../components/import";
import { gsap, ScrollTrigger } from "../../lib/gsap";

export default function Home() {
  useLayoutEffect(() => {
    let ctx: any = gsap.context(() => {
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

    return () => {
      ctx.revert();

      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <Layout>
      <Navbar />
      <AboutHero />
      <AboutAwardSection />
      <AboutVideoSection />
      <AboutPageAboutSection />
      <AboutWhoWeAre />
      <TestimonyComp />
      <Faq />
      <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
