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
import TeethWhiteningHero from "./teethWhiteningSection/teethWhiteningHero";
import TeethWhiteningVideo from "./teethWhiteningSection/teethWhiteningVideo";



  export default function TeethWhitening() {
    return (
      <Layout>
        <Navbar />
        <TeethWhiteningHero/>
        <ServiceAward />
        <ServiceHero2 />
        <TeethWhiteningVideo/>
        <ServiceCompositeBonding />
        <ServiceElevate />
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        <ServiceOurService />
        <TestimonyComp />
        <OurProcess />
        <Faq />
        <HomePeopleSlider />
        <Footer />
      </Layout>
    );
  }
  