import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import {
  Btn,
  InWrap,
  Title,
  Wrap,
  ErrorM,
  Con,
  ConWrap,
} from "../../style/style";

export const LoginSet = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // console.log(errors.username);

  const onSubmit = () => {};

  return (
    <Wrap>
      <Title></Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ConWrap>
          <ErrorM>{errors?.username?.message}</ErrorM>
          <InWrap>
            <input
              type="text"
              placeholder="ID : 4~12글자의 영어로만 작성해주세요"
              {...register("username", {
                required: "아이디는 필수입니다",
                pattern: {
                  value: /^[A-Za-z0-9]{4,12}$/,
                  message: "4글자 이상 12글자 이하의 영어로만 작성해주세요",
                },
              })}
            ></input>
          </InWrap>
        </ConWrap>
        <ConWrap>
          <ErrorM>{errors?.password?.message}</ErrorM>
          <InWrap>
            <input
              type="password"
              placeholder="PW : 6~12글자의 영어로만 작성해주세요"
              {...register("password", {
                required: "비밀번호는 필수입니다",
                pattern: {
                  value: /^[A-Za-z0-9]{6,12}$/,
                  message: "6글자 이상 12글자 이하의 영어로만 작성해주세요",
                },
              })}
            ></input>
          </InWrap>
        </ConWrap>
        <Btn>로그인</Btn>
        <Con>
          <FontAwesomeIcon icon={faCircleQuestion} />
          아이디 또는 비밀번호를 잊어버리셨나요?
        </Con>
      </form>
    </Wrap>
  );
};
