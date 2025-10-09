import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { fixedRetainersFaq, serviceCompositeBonding_FixedRetainers, serviceElevet_FixedRetainers, serviceHero2Desc_FixedRetainers } from "../../../../constants";
import { 
    Layout,
    Navbar,
    ServiceAward ,
    ServiceHero2,

    ServiceCompositeBonding,
    ServiceElevate,
    ServiceTransform,
    CompositeBondingHowLong,
    ServiceOurService,
    TestimonyComp,
    OurProcess,
    Faq, 
    HomePeopleSlider,
    Footer,
    

} from "../../../components/import";
import CosmaticWalkThrough from "../reuseable/cosmaticWalkThrough";
import FixedRetainersHero from "./FixedRetainersSection/FixedRetainersHero";
import FixedRetainersVideo from "./FixedRetainersSection/FixedRetainersVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import Head from "next/head";




  export default function invisalign() {
    return (
      <Layout>
        <Head>
          <title>Fixed Retainers Hall Green | Permanent Retainers | Dental Opulence</title>
          <meta
            name="description"
            content="At Dental Opulence, our Fixed Retainers in Hall Green provide permanent teeth retention solutions after orthodontic treatment to maintain your straight smile. Book today!"
          />
          <meta name="keywords" content="Fixed retainers Hall Green, Permanent retainers Birmingham, Orthodontic retainers Hall Green, Teeth retention Hall Green" />
          <link rel="canonical" href="https://www.do.co.uk/services/cosmeticTreatment/fixed-retainers" />
        </Head>
        <Navbar />
        <FixedRetainersHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_FixedRetainers} />
        <FixedRetainersVideo/> 
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_FixedRetainers} />
        <ServiceElevate service_elevate={serviceElevet_FixedRetainers}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={fixedRetainersFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  