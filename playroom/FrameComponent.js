import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

const globalCss = css`
  ${"@import (https://fonts.googleapis.com/css?family=Open+Sans);"};

  body {
    font-family: "Open Sans", monospace;
    margin: 0;
    padding: 0;
    background: #181b1b;
  }
`;

export function Frame({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalCss} />
      {children}>
    </ThemeProvider>
  );
}

export default Frame;
