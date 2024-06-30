import { viveraRetainersFaq } from "../../../../constants";
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
import ViveraRetainersHero from "./ViveraRetainersSection/ViveraRetainersHero";
import ViveraRetainersVideo from "./ViveraRetainersSection/ViveraRetainersVideo";

  
  export default function ViveraRetainers() {
    return (
      <Layout>
        <Navbar />
        <ViveraRetainersHero/>
        <ServiceAward />
        <ServiceHero2 />
        <ViveraRetainersVideo/>
        <ServiceCompositeBonding />
        <ServiceElevate />
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        <ServiceOurService />
        <TestimonyComp />
        <OurProcess />
        <Faq faqList={viveraRetainersFaq} />
        <HomePeopleSlider />
        <Footer />
      </Layout>
    );
  }
  