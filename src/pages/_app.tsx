import { Provider } from "react-redux";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "@/@/ni18n.config";

import { store } from "@/redux/store";
import TopNavigation from "@/features/TopNavigation";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

export function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <TopNavigation />
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithI18Next(App, ni18nConfig);
