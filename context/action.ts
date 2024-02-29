import { Dispatch } from "react";
import { CaseStudyTypeProp, REDUCERS } from '../types'
import { DispatchType } from '../interface'

export const handleSetSelectedCaseStudy = (
    dispatch: Dispatch<DispatchType>,
    payload: CaseStudyTypeProp
  ) => {
    dispatch({
      type: REDUCERS.SET_SELECTED_CASE,
      payload,
    });
  };
  