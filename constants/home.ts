import { HomeOurServicesType } from "../types";

import increase_confidence_icon from "../assets/images/increase-confidence-icon.svg";
import unleash_charisma_icon from "../assets/images/unleash-charisma-icon.svg";
import empower_presence_icon from "../assets/images/empower-prescense-icon.svg";

import result_image1 from "../assets/images/result-image1.svg";
import result_image2 from "../assets/images/result-image2.svg";
import result_image3 from "../assets/images/result-image3.svg";
import result_image4 from "../assets/images/result-image4.svg";
import result_image5 from "../assets/images/result-image5.svg";
import result_image6 from "../assets/images/result-image6.svg";
import result_image7 from "../assets/images/result-image7.svg";
import result_image8 from "../assets/images/result-image8.svg";

import process_initial_inquiry_image from "../assets/images/process-question-image.svg";
import process_initial_examination_image from "../assets/images/process-initial-examination-image.svg";
import process_treatment_plan_image from "../assets/images/process-treatment-planning.svg";
import process_conduct_treatment_image from "../assets/images/process-contact-treatment.svg";
import process_care_maintenance_image from "../assets/images/process-care-maintenance.svg";

import HMim1 from "../assets/BMimges/MMimgPair1.webp";
import HMim2 from "../assets/BMimges/MMimgPair2.webp";
import HMim3 from "../assets/BMimges/MMimgPair3.webp";
import HMim4 from "../assets/BMimges/MMimgPair4.webp";
import HMim5 from "../assets/BMimges/MMimgPair5.webp";
import HMim6 from "../assets/BMimges/MMimgPair6.webp";
import HMim7 from "../assets/BMimges/MMimgPair7.webp";
import HMim8 from "../assets/BMimges/MMimgPair8.webp";
import HMim9 from "../assets/BMimges/MMimgPair9.webp";
import HMim10 from "../assets/BMimges/MMimgPair10.png";
import HMim11 from "../assets/BMimges/MMimgPair11.webp";
import HMim12 from "../assets/BMimges/MMimgPair12.webp";

export const change_life: HomeOurServicesType[] = [
  {
    title: "Increase Your Confidence",
    price: "",
    href: "",
    description:
      "Enhance self-esteem with improved oral health and a brighter smile.",
    image: increase_confidence_icon,
  },
  {
    title: "Unleash Your Charisma",
    href: "",
    price: "",
    description:
      "Enhance your natural appeal with a radiant, confident smile..",
    image: unleash_charisma_icon,
  },
  {
    title: "Empower Your Presence",
    href: "",
    price: "",
    description:
      "Strengthen your overall impact with a vibrant, assured smile.",
    image: empower_presence_icon,
  },
];

export const home_result_images = [
  result_image1,
  result_image2,
  result_image3,
  result_image4,
  result_image5,
  result_image6,
  result_image7,
  result_image8,
];

export const home_process: HomeOurServicesType[] = [
  {
    title: "Initial Enquiry",
    price: "",
    href: "",
    description:
      "During the initial enquiry process, you can contact Dental Opulence by phone or email to schedule an appointment or ask any questions you may have.",
    image: process_initial_inquiry_image,
  },
  {
    title: "Initial Examination",
    price: "",
    href: "",
    description:
      "At Dental Opulence, our initial examinations set the gold standard for comprehensive dental care. We prioritise your oral health journey with precision and care.",
    image: process_initial_examination_image,
  },
  {
    title: "Treatment Planning",
    price: "",
    href: "",
    description:
      "At Dental Opulence, our meticulous treatment planning is tailored to your unique needs. We design personalised plans to ensure optimal oral health and stunning smiles.",
    image: process_treatment_plan_image,
  },
  {
    title: "Conduct Treatment ",
    price: "",
    href: "",
    description:
      "At Dental Opulence, our expert team uses cutting-edge technology to deliver exceptional results with skill & precision, ensuring a comfortable experience for every patient.",
    image: process_conduct_treatment_image,
  },
  {
    title: "Care & Maintenance ",
    price: "",
    href: "",
    description:
      " At Dental Opulence, our commitment to your smile doesn't end after treatment. We offer tailored care and maintenance services to preserve your beautiful smile for years to come.",
    image: process_care_maintenance_image,
  },
];

// Form constants - these appear to be unrelated to dental services
// Keeping them in a separate section for future refactoring

