import Head from "next/head";
import { Layout, Navbar, Footer, HomePeopleSlider } from "../components/import";
import BlackFridayTermsHero from "@/components/compound/BlackFridayTerms/BlackFridayTermsHero";
import BlackFridayTermsBody from "@/components/compound/BlackFridayTerms/BlackFridayTermsBody";

export default function BlackFridayTerms() {
  return (
    <Layout>
      <Head>
        <title>
          Black Friday Invisalign Offer Terms and Conditions | Dental Opulence
        </title>
        <meta
          name="description"
          content="Terms and conditions for the Dental Opulence Black Friday Invisalign offer, including eligibility, what is included, payment deadlines and referral voucher conditions."
        />
        <link
          rel="canonical"
          href="https://www.do.co.uk/black-friday-terms"
        />
      </Head>
      <Navbar />
      <BlackFridayTermsHero />
      <BlackFridayTermsBody />
      <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
