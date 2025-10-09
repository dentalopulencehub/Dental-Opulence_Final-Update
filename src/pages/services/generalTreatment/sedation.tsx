import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { serviceCompositeBonding_ScaleAndPolish, serviceCompositeBonding_Sedation, serviceCompositeBonding_WhiteFillings, serviceElevet_ScaleAndPolish, serviceElevet_Sedation, serviceElevet_WhiteFillings, serviceHero2Desc_ScaleAndPolish, serviceHero2Desc_Sedation, serviceHero2Desc_WhiteFillings, whiteFillingFaq } from "../../../../constants";
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
import WhiteFillingVideo from "./whiteFillings/whiteFillingVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import ScaleAndPolishHero from "./scaleAndPolish/scaleAndPolishHero";
import ScaleAndPolishVideo from "./scaleAndPolish/scaleAndPolishVideo";
import SedationHero from "./sedation/SedationHero";
import SedationVideo from "./sedation/SedationVideo";
import Head from "next/head";



  export default function Sedation() {
    return (
      <Layout>
        <Head>
          <title>Dental Sedation Hall Green | Sedation Dentistry | Dental Opulence</title>
          <meta
            name="description"
            content="At Dental Opulence, our Dental Sedation in Hall Green provides anxiety-free treatment for nervous patients with safe and comfortable sedation options. Book today!"
          />
          <meta name="keywords" content="Dental sedation Hall Green, Sedation dentistry Birmingham, Anxiety-free dentistry Hall Green, Nervous patient treatment" />
          <link rel="canonical" href="https://www.do.co.uk/services/generalTreatment/sedation" />
        </Head>
        <Navbar />
        <SedationHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_Sedation} />
        <SedationVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Sedation} />
        <ServiceElevate service_elevate={serviceElevet_Sedation}/>
        <PatientWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={whiteFillingFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  