import React, { createContext, useEffect, useState } from "react";

export const ConverterContext = createContext();

const ConverterContextProvider = props => {
  const [pln, setPln] = useState(() => {
    return localStorage.getItem("pln")
      ? JSON.parse(localStorage.getItem("pln"))
      : "4.00";
  });

  useEffect(() => {
    localStorage.setItem("pln", JSON.stringify(pln));
  }, [pln]);
  return (
    <ConverterContext.Provider value={{ pln, setPln }}>
      {props.children}
    </ConverterContext.Provider>
  );
};

export default ConverterContextProvider;
