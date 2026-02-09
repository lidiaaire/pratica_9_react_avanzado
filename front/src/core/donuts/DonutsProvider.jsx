// Proveedor de contexto para los donuts
// Hace la llamada al back para cargar los donuts y compartirlos en toda la aplicación

import React from "react";
import { DonutsContext } from "./DonutsContext";

export default function DonutsProvider({ children }) {
  return <DonutsContext.Provider value={{}}>{children}</DonutsContext.Provider>;
}
