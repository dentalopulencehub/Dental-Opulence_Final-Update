import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { extractionFaq, serviceCompositeBonding_Extractions, serviceElevet_Extractions, serviceHero2DescExtyractions } from "../../../../constants";
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
import PatientWalkThrough from "../reuseable/patientWalkThrough";
import ExtractionsHero from "./extractionsSection/extractionsHero";
import ExtractionsVideo from "./extractionsSection/extractionsVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import Head from "next/head";



  export default function Extractions() {
    return (
      <Layout>
        <Head>
          <title>Wisdom Teeth Removal & Extraction in Hall Green | Dental Opulence</title>
          <meta
            name="description"
            content="Get a stress-free Wisdom Teeth Removal in Hall Green at Dental Opulence. Our skilled dentists ensure safe, comfortable tooth extractions with minimal discomfort."
          />
          <meta name="keywords" content="Wisdom teeth removal, Wisdom teeth removal Hall Green, Tooth extraction Birmingham, Dental extraction Hall Green" />
          <link rel="canonical" href="https://www.do.co.uk/services/generalTreatment/extractions" />
        </Head>
        <Navbar />
        <ExtractionsHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2DescExtyractions} />
         <ExtractionsVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Extractions} />
        <ServiceElevate service_elevate={serviceElevet_Extractions}/>
        <PatientWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={extractionFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  