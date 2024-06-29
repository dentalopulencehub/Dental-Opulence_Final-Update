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


  
  export default function Extractions() {
    return (
      <Layout>
        <Navbar />
        <ExtractionsHero/>
        <ServiceAward />
        <ServiceHero2 />
         <ExtractionsVideo/>
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
  