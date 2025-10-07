import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* DNS Prefetch & Preconnect for Performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />

        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="P5YegVXkovfmkro7y9zhmgj0jlxcMR-lsMrU7ULfZ3M" />

        <meta name="description" content="Dental Opulence" />
        {/* <title>Dental Opulence</title> */}
        <link rel="shortcut icon" href="/384.png" />
        <link rel="mask-icon" href="/384.png" color="#FFFFFF" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/192.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:title" content="Dental Opulence" />
        <meta name="twitter:description" content="Dental Opulence" />
        <meta name="twitter:image" content="/icons/twitter.png" />
        <meta name="twitter:creator" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dental Opulence" />
        <meta property="og:description" content="Dental Opulence" />
        <meta property="og:site_name" content="Dental Opulence" />
        <meta property="og:url" content="Dental Opulence" />
        <meta property="og:image" content="/public/192.png" />
        {/* add the following only if you want to add a startup image for Apple devices. */}
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-NTG3ZK3WT6"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NTG3ZK3WT6');
            `,
          }}
        />

        {/* LocalBusiness Schema - Global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
              "name": "Dental Opulence",
              "image": "https://www.do.co.uk/android/android-launchericon-512-512.png",
              "url": "https://www.do.co.uk",
              "telephone": "+44-121-777-1257",
              "email": "info@do.co.uk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1544 Stratford Road, Hall Green",
                "addressLocality": "Birmingham",
                "addressRegion": "West Midlands",
                "postalCode": "B28 9ET",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.4327,
                "longitude": -1.8536
              },
              "priceRange": "££",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "sameAs": [
                "https://www.facebook.com/dentalopulence",
                "https://www.instagram.com/dentalopulence"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Birmingham"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Dental Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Composite Bonding",
                      "url": "https://www.do.co.uk/services/cosmeticTreatment/composite-bonding"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Teeth Whitening",
                      "url": "https://www.do.co.uk/services/cosmeticTreatment/teeth-whitening"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Invisalign Clear Braces",
                      "url": "https://www.do.co.uk/services/cosmeticTreatment/invisalign"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dental Crowns & Veneers",
                      "url": "https://www.do.co.uk/services/cosmeticTreatment/crowns-veneers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dental Implants",
                      "url": "https://www.do.co.uk/services/cosmeticTreatment/implants"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "White Fillings",
                      "url": "https://www.do.co.uk/services/generalTreatment/white-fillings"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Root Canal Treatment",
                      "url": "https://www.do.co.uk/services/generalTreatment/root-canal-treatments"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dental Hygienist",
                      "url": "https://www.do.co.uk/services/generalTreatment/hygienist"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Tooth Extractions & Wisdom Teeth Removal",
                      "url": "https://www.do.co.uk/services/generalTreatment/extractions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dentures",
                      "url": "https://www.do.co.uk/services/generalTreatment/dentures"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
