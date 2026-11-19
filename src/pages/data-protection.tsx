import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  

  Footer,

  HomePeopleSlider,
} from "../components/import";

import DataProtectionHero from "@/components/compound/DataProtection/DataProtectionHero";
import DataProtectionBody from "@/components/compound/DataProtection/DataProtectionBody";
import Head from "next/head";

export default function DataProtection() {
  return (
    <Layout>
      <Head>
        <title>Data Protection | Dental Opulence</title>
        <meta
          name="description"
          content="Dental Opulence's approach to data protection, including how patient records are stored, who can access them and how long they are kept."
        />
        <link rel="canonical" href="https://www.do.co.uk/data-protection" />
      </Head>
      <Navbar />
       <DataProtectionHero/>

         <DataProtectionBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
