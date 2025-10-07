import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { hygienistFaq, serviceCompositeBonding_Hygienist, serviceElevet_Hygienist, serviceHero2Desc_Hygienist } from "../../../../constants";
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
import HygienistHero from "./hygienistSection/hygienistHero";
import HygienistVideo from "./hygienistSection/hygienistVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import Head from "next/head";



  export default function Examination() {
    return (
      <Layout>
        <Head>
          <title>Dental Hygienist Hall Green – Teeth Cleaning & Gum Disease Treatment</title>
          <meta
            name="description"
            content="Dental hygienist in Hall Green offer professional cleaning, plaque removal, gum disease treatment, and preventative care to maintain a healthy and brighter smile."
          />
          <meta name="keywords" content="Dental Hygienist, Dental hygienist Hall Green, Teeth cleaning Hall Green, Gum disease treatment Birmingham" />
          <link rel="canonical" href="https://www.do.co.uk/services/generalTreatment/hygienist" />
        </Head>
        <Navbar />
        <HygienistHero/>
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_Hygienist} />
        <HygienistVideo/> 
        <ServiceCompositeBondingMain service_compositeBonding= {serviceCompositeBonding_Hygienist} />
        <ServiceElevate service_elevate={serviceElevet_Hygienist}/>
        <PatientWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={hygienistFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  