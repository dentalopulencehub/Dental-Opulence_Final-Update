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
        <title>Pricing</title>
      </Head>
      <Navbar />
      <PricingHero />
      
      <PricingMain/> 
      
      <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
