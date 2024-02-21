import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import Reducers from "./Reducers";

interface Props {
  children?: ReactNode;
}

const initialState: any = {
  loading: false as boolean,
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
