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


  
  export default function Examination() {
    return (
      <Layout>
        <Navbar />
        <HygienistHero/>
        <ServiceAward />
        <ServiceHero2 />
        <HygienistVideo/> 
        <ServiceCompositeBonding />
        <ServiceElevate />
        <PatientWalkThrough/>

        <ServiceTransform />
        <CompositeBondingHowLong />
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
  