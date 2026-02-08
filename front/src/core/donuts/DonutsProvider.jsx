import React from "react";
import { DonutsContext } from "./DonutsContext";

export default function DonutsProvider({ children }) {
  return <DonutsContext.Provider value={{}}>{children}</DonutsContext.Provider>;
}
