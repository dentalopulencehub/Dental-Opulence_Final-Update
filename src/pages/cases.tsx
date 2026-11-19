import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  CaseHero,
  CaseSelectOptions,
  CaseSelectedImages,
  HomePeopleSlider,
  Footer,
} from "../components/import";
import HomePeopleSlider2 from "@/components/compound/HomePeopleSlider2";
import Head from "next/head";

export default function Cases() {
  return (
    <Layout>
      <Head>
        <title>Before and After Smile Gallery | Dental Opulence Birmingham</title>
        <meta
          name="description"
          content="See real before and after results from Dental Opulence in Hall Green, Birmingham, including Invisalign, composite bonding, veneers and full smile makeovers."
        />
        <link rel="canonical" href="https://www.do.co.uk/cases" />
      </Head>
      <Navbar />
      <CaseHero />
      <CaseSelectOptions />
      <CaseSelectedImages />
      <HomePeopleSlider2 />
      <Footer />
    </Layout>
  );
}
