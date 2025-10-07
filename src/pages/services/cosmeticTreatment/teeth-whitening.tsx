import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { serviceCompositeBonding_TeethWhitening, serviceElevet_TeethWhitening, serviceHero2Desc_teethwhitening, teethWhiteFaq } from "../../../../constants";
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
import TeethWhiteningHero from "./teethWhiteningSection/teethWhiteningHero";
import TeethWhiteningVideo from "./teethWhiteningSection/teethWhiteningVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import TeethWhiteningOurCases from "./teethWhiteningSection/OurCases";
import Head from "next/head";



  export default function TeethWhitening() {
    return (
      <Layout>
        <Head>
          <title>Teeth Whitening in Hall Green, Birmingham | Dental Opulence</title>
          <meta
            name="description"
            content="Get professional Teeth Whitening in Hall Green at Dental Opulence. We offer both in-clinic and home whitening kits to brighten your discoloured teeth."
          />
          <meta name="keywords" content="Teeth Whitening, Teeth whitening Hall Green, Professional teeth whitening Birmingham, Teeth whitening treatment" />
          <link rel="canonical" href="https://www.do.co.uk/services/cosmeticTreatment/teeth-whitening" />
        </Head>
        <Navbar />
        <TeethWhiteningHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_teethwhitening} />
        <TeethWhiteningOurCases />
        <TeethWhiteningVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_TeethWhitening} />
        <ServiceElevate service_elevate={serviceElevet_TeethWhitening}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={teethWhiteFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  