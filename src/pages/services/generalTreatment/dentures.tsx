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
import DentureHero from "./dentureSection/dentureHero";
import DentureVideo from "./dentureSection/dentureVideo";


  
  export default function Dentures() {
    return (
      <Layout>
        <Navbar />
        <DentureHero/>
        <ServiceAward />
        <ServiceHero2 />
        <DentureVideo/>
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
  