import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  

  Footer,

  HomePeopleSlider,
} from "../components/import";

import PrivacyPolicyBody from "@/components/compound/privacyPolicyBody";
import PrivacyPolicyHero from "@/components/compound/privacyPolicyHero";
import ComplaintsProcedureHero from "@/components/compound/ComplaintsProcedure/ComplaintsProcedureHero";
import ComplaintsProcedureBody from "@/components/compound/ComplaintsProcedure/ComplaintsProcedureBody";
import Head from "next/head";

export default function ComplaintsProcedure() {
  return (
    <Layout>
      <Head>
        <title>Complaints Procedure | Dental Opulence</title>
        <meta
          name="description"
          content="How to raise a concern or complaint with Dental Opulence in Hall Green, Birmingham, what happens next and the timescales you can expect."
        />
        <link rel="canonical" href="https://www.do.co.uk/complaints-procedure" />
      </Head>
      <Navbar />
       <ComplaintsProcedureHero/>

         <ComplaintsProcedureBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
