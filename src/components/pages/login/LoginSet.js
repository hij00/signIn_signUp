import { useForm } from "react-hook-form";
import { Btn, InWrap, Title, Wrap } from "../../style/style";

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
