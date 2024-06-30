import { examinationFaq } from "../../../../constants";
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
import ExaminationHero from "./examination/examinationHero";
import ExaminationVideo from "./examination/examinationVideo";


  
  export default function Examination() {
    return (
      <Layout>
        <Navbar />
        <ExaminationHero/>
        <ServiceAward />
        <ServiceHero2 />
        <ExaminationVideo/>
        <ServiceCompositeBonding />
        <ServiceElevate />

        <PatientWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        <ServiceOurService />
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        <OurProcess />
        <Faq faqList={examinationFaq} />
        <HomePeopleSlider />
        <Footer />
      </Layout>
    );
  }
  