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
import CompositeVeneersHero from "./CompositeVeneersSection/CompositeVeneersHero";
import CompositeVeneersVideo from "./CompositeVeneersSection/CompositeVeneersVideo";



  
  export default function CompositeVeneers() {
    return (
      <Layout>
        <Navbar />
        <CompositeVeneersHero/>
        <ServiceAward />
        <ServiceHero2 />
        <CompositeVeneersVideo/>
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
  