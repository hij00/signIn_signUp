import styled from "styled-components";
import { MainStyle } from "../../components/style/GlobalStyle";

export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 20px;
  color: ${MainStyle.mainColor};
`;

export const ConWrap = styled.div`
  margin: 0 0 100px;
  opacity: 0.8;
  svg {
    color: white;
  }
`;

export const Con = styled.div`
  margin: 10px 0;
  color: white;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 100;
  text-align: center;
  svg {
    margin-right: 10px;
  }
  &:hover {
    opacity: 1;
  }
`;

export const InWrap = styled.div`
  width: 100%;
  margin-bottom: 10px;
  border-bottom: 1px solid white;

  input {
    all: unset;
    width: 100%;
    color: white;
    padding: 10px 0;
  }
  input::placeholder {
    color: white;
  }
`;

export const ErrorM = styled.div`
  color: crimson;
  font-size: 16px;
  font-weight: 700;
`;

export const Btn = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: white;
  border-radius: 50px;
  color: ${MainStyle.mainColor};
  opacity: 0.7;
  font-size: 24px;
  font-weight: 700;
  padding: 10px 0;
  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
`;

export const SBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  /* border: 1.5px solid ${MainStyle.mainColor}; */
  background-color: ${MainStyle.mainColor};
  color: white;
  border-radius: 50px;
  width: 100%;
  padding: 12px 0;
  /* color: rgba(${MainStyle.rgbColor}, 0.5); */
  opacity: 0.5;
  &:hover {
    opacity: 1;
    transition: 0.5s;
  }
`;
