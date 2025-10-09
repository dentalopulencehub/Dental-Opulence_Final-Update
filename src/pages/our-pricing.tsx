import Image from "next/image";
import { Inter } from "next/font/google";

import PricingMain from "@/components/compound/Pricing/pricingMain";
import { Footer, HomeHero, HomePeopleSlider, Layout, Navbar } from "@/components/compound";
import PricingHero from "@/components/compound/pricingHero";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Dental Pricing Hall Green | Affordable Dentistry | Dental Opulence</title>
        <meta
          name="description"
          content="At Dental Opulence, our dental pricing in Hall Green offers transparent and affordable costs for cosmetic and general dentistry treatments. View our pricing guide today!"
        />
        <meta name="keywords" content="Dental pricing Hall Green, Dentist prices Birmingham, Affordable dentistry Hall Green, Dental costs Birmingham" />
        <link rel="canonical" href="https://www.do.co.uk/our-pricing" />
      </Head>
      <Navbar />
      <PricingHero />
      
      <PricingMain/> 
      
      <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
