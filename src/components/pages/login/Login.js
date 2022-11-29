import { useState } from "react";
import styled from "styled-components";
import { MainStyle } from "../../style/GlobalStyle";
import { SBtn, Title } from "../../style/style";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export const Login = () => {
  // =================애니메이션
  const [boxEl, setBoxEl] = useState("0");
  const handleClick = () => {
    setBoxEl(`${boxEl === "0" ? "-100%" : "0"}`);
  };

  return (
    <AllWrap>
      <BlurImg>
        <Box a={boxEl}></Box>
        <Con>
          {/* ==========회원가입 */}
          <LConWrap>
            <JoinText
              style={{
                display: `${boxEl === "0" ? "flex" : "none"}`,
              }}
            >
              <Title>처음 방문하셨나요?</Title>
              <Desc>이메일로 손쉽게 회원가입하세요!</Desc>
              <SBtn onClick={handleClick}>계정 만들기</SBtn>
            </JoinText>

            {/* ===================회원가입폼 */}
            <LCon
              style={{
                display: `${boxEl === "0" ? "none" : "flex"}`,
              }}
            >
              <SignUp handleClick={handleClick} />
            </LCon>
          </LConWrap>

          {/* ==========로그인 */}
          <RConWrap>
            <JoinText
              style={{
                display: `${boxEl === "0" ? "none" : "flex"}`,
              }}
            >
              <Title>이미 계정이 있으신가요?</Title>
              <SBtn onClick={handleClick}>로그인하기</SBtn>
            </JoinText>

            {/* ===================로그인폼 */}
            <RCon
              style={{
                display: `${boxEl === "0" ? "flex" : "none"}`,
              }}
            >
              <SignIn />
            </RCon>
          </RConWrap>
        </Con>
      </BlurImg>
    </AllWrap>
  );
};

const AllWrap = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(255, 236, 195, 1) 100%
  );
`;

const BlurImg = styled.div`
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  background-color: rgba(${MainStyle.rgbColor}, 0.7);
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.1s;
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
  align-items: center;
  flex-direction: column;
`;

const Desc = styled.div`
  margin-bottom: 150px;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.5;
`;
