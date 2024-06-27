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


  
  export default function Bridges() {
    return (
      <Layout>
        <Navbar />
        <BridgesHeroSection/>
        <ServiceAward />
        <ServiceHero2 />
        
        <BridgeVideo/>
        <ServiceCompositeBonding />
        <ServiceElevate />

        <PatientWalkThrough/>

        <ServiceTransform />
        
        {/* <CompositeBondingHowLong /> */}

        <ServiceOurService />
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        <OurProcess />
        <Faq />
        <HomePeopleSlider />
        <Footer />
      </Layout>
    );
  }
  