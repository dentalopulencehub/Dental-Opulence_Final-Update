import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  CaseHero,

  Footer,
  AboutHero,
  HomePeopleSlider,
} from "../components/import";
import VideoTestimonials from "@/components/compound/videoTestimonials";
import VideoTestimonialStrokeLine from "@/components/compound/videoTestimonialStrokeLine";
import PrivacyPolicyBody from "@/components/compound/privacyPolicyBody";
import PrivacyPolicyHero from "@/components/compound/privacyPolicyHero";
import TermsUseHero from "@/components/compound/TermsUseHero";
import TermsOfUseBody from "@/components/compound/TermsOfUseBody";
import Head from "next/head";

export default function TermsOfUse() {
  return (
    <Layout>
      <Head>
        <title>Terms of Use | Dental Opulence</title>
        <meta
          name="description"
          content="The terms that apply when you use the Dental Opulence website, including acceptable use and limits of liability."
        />
        <link rel="canonical" href="https://www.do.co.uk/terms-of-use" />
      </Head>
      <Navbar />
        <TermsUseHero/>

         <TermsOfUseBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
