import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const MainStyle = {
  padding: "0 100px",
  blackColor: "#1d1d1d",
  grayColor: "#999",
  rgbColor: "29,29,29",
};

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{
  font-family: 'Noto Sans KR', sans-serif;

}
a{
  text-decoration: none;
  color: ${MainStyle.blackColor};
}
`;
