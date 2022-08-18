import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { MainStyle } from "../../style/GlobalStyle";
import { Btn, InWrap, Title, Wrap } from "../../style/style";
import { LoginSet } from "./LoginSet";

export const Login = () => {
  const { handleSubmit, register } = useForm({ mode: "onChange" });
  // const [joinCon, setJoinCon] = useState(left);
  const [boxEl, setBoxEl] = useState("0");

  const handleClick = () => {
    // setBoxEl(`${boxEl === "left" ? "right" : "left"}`);
    setBoxEl(`${boxEl === "0" ? "100%" : "0"}`);
  };

  return (
    <AllWrap>
      <Box a={boxEl}></Box>
      <LConWrap>
        {/* <LoginSet /> */}
        <JoinText>
          <Title>이미 계정이 있으신가요?</Title>
          <Btn onClick={handleClick}>로그인하기</Btn>
        </JoinText>
      </LConWrap>
      <RConWrap>
        <JoinText>
          <Title>처음 방문하셨나요?</Title>
          <Btn onClick={handleClick}>계정 만들기</Btn>
        </JoinText>
        <Wrap
        // style={{ display: `${joinCon === "left" ? "none" : "flex"}` }}
        >
          <Title></Title>
          <InWrap>
            <input placeholder="아이디를 입력해주세요"></input>
          </InWrap>
          <InWrap>
            <input placeholder="비밀번호를 입력해주세요"></input>
          </InWrap>
          <Btn>로그인</Btn>
        </Wrap>
      </RConWrap>
    </AllWrap>
  );
};

const AllWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  background-color: beige;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
  transform: translateX(${(props) => props.a});
`;

const LConWrap = styled.div`
  width: 50%;
`;

const RConWrap = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;

  padding: ${MainStyle.padding};
`;

const JoinText = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
