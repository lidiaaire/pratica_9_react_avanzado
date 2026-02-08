import NavBarComponent from "@/components/NavBarComponent/NavBarComponent";
import DonutsProvider from "../core/donuts/DonutsProvider";
import FavoritesProvider from "../core/favorites/FavoritesProvider";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DonutsProvider>
      <FavoritesProvider>
        <NavBarComponent />
        <Component {...pageProps} />
      </FavoritesProvider>
    </DonutsProvider>
  );
}
