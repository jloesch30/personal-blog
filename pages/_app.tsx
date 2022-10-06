import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Josh Loesch</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
