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
import FixedRetainersHero from "./FixedRetainersSection/FixedRetainersHero";
import FixedRetainersVideo from "./FixedRetainersSection/FixedRetainersVideo";



  
  export default function invisalign() {
    return (
      <Layout>
        <Navbar />
        <FixedRetainersHero/>
        <ServiceAward />
        <ServiceHero2 />
        <FixedRetainersVideo/> 
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
  