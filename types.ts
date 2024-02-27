import { HomeOurServices } from "@/components/compound";
import Home from "@/pages";

export enum REDUCERS {
    SET_LOADING = "SET_LOADING",
  }
  
  export type ActionType = {
    payload: any;
    type: REDUCERS;
  };
  
  export type ScreenMobileType = "true" | "false" | "unactive";


  export type HomePopularServicesType = {
    title: string;
    description: string;
    image: any;
  }

  export type HomeOurServicesType = {
    title: string;
    description: string;
    image: any;
    image_inverted?: any;
  }
  
  
export type TestimonialType = {
  name: string;
  testimony: string;
  profilePicture: any
}

export type FaqType = {
  question: string;
  answer: string;
}


export type AboutAwardType = {
  title: string;
  detail: string;
  image: any
}


export  interface FormProps {
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
  