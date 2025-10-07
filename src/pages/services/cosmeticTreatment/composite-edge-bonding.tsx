import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { compositeEdgeFaq, serviceCompositeBonding_CompositeEdgeBonding, serviceElevet_CompositeEdgeBonding, serviceHero2Desc_CompositeEdgebonding } from "../../../../constants";
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
import CompositeEdgeBondingHero from "./CompositeEdgeBondingSection/CompositeEdgeBondingHero";
import CompositeEdgeBondingVideo from "./CompositeEdgeBondingSection/CompositeEdgeBondingVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import CompositeEdgeBondingOurCases from "./CompositeEdgeBondingSection/OurCases";
import Head from "next/head";




  export default function CompositeEdgeBonding() {
    return (
      <Layout>
        <Head>
          <title>Composite Edge Bonding in Hall Green | Dental Opulence, Birmingham</title>
          <meta
            name="description"
            content="At Dental Opulence, Composite Edge Bonding in Hall Green can improve tooth shape, repair chips, cracks and fill gaps to restore confidence. Book your consultation today."
          />
          <meta name="keywords" content="Composite Edge Bonding, Composite edge bonding Hall Green, Edge bonding Hall Green, Edge bonding Birmingham" />
          <link rel="canonical" href="https://www.do.co.uk/services/cosmeticTreatment/composite-edge-bonding" />
        </Head>
        <Navbar />
        <CompositeEdgeBondingHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_CompositeEdgebonding}/>
        <CompositeEdgeBondingOurCases />

        <CompositeEdgeBondingVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_CompositeEdgeBonding} />
        <ServiceElevate service_elevate={serviceElevet_CompositeEdgeBonding}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={compositeEdgeFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  