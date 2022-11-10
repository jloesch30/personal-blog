import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import Header from "../components/mdx/headers";
import { PostParams } from "./blog/types";

const components = {
  h1: Header.H1,
  h2: Header.H2,
};

interface BaseProps extends AppProps {
  posts: PostParams[];
}

function MyApp({ Component, pageProps, posts }: BaseProps) {
  return (
    <>
      <Head>
        <title>Josh Loesch</title>
      </Head>
      <ThemeProvider theme={theme}>
        <MDXProvider components={components}>
          <GlobalStyles />
          <Component {...pageProps} />
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
