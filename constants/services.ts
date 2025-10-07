import {
  HomePopularServicesType,
  HomeOurServicesType,
  ServicePageDataType,
} from "../types";

import teeth_whitening_service_image from "../assets/images/teeth-whitening-service-img.svg";
import teeth_whitening_service_image_dark from "../assets/images/teeth-whitening-service-img2.svg";
import invisalign_service_image_dark from "../assets/images/invisalign-service-image.svg";
import invisalign_service_image from "../assets/images/invisalign-service-image2.svg";
import composite_bonding_service_image from "../assets/images/composite-bonding-service-image.svg";
import composite_bonding_service_image_dark from "../assets/images/composite-bonding-service-image2.svg";

import general_dentistry_service_image from "../assets/fonts/composite_veenerDarkBgImg.svg";
import general_dentistry_service_image_dark from "../assets/fonts/composite_veenerDarkBgImgWhiteBg.svg";

import dentures_services_image from "../assets/images/dentures-services-image.svg";
import dentures_service_image_dark from "../assets/images/dentures-services-image-dark.svg";
import extraction_services_image from "../assets/images/extraction-services-image.svg";
import extraction_sevices_image_dark from "../assets/images/extraction-services-image-dark.svg";
import crown_veneers_services_image from "../assets/images/crowns-veeners-services-image.svg";
import crown_veneers_services_image_dark from "../assets/images/crowns-veeners-services-image-dark.svg";
import hygienist_services_image from "../assets/images/hygienist-services-image.svg";
import hygienist_services_image_dark from "../assets/images/hygienist-services-image-dark.svg";
import root_canal_services_image from "../assets/images/root-canal-services-image.svg";
import root_canal_services_image_dark from "../assets/images/root-canal-services-image-dark.svg";
import bridges_services_image from "../assets/images/birdges-services-image.svg";
import bridges_services_image_dark from "../assets/images/birdges-services-image-dark.svg";
import white_fillings_services_image from "../assets/images/white-fillings-services-image.svg";
import white_fillings_services_image_dark from "../assets/images/white-fillings-services-image-dark.svg";
import examination_services_image from "../assets/images/examination-services-image.svg";
import examination_services_image_dark from "../assets/images/examination-services-image-dark.svg";

import invisalign_service_icon from "../assets/images/invisalign-services-image.svg";
import invisalign_service_icon_light from "../assets/images/invisalign-services-image-light.svg";
import fixed_retainer_service_icon from "../assets/images/fixed-retainers-service-icon.svg";
import fixed_retainer_service_icon_light from "../assets/images/fixed-retainers-service-icon-light.svg";
import teeth_whitening_service_icon from "../assets/images/teeth-whitening-service-icon.svg";
import teeth_whitening_service_icon_light from "../assets/images/teeth-whitening-service-icon-light.svg";
import vivera_retainers_service_icon from "../assets/images/vivera-retainers-service-icon.svg";
import vivera_retainers_service_icon_light from "../assets/images/vivera-retainers-service-icon-light.svg";
import crown_veneers_service_icon from "../assets/images/crown-veneers-service-icon.svg";
import crown_veneers_service_icon_light from "../assets/images/crown-veneers-service-icon-light.svg";
import composite_veneers_service_icon from "../assets/images/composite-veneer-service-icon.svg";
import composite_veneers_service_icon_light from "../assets/images/composite-veneer-service-icon-light.svg";
import composite_bonding_service_icon from "../assets/images/composite-bonding-service-icon.svg";
import composite_bonding_service_icon_light from "../assets/images/composite-bonding-service-icon-light.svg";
import routine_examination_service_icon from "../assets/images/routine-examination-service-icon.svg";
import routine_examination_service_icon_light from "../assets/images/routine-examination-service-icon-light.svg";
import internal_tooth_whitening_service_icon from "../assets/images/internal-tooth-whitening-service-icon.svg";
import internal_tooth_whitening_service_icon_light from "../assets/images/internal-tooth-whitening-service-icon-light.svg";
import composite_edge_bonding_service_icon from "../assets/images/composite-edge-bonding-service-icon.svg";
import composite_edge_bonding_service_icon_light from "../assets/images/composite-edge-bonding-service-icon-light.svg";

