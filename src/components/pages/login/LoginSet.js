import styled from "styled-components";
import { useForm } from "react-hook-form";
import { MainStyle } from "../../style/GlobalStyle";

export const LoginSet = () => {
  const {} = useForm();

  return (
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
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: salmon;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
`;

const Title = styled.div``;

const InWrap = styled.div`
  width: 100%;
  margin-bottom: 100px;
  border-bottom: 1px solid ${MainStyle.mainColor};
  input {
    all: unset;
  }
`;

const Btn = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: ${MainStyle.mainColor};
  color: white;
  padding: 10px 0;
`;
