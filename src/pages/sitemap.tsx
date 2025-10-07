import Head from "next/head";
import Link from "next/link";
import { Layout, Navbar, Footer } from "../components/import";

export default function Sitemap() {
  return (
    <Layout>
      <Head>
        <title>Sitemap | Dental Opulence</title>
        <meta
          name="description"
          content="Complete sitemap of Dental Opulence - Browse all our dental services, treatments, and information pages."
        />
        <link rel="canonical" href="https://www.do.co.uk/sitemap" />
      </Head>
      <Navbar />

      <div className="bg-white py-16 px-6 md:px-20 lg:px-40">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-Pangram-Bold text-4xl md:text-5xl text-[#161616] mb-8">
            Sitemap
          </h1>
          <p className="text-lg text-[#161616] mb-12">
            Navigate through all pages and services at Dental Opulence, Hall Green, Birmingham.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="font-Pangram-Bold text-2xl text-[#161616] mb-4">Main Pages</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-[#161616] hover:text-[#666] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[#161616] hover:text-[#666] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-[#161616] hover:text-[#666] transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#161616] hover:text-[#666] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-[#161616] hover:text-[#666] transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/cases" className="text-[#161616] hover:text-[#666] transition-colors">
                    Our Cases
                  </Link>
                </li>
                <li>
                  <Link href="/our-pricing" className="text-[#161616] hover:text-[#666] transition-colors">
                    Our Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-[#161616] hover:text-[#666] transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Cosmetic Treatments */}
            <div>
              <h2 className="font-Pangram-Bold text-2xl text-[#161616] mb-4">Cosmetic Treatments</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/cosmeticTreatment/composite-bonding" className="text-[#161616] hover:text-[#666] transition-colors">
                    Composite Bonding
                  </Link>
                </li>
                <li>
                  <Link href="/services/cosmeticTreatment/composite-edge-bonding" className="text-[#161616] hover:text-[#666] transition-colors">
                    Composite Edge Bonding
                  </Link>
                </li>
                <li>
                  <Link href="/services/cosmeticTreatment/composite-veneers" className="text-[#161616] hover:text-[#666] transition-colors">
                    Composite Veneers
                  </Link>
                </li>
                <li>
                  <Link href="/services/cosmeticTreatment/teeth-whitening" className="text-[#161616] hover:text-[#666] transition-colors">
                    Teeth Whitening
                  </Link>
                </li>
                <li>
                  <Link href="/services/cosmeticTreatment/invisalign" className="text-[#161616] hover:text-[#666] transition-colors">
                    Invisalign Clear Braces
                  </Link>
                </li>
                <li>
                  <Link href="/services/cosmeticTreatment/crowns-veneers" className="text-[#161616] hover:text-[#666] transition-colors">
                    Dental Crowns & Veneers
                  </Link>
                </li>
                <li>
                  <Link href="/services/cosmeticTreatment/implants" className="text-[#161616] hover:text-[#666] transition-colors">
                    Dental Implants
                  </Link>
                </li>
                <li>
                  <Link href="/services/cosmeticTreatment/fixed-retainers" className="text-[#161616] hover:text-[#666] transition-colors">
                    Fixed Retainers
                  </Link>
                </li>
                <li>
                  <Link href="/services/cosmeticTreatment/vivera-retainers" className="text-[#161616] hover:text-[#666] transition-colors">
                    Vivera Retainers
                  </Link>
                </li>
                <li>
                  <Link href="/services/cosmeticTreatment/internal-tooth-whitening" className="text-[#161616] hover:text-[#666] transition-colors">
                    Internal Tooth Whitening
                  </Link>
                </li>
              </ul>
            </div>

            {/* General Treatments */}
            <div>
              <h2 className="font-Pangram-Bold text-2xl text-[#161616] mb-4">General Treatments</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/generalTreatment/examination" className="text-[#161616] hover:text-[#666] transition-colors">
                    Routine Examination
                  </Link>
                </li>
                <li>
                  <Link href="/services/generalTreatment/hygienist" className="text-[#161616] hover:text-[#666] transition-colors">
                    Dental Hygienist
                  </Link>
                </li>
                <li>
                  <Link href="/services/generalTreatment/white-fillings" className="text-[#161616] hover:text-[#666] transition-colors">
                    White Fillings
                  </Link>
                </li>
                <li>
                  <Link href="/services/generalTreatment/root-canal-treatments" className="text-[#161616] hover:text-[#666] transition-colors">
                    Root Canal Treatment
                  </Link>
                </li>
                <li>
                  <Link href="/services/generalTreatment/extractions" className="text-[#161616] hover:text-[#666] transition-colors">
                    Tooth Extractions
                  </Link>
                </li>
                <li>
                  <Link href="/services/generalTreatment/dentures" className="text-[#161616] hover:text-[#666] transition-colors">
                    Dentures
                  </Link>
                </li>
                <li>
                  <Link href="/services/generalTreatment/scale-and-polish" className="text-[#161616] hover:text-[#666] transition-colors">
                    Scale & Polish
                  </Link>
                </li>
                <li>
                  <Link href="/services/generalTreatment/sedation" className="text-[#161616] hover:text-[#666] transition-colors">
                    Sedation
                  </Link>
                </li>
                <li>
                  <Link href="/services/generalTreatment/bridges" className="text-[#161616] hover:text-[#666] transition-colors">
                    Dental Bridges
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal & Policy Pages */}
            <div>
              <h2 className="font-Pangram-Bold text-2xl text-[#161616] mb-4">Legal & Policies</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-[#161616] hover:text-[#666] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-[#161616] hover:text-[#666] transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use" className="text-[#161616] hover:text-[#666] transition-colors">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/data-protection" className="text-[#161616] hover:text-[#666] transition-colors">
                    Data Protection
                  </Link>
                </li>
                <li>
                  <Link href="/complaints-procedure" className="text-[#161616] hover:text-[#666] transition-colors">
                    Complaints Procedure
                  </Link>
                </li>
                <li>
                  <Link href="/health-and-safety" className="text-[#161616] hover:text-[#666] transition-colors">
                    Health & Safety
                  </Link>
                </li>
                <li>
                  <Link href="/appointment-terms" className="text-[#161616] hover:text-[#666] transition-colors">
                    Appointment Terms
                  </Link>
                </li>
                <li>
                  <Link href="/competitions-and-offer-terms" className="text-[#161616] hover:text-[#666] transition-colors">
                    Competitions & Offer Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="font-Pangram-Bold text-2xl text-[#161616] mb-4">Contact Information</h2>
            <div className="space-y-2 text-[#161616]">
              <p><strong>Address:</strong> 1544 Stratford Road, Hall Green, Birmingham, B28 9ET</p>
              <p><strong>Phone:</strong> <a href="tel:+441217771257" className="hover:text-[#666]">0121 777 1257</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@do.co.uk" className="hover:text-[#666]">info@do.co.uk</a></p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
}
