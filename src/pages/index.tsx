import dynamic from "next/dynamic";
import {
  Layout,
  Navbar,
  HomePopularServices,
  HomeOurServicesHeader,
  HomeChangeLife,
  OurResult,
  TestimonyComp,
  Faq,
  Footer,
  CompositeBondingHowLong,
} from "../components/import";
import HomeBlogSection from "../components/compound/HomeBlogSection";
import { faq } from "../../constants";
import Head from "next/head"; // Add this import

// Dynamic imports for lazy loading
const HomeHero = dynamic(() => import("../components/compound/HomeHero"));
const HomeAwards = dynamic(() => import("../components/compound/HomeAwards"));
const HomeHero2 = dynamic(() => import("../components/compound/HomeHero2"));
const HomeOurServices = dynamic(
  () => import("../components/compound/HomeOurServices")
);
const HomePeopleSlider = dynamic(
  () => import("../components/compound/HomePeopleSlider")
);
const HomePeopleSlider2 = dynamic(
  () => import("../components/compound/HomePeopleSlider2")
);

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Cosmetic & Private Dentist in Hall Green, Birmingham | Dental Opulence</title>
          <meta
            name="description"
            content="Dentist Hall Green – Visit Dental Opulence for cosmetic and private dentistry in Hall Green, Birmingham providing modern care, from routine check-ups to smile makeovers, in a relaxing setting."
          />
          <meta name="keywords" content="Dentist Hall Green, Cosmetic dentist Hall Green, Private dentist Birmingham, Dental clinic Hall Green" />
          <link rel="canonical" href="https://www.do.co.uk/" />
          <meta property="og:title" content="Cosmetic & Private Dentist in Hall Green, Birmingham | Dental Opulence" />
          <meta property="og:description" content="Dentist Hall Green – Visit Dental Opulence for cosmetic and private dentistry in Hall Green, Birmingham providing modern care, from routine check-ups to smile makeovers, in a relaxing setting." />
          <meta property="og:url" content="https://www.do.co.uk/" />
          <meta property="og:type" content="website" />
        </Head>
        <Navbar />
        <HomeHero />
        <HomeAwards />
        <HomeHero2 />
        <HomePeopleSlider />
        <HomePopularServices />
        <HomeOurServicesHeader />
        <HomeOurServices />
        <HomeChangeLife />
        <CompositeBondingHowLong />
        <OurResult />
        <TestimonyComp />
        {/* <OurProcess /> */}
        <HomeBlogSection />
        <Faq faqList={faq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    </>
  );
}
