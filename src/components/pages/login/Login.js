import { useForm } from "react-hook-form";
import styled from "styled-components";
import { MainStyle } from "../../style/GlobalStyle";
import { Btn, InWrap, Title, Wrap } from "../../style/style";
import { LoginSet } from "./LoginSet";

export const Login = () => {
  const { handleSubmit, register } = useForm({ mode: "onChange" });

  return (
    <AllWrap>
      <Box></Box>
      <LConWrap>
        <LoginSet />
      </LConWrap>
      <RConWrap>
        <JoinText>
          <Title>처음 방문하셨나요?</Title>
          <Btn>계정 만들기</Btn>
        </JoinText>
        <Wrap>
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
  right: 0;
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
