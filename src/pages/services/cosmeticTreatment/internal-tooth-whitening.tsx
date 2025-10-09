import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { internalTeethWhiteFaq, serviceCompositeBonding_InternalToothWhitening, serviceElevet_InternalToothWhitening, serviceHero2Desc_InternalToothWhitening } from "../../../../constants";
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
import InternalToothWhiteningHero from "./InternalToothWhiteningSection/InternalToothWhiteningHero";
import InternalToothWhiteningVideo from "./InternalToothWhiteningSection/InternalToothWhiteningVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import Head from "next/head";



  export default function InternalToothWhitening() {
    return (
      <Layout>
        <Head>
          <title>Internal Tooth Whitening Hall Green | Internal Bleaching | Dental Opulence</title>
          <meta
            name="description"
            content="At Dental Opulence, our Internal Tooth Whitening in Hall Green can brighten discoloured teeth from the inside after root canal treatment. Book today!"
          />
          <meta name="keywords" content="Internal tooth whitening Hall Green, Internal bleaching Birmingham, Tooth discolouration treatment Hall Green, Root canal whitening" />
          <link rel="canonical" href="https://www.do.co.uk/services/cosmeticTreatment/internal-tooth-whitening" />
        </Head>
        <Navbar />
        <InternalToothWhiteningHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_InternalToothWhitening} />
        <InternalToothWhiteningVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_InternalToothWhitening} />
        <ServiceElevate service_elevate={serviceElevet_InternalToothWhitening}/>
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={internalTeethWhiteFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  