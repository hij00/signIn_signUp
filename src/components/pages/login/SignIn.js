import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Btn,
  InWrap,
  Title,
  Wrap,
  ErrorM,
  Con,
  ConWrap,
} from "../../style/style";
import { userDb } from "./SignUp";

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
        // navigate("/", { state: checkUserDb });
      }
    }
  };

  return (
    <Wrap>
      <Title></Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ConWrap>
          {errors?.username?.message && (
            <ErrorM>{errors?.username?.message}</ErrorM>
          )}
          {errors?.usernameResult?.message && (
            <ErrorM>{errors?.usernameResult?.message}</ErrorM>
          )}
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
                onChange() {
                  clearErrors("usernameResult");
                },
              })}
            ></input>
          </InWrap>
        </ConWrap>
        <ConWrap>
          {errors?.password?.message && (
            <ErrorM>{errors?.password?.message}</ErrorM>
          )}
          {errors?.passwordResult?.message && (
            <ErrorM>{errors?.passwordResult?.message}</ErrorM>
          )}
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
                onChange() {
                  clearErrors("passwordResult");
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