import bridges_service_hero_image from "../assets/images/bridge-service-hero-image.svg";
import crown_veneers_service_hero_image from "../assets/images/crown-veneer-service-hero-image.svg";
import dentures_service_hero_image from "../assets/images/denture-service-hero-image.svg";
import examination_service_hero_image from "../assets/images/examination-service-hero-image.svg";
import extraction_service_hero_image from "../assets/images/extractions-service-hero-image.svg";
import hygienist_service_hero_image from "../assets/images/hygienist-service-hero-image.svg";
import white_fillings_service_hero_image from "../assets/images/white-fillings-service-hero-image.svg";
import root_canal_treatments_service_hero_image from "../assets/images/root-canal-services-image.svg";
import invisalign_service_hero_image from "../assets/images/invisalign-service-hero-image.svg";
import fixed_retainers_service_hero_image from "../assets/images/fixed-retainers-service-hero-image.svg";
import teeth_whitening_service_hero_image from "../assets/images/teeth-whitening-service-hero-image.svg";
import vivera_service_hero_image from "../assets/images/vivera-service-hero-image.svg";
import crowns_service_hero_image from "../assets/images/crowns-service-hero-image.svg";
import composite_veneers_service_hero_image from "../assets/images/composite-veneers-service-image.svg";
import composite_bonding_service_hero_image from "../assets/images/compositeB-service-hero-image.svg";
import routine_examination_service_hero_image from "../assets/images/routine-examination-service-image.svg";
import internal_tooth_whiteneing_service_hero_image from "../assets/images/internal-tooth-whitening-service-image.svg";
import composite_edge_bonding_service_hero_image from "../assets/images/composite-edge-bonding-service-image.svg";

export const services_page_data: ServicePageDataType[] = [
  {
    title: "Bridges",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: bridges_service_hero_image,
    type: "bridges",
  },
  {
    title: "Crowns",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: crown_veneers_service_hero_image,
    type: "crowns-veneers",
  },
  {
    title: "Dentures",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: dentures_service_hero_image,
    type: "dentures",
  },
  {
    title: "Examination",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: examination_service_hero_image,
    type: "examination",
  },
  {
    title: "Extractions",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: extraction_service_hero_image,
    type: "extractions",
  },
  {
    title: "Hygienist",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: hygienist_service_hero_image,
    type: "hygienist",
  },
  {
    title: "White Fillings",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: white_fillings_service_hero_image,
    type: "white-fillings",
  },
  {
    title: "Root Canal Treatments",
    price: "£650",
    description:
      "Root canal treatment removes infected pulp, cleans and seals the tooth, restoring function and relieving pain.",
    heroImage: root_canal_treatments_service_hero_image,
    type: "root-canal-treatments",
  },

  {
    title: "Invisalign",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: invisalign_service_hero_image,
    type: "invisalign",
  },

  {
    title: "Fixed Retainers",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: fixed_retainers_service_hero_image,
    type: "fixed-retainers",
  },
  {
    title: "Teeth Whitening",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: teeth_whitening_service_hero_image,
    type: "teeth-whitening",
  },
  {
    title: "Vivera Retainers",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: vivera_service_hero_image,
    type: "vivera-retainers",
  },
  {
    title: "CrownsVeneers",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: crowns_service_hero_image,
    type: "crowns",
  },
  {
    title: "Composite Veneers",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: composite_veneers_service_hero_image,
    type: "composite-veneers",
  },
  {
    title: "Composite Bonding",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: composite_bonding_service_hero_image,
    type: "composite-bonding",
  },
  {
    title: "Routine Examination",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: routine_examination_service_hero_image,
    type: "routine-examination",
  },
  {
    title: "Internal Tooth Whitening",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: internal_tooth_whiteneing_service_hero_image,
    type: "internal-tooth-whitening",
  },
  {
    title: "Composite Edge Bonding",
    price: "£650",
    description:
      "At our dental practice, we understand that missing teeth can affect not only your oral health but also your self-confidence. That's why we offer dental bridges as a solution for replacing missing teeth.",
    heroImage: composite_edge_bonding_service_hero_image,
    type: "composite-edge-bonding",
  },
];

