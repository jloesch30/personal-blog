import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

/* 
Sets up the theme interface for intellisense
*/
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
  }
}
