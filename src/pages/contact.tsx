import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout, Navbar, FormPage } from "../components/import";
import Head from "next/head";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Dental Opulence | Dentist in Hall Green, Birmingham</title>
        <meta
          name="description"
          content="Get in touch with Dental Opulence in Hall Green, Birmingham. Call 0121 272 9229, message us on WhatsApp or send an enquiry to book your consultation."
        />
        <link rel="canonical" href="https://www.do.co.uk/contact" />
      </Head>
      {/* <Navbar /> */}
      <FormPage />
    </Layout>
  );
}