export const popular_services: HomePopularServicesType[] = [
  {
    image: invisalign_service_image,
    href: "/services/cosmeticTreatment/invisalign",
    image_inverted: invisalign_service_image_dark,
    title: "Invisalign",
    description:
      "We offer Invisalign to boost self-confidence and well-being. This modern alternative to braces uses custom-made, clear aligners to gradually and comfortably shift teeth...",
  },
  {
    image: composite_bonding_service_image,
    href: "/services/cosmeticTreatment/composite-bonding",
    image_inverted: composite_bonding_service_image_dark,
    title: "Edge Bonding",
    description:
      "We understand that the look of your teeth can greatly impact your self-confidence and overall well-being. That's why we provide composite edge bonding as a solution to enhance the...",
  },
  {
    image: teeth_whitening_service_image,
    href: "/services/cosmeticTreatment/teeth-whitening",
    image_inverted: teeth_whitening_service_image_dark,
    title: "Teeth Whitening",
    description:
      "Teeth whitening is a convenient and effective way to achieve a brighter, more youthful-looking smile. Our dental practice offers this solution to boost self-confidence and improve...",
  },
  {
    image: general_dentistry_service_image,
    href: "/services/cosmeticTreatment/composite-veneers",
    image_inverted: general_dentistry_service_image_dark,
    title: "Composite Veneers",
    description:
      "We understand that the appearance of your teeth can affect your self-confidence and overall well-being. That's why we offer composite veneers as a cosmetic solution for improving the...",
  },
];

export const our_services: HomeOurServicesType[] = [
  {
    title: "Dentures",
    price: "from £450",
    href: "/services/generalTreatment/dentures",
    description:
      "Dentures replace some missing teeth while preserving natural ones, while complete dentures replace all missing teeth for full-mouth restoration.",
    image: dentures_services_image,
    image_inverted: dentures_service_image_dark,
  },
  {
    title: "Extractions",
    price: "from £350",
    href: "/services/generalTreatment/extractions",
    description:
      "Tooth extractions for decayed or damaged teeth are performed with minimal discomfort and detailed aftercare instructions.",
    image: extraction_services_image,
    image_inverted: extraction_sevices_image_dark,
  },
  {
    title: "Crowns / Veneers",
    price: "£650",
    href: "/services/generalTreatment/crowns-veneers",
    description:
      "Crowns cover damaged teeth, while veneers correct imperfections, both enhancing your smile with a natural, radiant appearance.",
    image: crown_veneers_services_image,
    image_inverted: crown_veneers_services_image_dark,
  },
  {
    title: "Hygienist",
    price: "£110",
    href: "/services/generalTreatment/hygienist",
    description:
      "A dental hygienist performs cleanings, removes plaque and tartar, and gives advice to maintain optimal oral health.",
    image: hygienist_services_image,
    image_inverted: hygienist_services_image_dark,
  },
  {
    title: "Root Canal Treatments",
    price: "from £495",
    href: "/services/generalTreatment/root-canal-treatments",
    description:
      "Rooted in Precision, Reviving Smiles: Expert Care for Painless Root Canal Treatments.",
    image: root_canal_services_image,
    image_inverted: root_canal_services_image_dark,
  },
  {
    title: "Bridges",
    price: "from £650",
    href: "/services/generalTreatment/bridges",
    description:
      "A dental bridge fills gaps with crowns and a false tooth, restoring your smile with natural-looking, colour-matched results.",
    image: bridges_services_image,
    image_inverted: bridges_services_image_dark,
  },
  {
    title: "White Fillings",
    price: "from £210",
    href: "/services/generalTreatment/white-fillings",
    description:
      "White fillings restore decayed teeth with a tooth-colored material, blending seamlessly with your natural teeth for a discreet, durable solution.",
    image: white_fillings_services_image,
    image_inverted: white_fillings_services_image_dark,
  },
  {
    title: "Examination",
    price: "£50",
    href: "/services/generalTreatment/examination",
    description:
      "We perform comprehensive dental examinations to assess oral health, identify issues, and create tailored treatment plans for your needs.",
    image: examination_services_image,
    image_inverted: examination_services_image_dark,
  },
  {
    title: "Scale and Polish",
    price: "",
    href: "/services/generalTreatment/scale-and-polish",
    description:
      "Scale and polish removes plaque and tartar, followed by a thorough cleaning and polishing, enhancing oral health and smile brightness.",
    image: examination_services_image,
    image_inverted: examination_services_image_dark,
  },
  {
    title: "Sedation",
    price: "",
    href: "/services/generalTreatment/sedation",
    description:
      "Dental sedation ensures a comfortable, anxiety-free experience during procedures by calming patients with medication.",
    image: examination_services_image,
    image_inverted: examination_services_image_dark,
  },
];

