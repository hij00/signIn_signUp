import { useState } from "react";
import styled from "styled-components";
import { MainStyle } from "../../style/GlobalStyle";
import { MainBtn, Title } from "../../style/style";
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
      <WhiteBox a={boxEl}></WhiteBox>
      {/* ==========회원가입 */}
      <LeftConWrap>
        <MainText
          style={{
            display: `${boxEl === "0" ? "flex" : "none"}`,
          }}
        >
          <Title>처음 방문하셨나요?</Title>
          <Desc>아이디와 비밀번호만 누르면 회원가입 완료!</Desc>
          <MainBtn onClick={handleClick}>계정 만들기</MainBtn>
        </MainText>

        {/* ===================회원가입폼 */}
        <LeftCon
          style={{
            display: `${boxEl === "0" ? "none" : "flex"}`,
          }}
        >
          <SignUp handleClick={handleClick} />
        </LeftCon>
      </LeftConWrap>

      {/* ==========로그인 */}
      <RightConWrap>
        <MainText
          style={{
            display: `${boxEl === "0" ? "none" : "flex"}`,
          }}
        >
          <Title>이미 계정이 있으신가요?</Title>
          <Desc>없다면 회원가입을 해주세요!</Desc>

          <MainBtn onClick={handleClick}>로그인하기</MainBtn>
        </MainText>

        {/* ===================로그인폼 */}
        <RightCon
          style={{
            display: `${boxEl === "0" ? "flex" : "none"}`,
          }}
        >
          <SignIn />
        </RightCon>
      </RightConWrap>
    </AllWrap>
  );
};

const AllWrap = styled.section`
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

const WhiteBox = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.1s;
  transform: translateX(${(props) => props.a});
  z-index: 2;
`;

const LeftConWrap = styled.div`
  width: 50%;
  padding: ${MainStyle.padding};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;

const RightConWrap = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  padding: ${MainStyle.padding};
  z-index: 999;
`;

const LeftCon = styled.div``;

const RightCon = styled.div``;

const MainText = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Desc = styled.h3`
  margin-bottom: 150px;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.5;
`;
