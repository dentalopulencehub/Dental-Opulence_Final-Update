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

export default function Cases() {
  return (
    <Layout>
      <Navbar />
      <CaseHero />
      <CaseSelectOptions />
      <CaseSelectedImages />
      <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
