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
  