import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  

  Footer,

  HomePeopleSlider,
} from "../components/import";


import CookiePolicyHero from "@/components/compound/cookiePolicy/cookiePolicyHero";
import CookiePolicyBody from "@/components/compound/cookiePolicy/cookiePolicyBody";
import HealthSafetyHero from "@/components/compound/HealthSafety/HealthSafetyHero";
import HealthSafetyBody from "@/components/compound/HealthSafety/HealthSafetyBody";
import Head from "next/head";

export default function HealthSafety() {
  return (
    <Layout>
      <Head>
        <title>Health and Safety Policy | Dental Opulence</title>
        <meta
          name="description"
          content="Dental Opulence's health and safety commitments covering infection control, equipment, staff training and patient wellbeing."
        />
        <link rel="canonical" href="https://www.do.co.uk/health-and-safety" />
      </Head>
      <Navbar />
       <HealthSafetyHero/>

         <HealthSafetyBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