export const our_services2: HomeOurServicesType[] = [
  {
    title: "Invisalign",
    price: "from £2500",
    href: "/services/cosmeticTreatment/invisalign",
    description:
      "Invisalign aligners are comfortable, nearly invisible, and effectively straighten teeth with personalized guidance.",
    image: invisalign_service_icon,
    image_inverted: invisalign_service_icon_light,
  },
  {
    title: "Composite Veneers",
    price: "£110",
    href: "/services/cosmeticTreatment/composite-veneers",
    description:
      "Composite veneers quickly enhance your smile, fixing minor imperfections and improving teeth color and shape.",
    image: composite_veneers_service_icon,
    image_inverted: composite_veneers_service_icon_light,
  },
  {
    title: "Fixed Retainers",
    price: "£150",
    href: "/services/cosmeticTreatment/fixed-retainers",
    description:
      "Fixed retainers are custom-made, thin-wire appliances bonded to teeth, keeping them aligned after treatment for optimal results.",
    image: fixed_retainer_service_icon,
    image_inverted: fixed_retainer_service_icon_light,
  },
  {
    title: "Composite  Bonding",
    price: "from £300",
    href: "/services/cosmeticTreatment/composite-bonding",
    description:
      "Bridging Smiles, Connecting Confidence: Seamlessly Restore Your Complete Smile with Expertly Crafted Bridges.",
    image: composite_bonding_service_icon,
    image_inverted: composite_bonding_service_icon_light,
  },
  {
    title: "Teeth Whitening",
    price: "£350",
    href: "/services/cosmeticTreatment/teeth-whitening",
    description:
      "Teeth whitening is a convenient and effective solution for achieving a brighter, more youthful-looking smile. ",
    image: teeth_whitening_service_icon,
    image_inverted: teeth_whitening_service_icon_light,
  },

  {
    title: "Routine Examination",
    price: "£50",
    href: "/services/cosmeticTreatment/routine-examination",
    description:
      "Regular dental exams are crucial for maintaining oral health and preventing potential issues before they develop.",
    image: routine_examination_service_icon,
    image_inverted: routine_examination_service_icon_light,
  },
  {
    title: "Vivera Retainers",
    price: "Single £250 - Dual £450",
    href: "/services/cosmeticTreatment/vivera-retainers",
    description:
      "Vivera retainers are custom-made, durable, and nearly invisible, preserving teeth alignment after orthodontic treatment.",
    image: vivera_retainers_service_icon,
    image_inverted: vivera_retainers_service_icon_light,
  },
  {
    title: "Internal Tooth Whitening",
    price: "£350",
    href: "/services/cosmeticTreatment/internal-tooth-whitening",
    description:
      "Internal tooth whitening safely brightens discolored teeth from within, customized to enhance your smile and confidence.",
    image: internal_tooth_whitening_service_icon,
    image_inverted: internal_tooth_whitening_service_icon_light,
  },

  {
    title: "Crowns/Veneers",
    price: "£650",
    href: "/services/cosmeticTreatment/crowns-veneers",
    description:
      "Crowns and veneers are custom-made dental solutions designed to restore and enhance the appearance of your teeth.",
    image: crown_veneers_service_icon,
    image_inverted: crown_veneers_service_icon_light,
  },
  {
    title: "Implants",
    price: "from £2500",
    href: "/services/cosmeticTreatment/implants",
    description:
      "A dental implant is a titanium post inserted into the jawbone, providing a stable foundation for replacement teeth.",
    image: composite_bonding_service_icon,
    image_inverted: composite_bonding_service_icon_light,
  },

  {
    title: "Composite Edge Bonding",
    price: "£250",
    href: "/services/cosmeticTreatment/composite-edge-bonding",
    description:
      "Composite edge bonding enhances your teeth's appearance by applying and shaping tooth-colored resin to fix minor imperfections.",
    image: composite_edge_bonding_service_icon,
    image_inverted: composite_edge_bonding_service_icon_light,
  },

  // {
  //   title: "Dentures Stabilisation",
  //   price:"from £4700",
  //   href: "",
  //   description:
  //     "Elevate Your Smile, Embrace Hygiene: Where Precision Meets Care with Our Expert Hygienists.",
  //     image: composite_bonding_service_icon,
  //     image_inverted: composite_bonding_service_icon_light,
  // },
];

