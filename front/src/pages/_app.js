import NavBarComponent from "@/components/NavBarComponent/NavBarComponent";
import DonutsProvider from "../core/donuts/DonutsProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <DonutsProvider>
      <NavBarComponent />
      <Component {...pageProps} />
    </DonutsProvider>
  );
}
