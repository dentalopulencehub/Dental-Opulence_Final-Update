import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import {
  serviceCompositeBonding_WhiteFillings,
  serviceElevet_WhiteFillings,
  serviceHero2Desc_WhiteFillings,
  whiteFillingFaq,
} from "../../../../constants";
import {
  Layout,
  Navbar,
  ServiceAward,
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
import WhiteFillingHero from "./whiteFillings/whiteFillingHero";
import WhiteFillingVideo from "./whiteFillings/whiteFillingVideo";
import ServiceCompositeBondingMain from "@/components/compound/serviceCompositeBondingMain";
import ServiceHero2Main from "@/components/compound/ServiceHero2Main";
import WhiteFillingOurCases from "./whiteFillings/OurCases";
import Head from "next/head";

export default function WhiteFillings() {
  return (
    <Layout>
      <Head>
        <title>Composite White Fillings Hall Green | Dental Opulence, Birmingham</title>
        <meta
          name="description"
          content="Composite White Fillings in Hall Green at Dental Opulence can replace old fillings or treat tooth decay with tooth-coloured fillings for a natural appearance."
        />
        <meta name="keywords" content="White Fillings, Composite white fillings Hall Green, White fillings Hall Green, Tooth-coloured fillings Birmingham" />
        <link rel="canonical" href="https://www.do.co.uk/services/generalTreatment/white-fillings" />
      </Head>
      <Navbar />
      <WhiteFillingHero />
      <ServiceAward />
      <ServiceHero2Main ServiceHeroTwoDesc={serviceHero2Desc_WhiteFillings} />
      <WhiteFillingOurCases />

      <WhiteFillingVideo />
      <ServiceCompositeBondingMain
        service_compositeBonding={serviceCompositeBonding_WhiteFillings}
      />
      <ServiceElevate service_elevate={serviceElevet_WhiteFillings} />
      <PatientWalkThrough />
      <ServiceTransform />
      {/* <CompositeBondingHowLong /> */}
      {/* <HomeOurServices /> */}
      <TestimonyComp />
      {/* <OurProcess /> */}
      <Faq faqList={whiteFillingFaq} />
      <HomePeopleSlider2 />
      <Footer />
    </Layout>
  );
}
