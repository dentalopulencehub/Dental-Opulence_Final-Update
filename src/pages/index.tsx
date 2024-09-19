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
          <title>Home</title>
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
        <Faq faqList={faq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    </>
  );
}
