import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { serviceCompositeBonding_ViveraRetainers, serviceElevet_ViveraRetainers, serviceHero2Desc_ViveraRetainers, viveraRetainersFaq } from "../../../../constants";
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
import ViveraRetainersHero from "./ViveraRetainersSection/ViveraRetainersHero";
import ViveraRetainersVideo from "./ViveraRetainersSection/ViveraRetainersVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import Head from "next/head";


  export default function ViveraRetainers() {
    return (
      <Layout>
        <Head>
          <title>Vivera Retainers Hall Green | Invisalign Retainers | Dental Opulence</title>
          <meta
            name="description"
            content="At Dental Opulence, our Vivera Retainers in Hall Green provide durable and clear retention solutions after Invisalign treatment to maintain your smile. Book today!"
          />
          <meta name="keywords" content="Vivera retainers Hall Green, Invisalign retainers Birmingham, Clear retainers Hall Green, Orthodontic retention" />
          <link rel="canonical" href="https://www.do.co.uk/services/cosmeticTreatment/vivera-retainers" />
        </Head>
        <Navbar />
        <ViveraRetainersHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_ViveraRetainers} />
        <ViveraRetainersVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_ViveraRetainers} />
        <ServiceElevate service_elevate={serviceElevet_ViveraRetainers}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={viveraRetainersFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  