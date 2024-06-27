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
import CosmaticWalkThrough from "../reuseable/cosmaticWalkThrough";
import RoutineExaminationHero from "./RoutineExaminationSection/RoutineExaminationHero";
import RoutineExaminationVideo from "./RoutineExaminationSection/RoutineExaminationVideo";



  
  export default function RoutineExamination() {
    return (
      <Layout>
        <Navbar />
        <RoutineExaminationHero/>
        <ServiceAward />
        <ServiceHero2 />
        <RoutineExaminationVideo/>
        <ServiceCompositeBonding />
        <ServiceElevate />
        <CosmaticWalkThrough/>
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
  