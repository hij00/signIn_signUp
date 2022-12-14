import { useForm } from "react-hook-form";
import { InputBtn, InputWrap, ErrorMessage, Wrap } from "../../style/style";

export let userDb = [];

export const SignUp = ({ handleClick }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm({ mode: "onChange" });

  // =================에러체크
  const onSubmit = () => {
    const { username, password, pwCheck } = getValues();
    const checkUserDb = userDb.filter((a) => a.user === username);
    const userObj = {
      id: Date.now(),
      user: username,
      password: password,
      passwordcheck: pwCheck,
    };

    if (checkUserDb.length >= 1) {
      setError("usernameResult", {
        message: "이미 가입된 아이디입니다.",
      });
    }

    if (password !== pwCheck) {
      setError("passwordResult", {
        message: "비밀번호가 일치하지 않습니다.",
      });
    }

    if (password === pwCheck && checkUserDb.length < 1) {
      userDb.push(userObj);
      handleClick();
    }
  };

  return (
    <>
      <Wrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* id=============== */}
          <InputWrap>
            {errors?.username?.message && (
              <ErrorMessage>{errors?.username?.message}</ErrorMessage>
            )}
            {errors?.usernameResult?.message && (
              <ErrorMessage>{errors?.usernameResult?.message}</ErrorMessage>
            )}

            <input
              type="text"
              placeholder="ID : 4글자 이상 12글자 이하의 영어로 작성해주세요"
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

          {/* password=============== */}
          <InputWrap>
            {errors?.password?.message && (
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            )}

            <input
              type="password"
              placeholder="PW : 비밀번호를 입력해주세요"
              {...register("password", {
                required: "비밀번호는 필수입니다",
                pattern: {
                  value: /^[A-Za-z0-9]{6,12}$/,
                  message: "6글자 이상 12글자 이하의 영어로만 작성해주세요",
                },
              })}
            ></input>
          </InputWrap>
          <InputWrap>
            {errors?.pwCheck?.message && (
              <ErrorMessage>{errors?.pwCheck?.message}</ErrorMessage>
            )}
            {errors?.passwordResult?.message && (
              <ErrorMessage>{errors?.passwordResult?.message}</ErrorMessage>
            )}

            <input
              type="password"
              placeholder=" PW : 비밀번호를 한번 더 입력해주세요"
              {...register("pwCheck", {
                required: "비밀번호를 확인해주세요",
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
          <InputBtn>회원가입</InputBtn>
        </form>
      </Wrap>
    </>
  );
};
