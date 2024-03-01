import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { GlobalContextProvider } from "../../context/GlobalContext";
import ReduxProvider from "../../lib/state/reduxProvider";
import { AOSInit } from "../../lib/Aos";
import NavigationLoader from "../components/molecule/NavigationLoader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <AOSInit />

      <GlobalContextProvider>
        <NavigationLoader />
        <Component {...pageProps} />
      </GlobalContextProvider>
    </ReduxProvider>
  );
}