export const customerSelect = [
  {
    text: "A Developer",
    value: "developerType",
  },
  {
    text: "A HomeOwner",
    value: "homeOwnerType",
  },
];

export const stepOne = [
  {
    text: "Bathroom Suites",
    value: "bathroomSuites",
  },
  {
    text: "Bathroom Furniture",
    value: "bathroomFurniture",
  },
];

export const stepTwo = [
  {
    text: "Commercial",
    value: "commercial",
  },
  {
    text: "Residential",
    value: "residential",
  },
];

export const helpSelect = [
  {
    text: "Measure my bathroom",
    value: "measureBathroom",
  },
  {
    text: "Bathroom Planning",
    value: "bathroomPlanning",
  },
  {
    text: "Bathroom Installation",
    value: "bathroomInstallation",
  },
];

export const commercialForm = [
  {
    nameResi: "Hotel",
    valueResi: "HOTEL",
    optionsResi: [
      { text: "Whole Hotel", value: "wholeHotel" },
      { text: "Ensuit", value: "ensuit" },
    ],
  },
  {
    nameResi: "Retail",
    valueResi: "RETAIL",
    optionsResi: [
      { text: "Sanitary ware only", value: "sanitary" },
      { text: "Tilling", value: "tilling" },
      { text: "Furniture", value: "furniture" },
      { text: "Shower encloser", value: "showerEncloser" },
      { text: "Brassware", value: "brassware" },
      { text: "Full Bathroom", value: "fullBathroom" },
    ],
  },
  {
    nameResi: "Office",
    valueResi: "OFFICE",
    optionsResi: [
      { text: "Sanitary ware only", value: "sanitary" },
      { text: "Tilling", value: "tilling" },
      { text: "Furniture", value: "furniture" },
      { text: "Shower encloser", value: "showerEncloser" },
      { text: "Brassware", value: "brassware" },
      { text: "Full Bathroom", value: "fullBathroom" },
    ],
  },
  {
    nameResi: "Student accomodation",
    valueResi: "STUDENT",
    optionsResi: [
      { text: "Sanitary ware only", value: "sanitary" },
      { text: "Tilling", value: "tilling" },
      { text: "Furniture", value: "furniture" },
      { text: "Shower encloser", value: "showerEncloser" },
      { text: "Brassware", value: "brassware" },
      { text: "Full Bathroom", value: "fullBathroom" },
    ],
  },
];

export const residentialForm = [
  {
    nameResi: "A bathroom",
    valueResi: "BATHROOM",
    optionsResi: [
      { text: "Sanitary ware only", value: "sanitary" },
      { text: "Tilling", value: "tilling" },
      { text: "Furniture", value: "furniture" },
      { text: "Shower encloser", value: "showerEncloser" },
      { text: "Brassware", value: "brassware" },
      { text: "Full Bathroom", value: "fullBathroom" },
    ],
  },
  {
    nameResi: "An en-suit",
    valueResi: "ENSUIT",
    optionsResi: [
      { text: "Sanitary ware only", value: "sanitary" },
      { text: "Tilling", value: "tilling" },
      { text: "Furniture", value: "furniture" },
      { text: "Shower encloser", value: "showerEncloser" },
      { text: "Brassware", value: "brassware" },
      { text: "Full Bathroom", value: "fullBathroom" },
    ],
  },
  {
    nameResi: "A cloak room",
    valueResi: "CLOAKROOM",
    optionsResi: [
      { text: "Sanitary ware only", value: "sanitary" },
      { text: "Tilling", value: "tilling" },
      { text: "Furniture", value: "furniture" },
      { text: "Shower encloser", value: "showerEncloser" },
      { text: "Brassware", value: "brassware" },
      { text: "Full Bathroom", value: "fullBathroom" },
    ],
  },
  {
    nameResi: "A wet room",
    valueResi: "WETROOM",
    optionsResi: [
      { text: "Sanitary ware only", value: "sanitary" },
      { text: "Tilling", value: "tilling" },
      { text: "Furniture", value: "furniture" },
      { text: "Shower encloser", value: "showerEncloser" },
      { text: "Brassware", value: "brassware" },
      { text: "Full Bathroom", value: "fullBathroom" },
    ],
  },
  {
    nameResi: "A multi bathroom house",
    valueResi: "MULTIHOUSE",
    optionsResi: [
      { text: "Sanitary ware only", value: "sanitary" },
      { text: "Tilling", value: "tilling" },
      { text: "Furniture", value: "furniture" },
      { text: "Shower encloser", value: "showerEncloser" },
      { text: "Brassware", value: "brassware" },
      { text: "Full Bathroom", value: "fullBathroom" },
    ],
  },
];

