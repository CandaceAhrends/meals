import React, { useReducer } from "react";
export const StoreContext = React.createContext({ test: 'test', what: 'what'});

export const ADD_MEAL = "ADD_MEAL";
const initialState = {
  meals: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MEAL:
      return { ...state, meals: [...state.meals, action.payload] };
    default:
      return { ...state };
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
