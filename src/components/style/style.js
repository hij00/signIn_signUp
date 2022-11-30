import styled from "styled-components";
import { MainStyle } from "../../components/style/GlobalStyle";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 20px;
  color: ${MainStyle.blackColor};
`;

export const InputWrap = styled.div`
  margin: 0 0 100px;
  width: 100%;
  border-bottom: 1px solid ${MainStyle.blackColor};
  input {
    all: unset;
    width: 100%;
    color: ${MainStyle.blackColor};
    padding: 10px 0;
  }
  input::placeholder {
    color: ${MainStyle.blackColor};
    opacity: 0.8;
  }
  svg {
    color: white;
  }
`;

export const ErrorMessage = styled.h3`
  color: crimson;
  font-size: 16px;
  font-weight: 700;
`;

export const InputBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: ${MainStyle.blackColor};
  border-radius: 50px;
  color: white;
  opacity: 0.7;
  font-size: 24px;
  font-weight: 700;
  padding: 12px 0;
  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const MainBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  /* background-color: white; */
  border: 1px solid ${MainStyle.blackColor};
  color: ${MainStyle.blackColor};
  border-radius: 50px;
  width: 100%;
  padding: 12px 0;
  &:hover {
    background-color: ${MainStyle.blackColor};
    color: white;
    transition: 0.5s;
  }
`;
