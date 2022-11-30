import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  InputBtn,
  Title,
  Wrap,
  ErrorMessage,
  // FindId,
  InputWrap,
} from "../../style/style";
import { userDb } from "./SignUp";
import styled from "styled-components";
import { MainStyle } from "../../style/GlobalStyle";

export const SignIn = () => {
  const { usernameDb, passwordDb } = userDb;
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = () => {
    const { username, password } = getValues();
    const checkUserDb = userDb.filter((a) => a.user === username);
    if (checkUserDb.length < 1) {
      setError("usernameResult", {
        message: "가입되지 않은 아이디입니다.",
      });
    } else {
      const { password: cpassword } = checkUserDb[0];
      if (password !== cpassword) {
        setError("passwordResult", {
          message: "비밀번호가 틀렸습니다.",
        });
      } else {
        navigate("/", { state: checkUserDb });
      }
    }
  };

  return (
    <Wrap>
      <Title></Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrap>
          {errors?.username?.message && (
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          )}
          {errors?.usernameResult?.message && (
            <ErrorMessage>{errors?.usernameResult?.message}</ErrorMessage>
          )}

          <input
            type="text"
            placeholder="ID : 4~12글자의 영어로만 작성해주세요"
            {...register("username", {
              required: "아이디는 필수입니다",
              pattern: {
                value: /^[A-Za-z0-9]{4,12}$/,
                message: "4글자 이상 12글자 이하의 영어로만 작성해주세요",
              },
              onChange() {
                clearErrors("usernameResult");
              },
            })}
          ></input>
        </InputWrap>
        <InputWrap>
          {errors?.password?.message && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
          {errors?.passwordResult?.message && (
            <ErrorMessage>{errors?.passwordResult?.message}</ErrorMessage>
          )}

          <input
            type="password"
            placeholder="PW : 6~12글자의 영어로만 작성해주세요"
            {...register("password", {
              required: "비밀번호는 필수입니다",
              pattern: {
                value: /^[A-Za-z0-9]{6,12}$/,
                message: "6글자 이상 12글자 이하의 영어로만 작성해주세요",
              },
              onChange() {
                clearErrors("passwordResult");
              },
            })}
          ></input>
        </InputWrap>
        <InputBtn>로그인</InputBtn>
        <FindId>
          <FontAwesomeIcon icon={faCircleQuestion} />
          아이디 또는 비밀번호를 잊어버리셨나요?
        </FindId>
      </form>
    </Wrap>
  );
};

const FindId = styled.div`
  margin: 50px 0;
  color: ${MainStyle.blackColor};
  opacity: 0.5;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  svg {
    margin-right: 10px;
  }
  &:hover {
    opacity: 1;
  }
`;
