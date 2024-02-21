import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout, HomeHero, Navbar, HomeAwards, HomeHero2, HomePopularServices, HomeOurServices } from "../components/import";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <HomeHero />
      <HomeAwards />
      <HomeHero2 />
      <HomePopularServices />
      <HomeOurServices />
    </Layout>
  );
}
