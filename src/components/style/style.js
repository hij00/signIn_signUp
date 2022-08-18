import styled from "styled-components";
import { MainStyle } from "../../components/style/GlobalStyle";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`;

export const Title = styled.div``;

export const InWrap = styled.div`
  width: 100%;
  margin-bottom: 100px;
  border-bottom: 1px solid ${MainStyle.mainColor};
  input {
    all: unset;
    width: 100%;
  }
`;

export const Btn = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: ${MainStyle.mainColor};
  color: white;
  padding: 10px 0;
`;