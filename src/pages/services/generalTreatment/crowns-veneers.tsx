import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { crownsFaq, serviceCompositeBonding_CrownsVeneers, serviceElevet_CrownsVeneers, serviceHero2Desc_CrownsVeneers } from "../../../../constants";
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
import CrownsVeneerHero from "./crownsVeneerSection/crownsVeneerHero";
import CrownsVeneerVideo from "./crownsVeneerSection/crownsVeneerVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import Head from "next/head";



  export default function CrownsVeneers() {
    return (
      <Layout>
        <Head>
          <title>Dental Crowns Hall Green | Tooth Crowns | Dental Opulence</title>
          <meta
            name="description"
            content="At Dental Opulence, our Dental Crowns in Hall Green can restore damaged teeth, improve strength, and enhance your smile. Book today!"
          />
          <meta name="keywords" content="Dental crowns Hall Green, Tooth crowns Birmingham, Dental caps Hall Green, Crown restoration" />
          <link rel="canonical" href="https://www.do.co.uk/services/generalTreatment/crowns-veneers" />
        </Head>
        <Navbar />
        <CrownsVeneerHero/>
        {/* <CrownsVeneerHero/> */}
        <ServiceAward />
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_CrownsVeneers} />
        <CrownsVeneerVideo/>
        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_CrownsVeneers} />
        <ServiceElevate service_elevate={serviceElevet_CrownsVeneers}/>

        <PatientWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={crownsFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  