import React, { useContext } from "react";
import { StoreContext } from "../context/store";
const useStateValue = key => {
  const { state } = useContext(StoreContext);

  return state[key];
};

export default useStateValue;
