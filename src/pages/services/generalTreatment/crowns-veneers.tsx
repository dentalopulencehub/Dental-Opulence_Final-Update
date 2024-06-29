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


  
  export default function CrownsVeneers() {
    return (
      <Layout>
        <Navbar />
        <CrownsVeneerHero/>
        {/* <CrownsVeneerHero/> */}
        <ServiceAward />
        <ServiceHero2 />
        <CrownsVeneerVideo/>
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
  