import Head from "next/head";

const LocalBusinessSchema = () => {
  const schemaData = {
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
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData)
        }}
      />
    </Head>
  );
};

export default LocalBusinessSchema;
