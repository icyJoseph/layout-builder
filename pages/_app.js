import App from "next/app";
import Head from "next/head";
import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Rebass Next JS</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              body {
                font-family: "Open Sans", monospace;
                margin: 0;
                padding: 0;
                background: #181b1b;
              }
            `}
          />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
