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
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | Dental Opulence</title>
        <meta
          name="description"
          content="How Dental Opulence collects, uses and protects your personal information, and the rights you have over your data."
        />
        <link rel="canonical" href="https://www.do.co.uk/privacy-policy" />
      </Head>
      <Navbar />
       <PrivacyPolicyHero/>

         <PrivacyPolicyBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
