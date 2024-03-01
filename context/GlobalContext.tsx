import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import Reducers from "./Reducers";
import { case_studies } from "../constants";
import { CaseStudyTypeProp } from "../types";

interface Props {
  children?: ReactNode;
}

const initialState: any = {
  loading: false as boolean,
  selectedCase: case_studies[0] as CaseStudyTypeProp,
  pathToNavigate: null as string | null,
};

export const GlobalContext = createContext(initialState);

GlobalContext.displayName = "Dental Opulence";

export const GlobalContextProvider = ({ children }: Props) => {
  const [state, dispatch]: [any, Dispatch<any>] = useReducer(
    Reducers,
    initialState
  );

  const contextValue = {
    ...state,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
