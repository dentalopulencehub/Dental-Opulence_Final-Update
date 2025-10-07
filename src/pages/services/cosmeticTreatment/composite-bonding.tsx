import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { compositeBondingFaq, serviceCompositeBonding_Compositebonding, serviceElevet_CompositeBonding, serviceHero2Desc_compositeBonding } from "../../../../constants";
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
import CompositeBondingHero from "./CompositeBondingSection/CompositeBondingHero";
import CompositeBondingVideo from "./CompositeBondingSection/CompositeBondingVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import CompositeBondingOurCases from "./CompositeBondingSection/OurCases";
import Head from "next/head";




  export default function CompositeBonding() {
    return (
      <Layout>
        <Head>
          <title>Composite Bonding Hall Green | Dental Opulence, Birmingham</title>
          <meta
            name="description"
            content="At Dental Opulence, our Composite Bonding in Hall Green treatment includes edge bonding and composite veneers solutions to enhance your smile. Book today!"
          />
          <meta name="keywords" content="Composite Bonding, Composite bonding Hall Green, Edge bonding, Composite veneers Hall Green" />
          <link rel="canonical" href="https://www.do.co.uk/services/cosmeticTreatment/composite-bonding" />
        </Head>
        <Navbar />
        <CompositeBondingHero/> 
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_compositeBonding} />
        <CompositeBondingOurCases />

        <CompositeBondingVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Compositebonding} />
        <ServiceElevate service_elevate={serviceElevet_CompositeBonding}/>

        <CosmaticWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={compositeBondingFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  