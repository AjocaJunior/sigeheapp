import React, { createContext, useReducer } from "react";

const INITIAL_STATE = {
  curso: undefined,
  semestre: undefined,
};

export const SearchContext = createContext(INITIAL_STATE);

const searchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
    
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, dispatch] = useReducer(searchReducer, INITIAL_STATE);

  return(

 
    <SearchContext.Provider
      value={{ curso: state.curso, semestre: state.semestre, dispatch }}
    >
      {children}
    </SearchContext.Provider>
   )
} ;
