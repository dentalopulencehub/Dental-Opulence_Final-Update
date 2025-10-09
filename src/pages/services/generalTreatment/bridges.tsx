import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import { bridgesFaq, serviceCompositeBonding_Bridges, serviceElevetBridges, serviceHero2DescBridge } from "../../../../constants";
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
import BridgeVideo from "./bridgesSection/bridgeVideo";
import BridgesHeroSection from "./bridgesSection/bridgesHeroSection";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import Head from "next/head";



  export default function Bridges() {
    return (
      <Layout>
        <Head>
          <title>Dental Bridges Hall Green | Tooth Bridges | Dental Opulence</title>
          <meta
            name="description"
            content="At Dental Opulence, our Dental Bridges in Hall Green can replace missing teeth, restore function, and improve your smile appearance. Book today!"
          />
          <meta name="keywords" content="Dental bridges Hall Green, Tooth bridges Birmingham, Fixed bridges Hall Green, Missing teeth replacement" />
          <link rel="canonical" href="https://www.do.co.uk/services/generalTreatment/bridges" />
        </Head>
        <Navbar />
        <BridgesHeroSection/>
        <ServiceAward />
        
        <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2DescBridge} />
        
        <BridgeVideo/>

        <ServiceCompositeBondingMain service_compositeBonding={serviceCompositeBonding_Bridges}/>
        
        <ServiceElevate service_elevate={serviceElevetBridges}/>
        

        <PatientWalkThrough/>

        <ServiceTransform />
        
        {/* <CompositeBondingHowLong /> */}

        {/* <ServiceOurService /> */}
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        {/* <OurProcess /> */}
        <Faq faqList={bridgesFaq} />
        <HomePeopleSlider2 />
        <Footer />
      </Layout>
    );
  }
  