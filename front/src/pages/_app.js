import NavBarComponent from "@/components/NavBarComponent/NavBarComponent";
import layout from "@/styles/layout.module.css";
import DonutsProvider from "@/core/donuts/DonutsProvider";
import FavoritesProvider from "@/core/favorites/FavoritesProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DonutsProvider>
      <FavoritesProvider>
        <NavBarComponent />
        <main className={layout.container}>
          <Component {...pageProps} />
        </main>
      </FavoritesProvider>
    </DonutsProvider>
  );
}
