import { crownsFaq } from "../../../../constants";
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
import CrownsVeneersHero from "./CrownsVeneersSection/CrownsVeneersHero";
import CrownsVeneersVideo from "./CrownsVeneersSection/CrownsVeneersVideo";




  
  export default function Crowns() {
    return (
      <Layout>
        <Navbar />
        <CrownsVeneersHero/>
        <ServiceAward />
        <ServiceHero2 />
        <CrownsVeneersVideo/>
        <ServiceCompositeBonding />
        <ServiceElevate />
        <CosmaticWalkThrough/>
        <ServiceTransform />
        {/* <CompositeBondingHowLong /> */}
        <ServiceOurService />
        {/* <HomeOurServices /> */}
        <TestimonyComp />
        <OurProcess />
        <Faq faqList={crownsFaq} />
        <HomePeopleSlider />
        <Footer />
      </Layout>
    );
  }
  