export const residentialFormOne = [
  {
    text: "Small (Under 20 rooms)",
    value: "SMALL",
  },
  {
    text: "Medium (20-50 rooms)",
    value: "MEDIUM",
  },
  {
    text: "Large (50+ rooms)",
    value: "LARGE",
  },
];

export const residentialFormTwo = [
  {
    text: "Single Room",
    value: "singleRoom",
  },
  {
    text: "All ensuit bathroom",
    value: "allEnsuitBathroom",
  },
  {
    text: "Part ensuite bathroom",
    value: "partEnsuiteBathroom",
  },
];

export const residentialFormThree = [
  {
    text: "Small (Under 20 rooms)",
    value: "SMALL",
  },
  {
    text: "Medium (20-50 rooms)",
    value: "MEDIUM",
  },
  {
    text: "Large (50+ rooms)",
    value: "LARGE",
  },
];

export const commercialFormOne = [
  {
    text: "Single Store",
    value: "singleStore",
  },
  {
    text: "A few Stores",
    value: "fewStores",
  },
  {
    text: "10+ Stores",
    value: "tenPlusStores",
  },
];

export const commercialFormFive = [
  {
    text: "Small (10-30 units)",
    value: "SMALL",
  },
  {
    text: "Medium (30-100 units)",
    value: "MEDIUM",
  },
  {
    text: "Large (100+ units)",
    value: "LARGE",
  },
];

export const commercialFormSix = [
  {
    text: "20-80 sqm",
    value: "TWENTYEIGHTY",
  },
  {
    text: "80-150 sqm",
    value: "EIGHTYONEFIFTY",
  },
  {
    text: "150sqm+",
    value: "ONEFIFTYPLUS",
  },
];

export const checkPointOne = [
  {
    text: "Baths",
    value: "bath",
  },
  {
    text: "Basins",
    value: "basins",
  },
  {
    text: "WC / Urinals",
    value: "wcUrinals",
  },
  {
    text: "Showers",
    value: "showers",
  },
];

export const checkPointTwo = [
  {
    text: "Tiles",
    value: "tiles",
  },
  {
    text: "Floor Tiles",
    value: "floorTiles",
  },
  {
    text: "Wall Panels",
    value: "wallPanels",
  },
];

export const checkPointThree = [
  {
    text: "Vanity Units",
    value: "vanity",
  },
  {
    text: "Storage Units",
    value: "storage",
  },
  {
    text: "WC Units",
    value: "wcUnits",
  },
  {
    text: "Mirrors",
    value: "mirrors",
  },
];

export const checkPointFour = [
  {
    text: "Shower Enclosures",
    value: "showerEnclosures",
  },
  {
    text: "Shower Trays",
    value: "showerTrays",
  },
  {
    text: "Shower Doors",
    value: "showerDoors",
  },
  {
    text: "Bath Screens",
    value: "bathScreens",
  },
];

export const checkPointFive = [
  {
    text: "Taps",
    value: "taps",
  },
  {
    text: "Mixers",
    value: "mixers",
  },
  {
    text: "Showerheads",
    value: "showerheads",
  },
  {
    text: "Bath Fillers",
    value: "bathFillers",
  },
  {
    text: "Accessories (Towel Rails, Toilet Roll Holders)",
    value: "accessories",
  },
];

export const checkPointSix = [
  {
    text: "Underfloor Heating",
    value: "underfloorHeating",
  },
  {
    text: "Heated Towel Rails",
    value: "heatedTowelRails",
  },
  {
    text: "Electric Showers",
    value: "electricShowers",
  },
  {
    text: "Extractor Fans",
    value: "extractorFans",
  },
];

export const checkPointSeven = [
  {
    text: "Lighting Fixtures",
    value: "lightingFixtures",
  },
  {
    text: "LED Mirrors",
    value: "ledMirrors",
  },
  {
    text: "Ceiling Lights",
    value: "ceilingLights",
  },
  {
    text: "Wall Lights",
    value: "wallLights",
  },
  {
    text: "Under-Cabinet Lighting",
    value: "underCabinetLighting",
  },
];
