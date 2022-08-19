import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { MainStyle } from "../../style/GlobalStyle";
import { Btn, InWrap, Title, Wrap } from "../../style/style";
import { LoginSet } from "./LoginSet";

export const Login = () => {
  const { handleSubmit, register } = useForm({ mode: "onChange" });
  const [boxEl, setBoxEl] = useState("0");
  const [joinCon, setJoinCon] = useState();
  const [loginCon, setLoginCon] = useState();

  const handleClick = () => {
    // setBoxEl(`${boxEl === "left" ? "right" : "left"}`);
    setBoxEl(`${boxEl === "0" ? "100%" : "0"}`);
  };

  return (
    <AllWrap>
      <Box a={boxEl}></Box>
      <Con>
        <LConWrap>
          <JoinText
            style={{
              display: `${boxEl === "0" ? "none" : "flex"}`,
            }}
          >
            <Title>이미 계정이 있으신가요?</Title>
            <Btn onClick={handleClick}>로그인하기</Btn>
          </JoinText>
          <LCon
            style={{
              display: `${boxEl === "0" ? "flex" : "none"}`,
            }}
          >
            <LoginSet />
          </LCon>
        </LConWrap>
        {/* ======================== */}
        <RConWrap>
          <JoinText
            style={{
              display: `${boxEl === "0" ? "flex" : "none"}`,
            }}
          >
            <Title>처음 방문하셨나요?</Title>
            <Btn onClick={handleClick}>계정 만들기</Btn>
          </JoinText>
          <RCon
            style={{
              display: `${boxEl === "0" ? "none" : "flex"}`,
            }}
          >
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
          </RCon>
        </RConWrap>
      </Con>
    </AllWrap>
  );
};

const AllWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: gray;
  z-index: 1;
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
  z-index: 2;
`;

const Con = styled.div`
  z-index: 999;
`;

const LConWrap = styled.div`
  width: 50%;
  padding: ${MainStyle.padding};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;

const RConWrap = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  padding: ${MainStyle.padding};
  z-index: 999;
`;

const LCon = styled.div``;

const RCon = styled.div``;

const JoinText = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
