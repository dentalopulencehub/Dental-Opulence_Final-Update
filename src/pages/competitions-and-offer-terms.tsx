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
import CompetitionsOfferTermsHero from "@/components/compound/CompetitionsOfferTerms/CompetitionsOfferTermsHero";
import CompetitionsOfferTermsBody from "@/components/compound/CompetitionsOfferTerms/CompetitionsOfferTermsBody";
import Head from "next/head";

export default function CoocompetitionsAndOffer() {
  return (
    <Layout>
      <Head>
        <title>Competitions and Offer Terms | Dental Opulence</title>
        <meta
          name="description"
          content="Terms and conditions for Dental Opulence competitions, promotions and referral offers, including eligibility and reward conditions."
        />
        <link rel="canonical" href="https://www.do.co.uk/competitions-and-offer-terms" />
      </Head>
      <Navbar />
       <CompetitionsOfferTermsHero/>

         <CompetitionsOfferTermsBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
