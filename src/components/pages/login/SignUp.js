import { useForm } from "react-hook-form";
import { Btn, ConWrap, ErrorM, InWrap, Wrap } from "../../style/style";

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
    const userobj = {
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
      userDb.push(userobj);
      handleClick();
    }
  };

  return (
    <>
      <Wrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* id=============== */}
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
            </InWrap>
          </ConWrap>

          {/* password=============== */}
          <ConWrap>
            {errors?.password?.message && (
              <ErrorM>{errors?.password?.message}</ErrorM>
            )}
            <InWrap>
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
            </InWrap>
          </ConWrap>
          <ConWrap>
            {errors?.pwCheck?.message && (
              <ErrorM>{errors?.pwCheck?.message}</ErrorM>
            )}
            {errors?.passwordResult?.message && (
              <ErrorM>{errors?.passwordResult?.message}</ErrorM>
            )}
            <InWrap>
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
                  // validate: (value) =>
                  //   password.current === value ||
                  //   "비밀번호가 일치하지 않습니다",
                })}
              ></input>
            </InWrap>
          </ConWrap>
          <Btn>회원가입</Btn>
        </form>
      </Wrap>
    </>
  );
};
