import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Layout,
  Navbar,
  

  Footer,

  HomePeopleSlider,
} from "../components/import";


import AppointmentTermsHero from "@/components/compound/AppointmentTerms/AppointmentTermsHero";
import AppointmentTermsBody from "@/components/compound/AppointmentTerms/AppointmentTermsBody";
import Head from "next/head";

export default function AppointmentTerms() {
  return (
    <Layout>
      <Head>
        <title>Appointment Terms | Dental Opulence</title>
        <meta
          name="description"
          content="Dental Opulence appointment terms, including booking, deposits, cancellations, missed appointments and rescheduling."
        />
        <link rel="canonical" href="https://www.do.co.uk/appointment-terms" />
      </Head>
      <Navbar />
       <AppointmentTermsHero/>

         <AppointmentTermsBody/>

         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
