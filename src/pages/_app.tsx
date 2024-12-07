import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "@/ni18n.config";

import type { AppProps } from "next/app";

import "@/src/styles/globals.css";

export function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithI18Next(App, ni18nConfig);
