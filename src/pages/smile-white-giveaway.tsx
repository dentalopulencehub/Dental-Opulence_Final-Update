import {
  Layout,
  Navbar,
  

  Footer,

  HomePeopleSlider,
} from "../components/import";

import SmileWhiteHero from "@/components/compound/smileWhiteHero";
import SmileWhiteBody from "@/components/compound/smileWhiteBody";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Navbar />
       <SmileWhiteHero/>
         <SmileWhiteBody/>
         <HomePeopleSlider />
      <Footer />
    </Layout>
  );
}
