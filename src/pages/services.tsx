import {
  Footer,
  Layout,
  ServiceHero,
  ServiceAward,
  ServiceHero2,
  ServiceHero3,
  ServiceCompositeBonding,
  ServiceElevate,
  ServiceTransform,
  CompositeBondingHowLong,
  HomeOurServices,
  TestimonyComp,
  OurProcess,
  Faq,
  HomePeopleSlider,
  Navbar,
} from "../components/import";

export default function Services() {
  return (
    <Layout>
      <Navbar />
      <ServiceHero />
      <ServiceAward />
      <ServiceHero2 />
      <ServiceHero3 />
      <ServiceCompositeBonding />
      <ServiceElevate />
      <ServiceTransform />
      <CompositeBondingHowLong />
      <HomeOurServices />
      <TestimonyComp />
      <OurProcess />
      <Faq />
      <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
