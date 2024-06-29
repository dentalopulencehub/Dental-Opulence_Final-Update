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
import InvisalignHero from "./invisalignSection/invisalignHero";
import InvisalignVideo from "./invisalignSection/invisalignVideo";


  
  export default function invisalign() {
    return (
      <Layout>
        <Navbar />
        <InvisalignHero/>
        <ServiceAward />
        <ServiceHero2 />
        <InvisalignVideo/>
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
  