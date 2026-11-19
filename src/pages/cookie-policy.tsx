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
import CookiePolicyHero from "@/components/compound/cookiePolicy/cookiePolicyHero";
import CookiePolicyBody from "@/components/compound/cookiePolicy/cookiePolicyBody";
import Head from "next/head";

export default function CookiePolicy() {
  return (
    <Layout>
      <Head>
        <title>Cookie Policy | Dental Opulence</title>
        <meta
          name="description"
          content="How Dental Opulence uses cookies on this website, what they are used for and how you can manage your preferences."
        />
        <link rel="canonical" href="https://www.do.co.uk/cookie-policy" />
      </Head>
      <Navbar />
       <CookiePolicyHero/>

         <CookiePolicyBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
