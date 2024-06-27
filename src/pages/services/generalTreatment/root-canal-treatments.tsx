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
import RootCanalTreatmentsHero from "./rootCanalTreatmentsSection/rootCanalTreatmentsHero";
import RootCanalTreatmentsVideo from "./rootCanalTreatmentsSection/rootCanalTreatmentsVideo";



  
  export default function Examination() {
    return (
      <Layout>
        <Navbar />
        <RootCanalTreatmentsHero/>
        <ServiceAward />
        <ServiceHero2 />
        <RootCanalTreatmentsVideo/>
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
  