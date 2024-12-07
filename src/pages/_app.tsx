import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "@/ni18n.config";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

export function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithI18Next(App, ni18nConfig);
