import { HomeOurServices } from "@/components/compound";
import Home from "@/pages";

export enum REDUCERS {
  SET_LOADING = "SET_LOADING",
  SET_SELECTED_CASE = "SET_SELECTED_CASE",
  SET_PATH_TO_NAVIGATE = "SET_PATH_TO_NAVIGATE",
  SET_SERVICE_PAGE_DATA = "SET_SERVICE_PAGE_DATA",
  SET_MENU_STATE = "SET_MENU_STATE",
}

export type ActionType = {
  payload: any;
  type: REDUCERS;
};

export type ScreenMobileType = "true" | "false" | "unactive";

export type casesType =
  | "all"
  | "composite_edge_bonding"
  | "combination_treatments"
  | "invisalign_teeth_straightening"
  | "composite_veneers"
  | "porcelain_veneers"
  | "white_fillings"
  | "others";

export type CaseStudyTypeProp = {
  type: casesType;
  name: string;
  images: any[];
};

export type HomePopularServicesType = {
  title: string;
  href: string;
  description: string;
  image: any;
  image_inverted?: any;
};

export type HomeOurServicesType = {
  processes:any;
};

export type TestimonialType = {
  name: string;
  testimony: string;
  profilePicture: any;
};

export type FaqType = {
  question: string;
  answer: string;
};

export type AboutAwardType = {
  title: string;
  detail: string;
  image: any;
};

export type TeamType = {
  name: string;
  title: string;
  image: any;
};

export type ServiceElevateType = {
  title: string;
  description: string;
  number_img: any;
};

export interface FormProps {
  // stepThree: HelpSelectItem[];
  handleStepChange: (step: string) => void;
  handleOptionSelect: (option: string, title: string) => void;
}

export interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  deadline: string;
  message: string;
}

export type ServicePageDataType = {
  title: string;
  description: string;
  price: string;
  heroImage?: any;
  type: serviceType;
  // serviceVideo: string; 
};

export type serviceType =
  | "bridges"
  | "crowns-veneers"
  | "dentures"
  | "examination"
  | "extractions"
  | "hygienist"
  | "white-fillings"
  | "root-canal-treatments"
  | "invisalign"
  | "fixed-retainers"
  | "teeth-whitening"
  | "vivera-retainers"
  | "crowns"
  | "composite-veneers"
  | "composite-bonding"
  | "routine-examination"
  | "internal-tooth-whitening"
  | "composite-edge-bonding";
