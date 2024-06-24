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
import InternalToothWhiteningHero from "./InternalToothWhiteningSection/InternalToothWhiteningHero";
import InternalToothWhiteningVideo from "./InternalToothWhiteningSection/InternalToothWhiteningVideo";



  
  export default function InternalToothWhitening() {
    return (
      <Layout>
        <Navbar />
        <InternalToothWhiteningHero/>
        <ServiceAward />
        <ServiceHero2 />
        <InternalToothWhiteningVideo/>
        <ServiceCompositeBonding />
        <ServiceElevate />
        <CosmaticWalkThrough/>
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
  