export const our_pricing_services: HomeOurServicesType[] = [
  {
    title: "Dentures",
    price: "from £450",
    href: "/services/generalTreatment/dentures",
    description:
      "Dentures replace some missing teeth while preserving natural ones, while complete dentures replace all missing teeth for full-mouth restoration.",
    image: dentures_services_image,
    image_inverted: dentures_service_image_dark,
  },

  {
    title: "Root Canal Treatments",
    price: "from £495",
    href: "/services/generalTreatment/root-canal-treatments",
    description:
      "Rooted in Precision, Reviving Smiles: Expert Care for Painless Root Canal Treatments.",
    image: root_canal_services_image,
    image_inverted: root_canal_services_image_dark,
  },

  {
    title: "Simple Extraction",
    price: "from £150",
    href: "/services/generalTreatment/extractions",
    description:
      "Gentle Farewell, Expert Extraction: Your Comfort is Our Priority in Every Tooth's Journey.",
    image: extraction_services_image,
    image_inverted: extraction_sevices_image_dark,
  },

  {
    title: "Complex Extraction",
    price: "from £280",
    href: "/services/generalTreatment/extractions",
    description:
      "Gentle Farewell, Expert Extraction: Your Comfort is Our Priority in Every Tooth's Journey.",
    image: extraction_services_image,
    image_inverted: extraction_sevices_image_dark,
  },

  {
    title: "Bridges",
    price: "from £650",
    href: "/services/generalTreatment/bridges",
    description:
      "A dental bridge fills gaps with crowns and a false tooth, restoring your smile with natural-looking, colour-matched results.",
    image: bridges_services_image,
    image_inverted: bridges_services_image_dark,
  },

  {
    title: "Crowns / Veneers",
    price: "£650",
    href: "/services/generalTreatment/crowns-veneers",
    description:
      "Crowns cover damaged teeth, while veneers correct imperfections, both enhancing your smile with a natural, radiant appearance.",
    image: crown_veneers_services_image,
    image_inverted: crown_veneers_services_image_dark,
  },
  {
    title: "White Fillings",
    price: "from £210",
    href: "/services/generalTreatment/white-fillings",
    description:
      "White fillings restore decayed teeth with a tooth-colored material, blending seamlessly with your natural teeth for a discreet, durable solution.",
    image: white_fillings_services_image,
    image_inverted: white_fillings_services_image_dark,
  },
  {
    title: "Hygienist",
    price: "£110",
    href: "/services/generalTreatment/hygienist",
    description:
      "A dental hygienist performs cleanings, removes plaque and tartar, and gives advice to maintain optimal oral health.",
    image: hygienist_services_image,
    image_inverted: hygienist_services_image_dark,
  },

  {
    title: "Scale and Polish",
    price: "£55",
    href: "/services/generalTreatment/scale-and-polish",
    description:
      "Scale and polish removes plaque and tartar, followed by a thorough cleaning and polishing, enhancing oral health and smile brightness.",
    image: hygienist_services_image,
    image_inverted: hygienist_services_image_dark,
  },

  {
    title: "Sedation",
    price: "from £250 (per session)",
    href: "/services/generalTreatment/sedation",
    description:
      "Dental sedation ensures a comfortable, anxiety-free experience during procedures by calming patients with medication.",
    image: hygienist_services_image,
    image_inverted: hygienist_services_image_dark,
  },

  {
    title: "Extraction Impacted Wisdom Teeth",
    price: "From £320",
    href: "/services/generalTreatment/extractions",
    description:
      "Gentle Farewell, Expert Extraction: Your Comfort is Our Priority in Every Tooth's Journey.",
    image: extraction_services_image,
    image_inverted: extraction_sevices_image_dark,
  },

  // {
  //   title: "Examination",
  //   price:"£50",
  //   href: "/services/generalTreatment/examination",
  //   description:
  //     "Beyond Every Smile Lies a Story: Thorough Examinations for Your Dental Well-being.",
  //   image: examination_services_image,
  //   image_inverted: examination_services_image_dark,
  // },
];

