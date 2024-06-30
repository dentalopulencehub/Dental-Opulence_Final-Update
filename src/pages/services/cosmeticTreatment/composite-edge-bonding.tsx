import { compositeEdgeFaq } from "../../../../constants";
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
import CompositeEdgeBondingHero from "./CompositeEdgeBondingSection/CompositeEdgeBondingHero";
import CompositeEdgeBondingVideo from "./CompositeEdgeBondingSection/CompositeEdgeBondingVideo";



  
  export default function CompositeEdgeBonding() {
    return (
      <Layout>
        <Navbar />
        <CompositeEdgeBondingHero/>
        <ServiceAward />
        <ServiceHero2 />
        <CompositeEdgeBondingVideo/>
        <ServiceCompositeBonding />
        <ServiceElevate />
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        <ServiceOurService />
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        <OurProcess />
        <Faq faqList={compositeEdgeFaq} />
        <HomePeopleSlider />
        <Footer />
      </Layout>
    );
  }
  