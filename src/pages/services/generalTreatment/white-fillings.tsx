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
import WhiteFillingHero from "./whiteFillings/whiteFillingHero";
import WhiteFillingVideo from "./whiteFillings/whiteFillingVideo";


  
  export default function WhiteFillings() {
    return (
      <Layout>
        <Navbar />
        <WhiteFillingHero/>
        <ServiceAward />
        <ServiceHero2 />
        <WhiteFillingVideo/>
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
  