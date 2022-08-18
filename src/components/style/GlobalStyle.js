import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const MainStyle = {
  padding: "0 100px",
  mainColor: "#1d1d1d",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
`;