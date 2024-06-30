import { compositeBondingFaq } from "../../../../constants";
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
import CompositeBondingHero from "./CompositeBondingSection/CompositeBondingHero";
import CompositeBondingVideo from "./CompositeBondingSection/CompositeBondingVideo";



  
  export default function CompositeBonding() {
    return (
      <Layout>
        <Navbar />
        <CompositeBondingHero/> 
        <ServiceAward />
        <ServiceHero2 />
        <CompositeBondingVideo/>
        <ServiceCompositeBonding />
        <ServiceElevate />

        <CosmaticWalkThrough/>

        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        <ServiceOurService />
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        <OurProcess />
        <Faq faqList={compositeBondingFaq} />
        <HomePeopleSlider />
        <Footer />
      </Layout>
    );
  }
  