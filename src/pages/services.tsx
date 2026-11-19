import { faq } from "../../constants";
import Head from "next/head";
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
  ServiceOurService
} from "../components/import";

export default function Services() {
  return (
    <Layout>
      <Head>
        <title>Dental Services in Hall Green, Birmingham | Dental Opulence</title>
        <meta
          name="description"
          content="Explore the full range of cosmetic and general dental treatments at Dental Opulence in Hall Green, Birmingham, from check-ups and hygiene to Invisalign, veneers and implants."
        />
        <link rel="canonical" href="https://www.do.co.uk/services" />
      </Head>
      <Navbar />
      <ServiceHero />
      <ServiceAward />
      {/* <ServiceHero2 />
      <ServiceHero3 />
      <ServiceCompositeBonding />
      <ServiceElevate /> */}
      <ServiceTransform />
      <CompositeBondingHowLong />
      <ServiceOurService />
      {/* <HomeOurServices /> */}
      <TestimonyComp />
      <OurProcess />
      <Faq faqList={faq} />
      <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
