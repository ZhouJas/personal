import { createGlobalStyle } from "styled-components";

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string;

    colors?: {
      main?: string;
      secondary?: string;
    };
    body?:string;
    fontColor?:string;
  }
}

export const Themes = {
  lightTheme: {
    body: "#ffffff",
    fontColor: "#1f1f1f",
  },
  darkTheme: {
    body: "#1f1f1f",
    fontColor: "#d4d4d4",
  },
};

export const GlobalStyles = createGlobalStyle`
body {
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
}
`;