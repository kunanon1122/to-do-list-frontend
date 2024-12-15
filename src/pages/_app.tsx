import { Provider } from "react-redux";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "@/@/ni18n.config";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { store } from "@/redux/store";
import TopNavigation from "@/features/TopNavigation";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#b6c2cf", // กำหนดสีของตัวอักษรเป็นสีแดง
    },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeightLight: 300,
    fontSize: 14,
  },
  // color text red

  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#22272b",
        },
      },
    },
  },
});

export function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <TopNavigation />
        <Component {...pageProps} className="font-light" />
      </ThemeProvider>
    </Provider>
  );
}

export default appWithI18Next(App, ni18nConfig);
