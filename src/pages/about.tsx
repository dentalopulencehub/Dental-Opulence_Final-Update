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
  Footer
} from "../components/import";

export default function Home() {
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
