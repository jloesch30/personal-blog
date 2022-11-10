import { DefaultTheme } from "styled-components";

/* 
Define themes here as they are passed to all styled components in `props`
*/
export const theme: DefaultTheme = {
  borderRadius: "4px",
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
      gray: "#393e46",
    },
    primary: {
      main: "#726a95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
  typography: {
    landing: {
      h1: {
        fontSize: "7em",
        fontWeight: "bold",
        color: "#eb583f",
      },
      h2: {
        fontSize: "6em",
        fontWeight: "bold",
      },
    },
    base: {
      h1: {
        fontSize: "2em",
        fontWeight: 700,
        color: "#eb583f",
      },
      h2: {
        fontSize: "1em",
        fontWeight: 700,
        color: "#393e46",
      },
    },
  },
  spacing: {
    blog: {
      content: {
        mobile: {
          marginInline: "3rem",
        },
      },
    },
  },
};