export const our_pricing_services2: HomeOurServicesType[] = [
  {
    title: "Composite Bonding",
    price: "from £300",
    href: "/services/cosmeticTreatment/composite-bonding",
    description:
      "Bridging Smiles, Connecting Confidence: Seamlessly Restore Your Complete Smile with Expertly Crafted Bridges.",
    image: composite_bonding_service_icon,
    image_inverted: composite_bonding_service_icon_light,
  },
  {
    title: "Fixed Retainers",
    price: "£150",
    href: "/services/cosmeticTreatment/fixed-retainers",
    description:
      "Gentle Farewell, Expert Extraction: Your Comfort is Our Priority in Every Tooth's Journey.",
    image: fixed_retainer_service_icon,
    image_inverted: fixed_retainer_service_icon_light,
  },
  {
    title: "Invisalign",
    price: "from £2500",
    href: "/services/cosmeticTreatment/invisalign",
    description:
      "Rediscover Confidence, Embrace Comfort: Tailored Dentures for Your Perfect Smile.",
    image: invisalign_service_icon,
    image_inverted: invisalign_service_icon_light,
  },
  {
    title: "Crowns/Veneers",
    price: "£650",
    href: "/services/cosmeticTreatment/crowns-veneers",
    description:
      "Crowning Glory, Veneer Elegance: Elevate Your Smile with Precision Crafted Perfection.",
    image: crown_veneers_service_icon,
    image_inverted: crown_veneers_service_icon_light,
  },
  {
    title: "Internal Tooth Whitening",
    price: "£350",
    href: "/services/cosmeticTreatment/internal-tooth-whitening",
    description:
      "Beyond Every Smile Lies a Story: Thorough Examinations for Your Dental Well-being.",
    image: internal_tooth_whitening_service_icon,
    image_inverted: internal_tooth_whitening_service_icon_light,
  },
  {
    title: "Teeth Whitening",
    price: "£350",
    href: "/services/cosmeticTreatment/teeth-whitening",
    description:
      "Crowning Glory, Veneer Elegance: Elevate Your Smile with Precision Crafted Perfection.",
    image: teeth_whitening_service_icon,
    image_inverted: teeth_whitening_service_icon_light,
  },

  {
    title: "Composite Edge Bonding",
    price: "£250",
    href: "/services/cosmeticTreatment/composite-edge-bonding",
    description:
      "Radiant Smiles, Seamless Repairs: Unveil the Beauty of White Fillings at Our Dental Oasis!",
    image: composite_edge_bonding_service_icon,
    image_inverted: composite_edge_bonding_service_icon_light,
  },

  {
    title: "Consultation",
    price: "£50",
    href: "/services/generalTreatment/examination",
    description:
      "Radiant Smiles, Seamless Repairs: Unveil the Beauty of White Fillings at Our Dental Oasis!",
    image: composite_edge_bonding_service_icon,
    image_inverted: composite_edge_bonding_service_icon_light,
  },

  {
    title: "Vivera Retainers",
    price: "Single £250 - Dual £450",
    href: "/services/cosmeticTreatment/vivera-retainers",
    description:
      "Elevate Your Smile, Embrace Hygiene: Where Precision Meets Care with Our Expert Hygienists.",
    image: vivera_retainers_service_icon,
    image_inverted: vivera_retainers_service_icon_light,
  },

  {
    title: "Implant (Single Tooth)",
    price: "from £2500",
    href: "services/cosmeticTreatment/implants",
    description:
      "Elevate Your Smile, Embrace Hygiene: Where Precision Meets Care with Our Expert Hygienists.",
    image: composite_bonding_service_icon,
    image_inverted: composite_bonding_service_icon_light,
  },
  {
    title: "Dentures Stabilisation",
    price: "from £4700",
    href: "/services/generalTreatment/dentures",
    description:
      "Elevate Your Smile, Embrace Hygiene: Where Precision Meets Care with Our Expert Hygienists.",
    image: composite_bonding_service_icon,
    image_inverted: composite_bonding_service_icon_light,
  },

  {
    title: "Multiple Teeth Replacement",
    price: "from £5700",
    href: "services/cosmeticTreatment/implants",
    description:
      "Elevate Your Smile, Embrace Hygiene: Where Precision Meets Care with Our Expert Hygienists.",
    image: composite_bonding_service_icon,
    image_inverted: composite_bonding_service_icon_light,
  },

  // {
  //   title: "Routine Examination",
  //   price:"£50",
  //   href: "/services/cosmeticTreatment/routine-examination",
  //   description:
  //     "Radiant Smiles, Seamless Repairs: Unveil the Beauty of White Fillings at Our Dental Oasis!",
  //   image: routine_examination_service_icon,
  //   image_inverted: routine_examination_service_icon_light,
  // },
];
