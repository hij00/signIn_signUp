import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { MainStyle } from "../../style/GlobalStyle";
import { Btn, InWrap, SBtn, Title, Wrap } from "../../style/style";
import { LoginSet } from "./LoginSet";
import beach from "../../../img/beach.jpg";

export const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [boxEl, setBoxEl] = useState("0");
  // const [joinCon, setJoinCon] = useState();
  // const [loginCon, setLoginCon] = useState();

  const handleClick = () => {
    // setBoxEl(`${boxEl === "left" ? "right" : "left"}`);
    setBoxEl(`${boxEl === "0" ? "-100%" : "0"}`);
  };

  // console.log(errors);

  const onSubmit = () => {};

  return (
    <AllWrap
      style={{
        background: `url(${beach}) no-repeat center/cover`,
      }}
    >
      <BlurImg>
        <Box a={boxEl}></Box>
        <Con>
          <LConWrap>
            <JoinText
              style={{
                display: `${boxEl === "0" ? "flex" : "none"}`,
              }}
            >
              <Title>처음 방문하셨나요?</Title>
              <Desc>이메일로 손쉽게 회원가입하세요!</Desc>
              <SBtn onClick={handleClick}>계정 만들기</SBtn>
              <Sns>SNS 동기화</Sns>
            </JoinText>
            <RCon
              style={{
                display: `${boxEl === "0" ? "none" : "flex"}`,
              }}
            >
              <Wrap>
                <Title></Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <InWrap>
                    <input
                      type="text"
                      placeholder="ID : 4글자 이상 12글자 이하의 영어로 작성해주세요"
                      {...register("username", {
                        required: "아이디는 필수입니다",
                        pattern: {
                          value: /^[A-Za-z0-9]{4,12}$/,
                          message:
                            "4글자 이상 12글자 이하의 영어로만 작성해주세요",
                        },
                      })}
                    ></input>
                  </InWrap>
                  <InWrap>
                    <input
                      type="password"
                      placeholder="비밀번호를 입력해주세요"
                      {...register("password", {
                        required: "비밀번호는 필수입니다",
                        pattern: {
                          value: /^[A-Za-z0-9]{6,12}$/,
                          message:
                            "6글자 이상 12글자 이하의 영어로만 작성해주세요",
                        },
                      })}
                    ></input>
                  </InWrap>
                  <InWrap>
                    <input
                      type="password"
                      placeholder="비밀번호를 한번 더 입력해주세요"
                      {...register("pwCheck", {
                        required: "비밀번호를 확인해주세요",
                        pattern: {
                          value: /^[A-Za-z0-9]{6,12}$/,
                          message:
                            "6글자 이상 12글자 이하의 영어로만 작성해주세요",
                        },
                        // validate: (value) =>
                        //   password.current === value ||
                        //   "비밀번호가 일치하지 않습니다",
                      })}
                    ></input>
                  </InWrap>
                  <Btn>회원가입</Btn>
                </form>
              </Wrap>
            </RCon>
          </LConWrap>
          {/* ======================== */}
          <RConWrap>
            <JoinText
              style={{
                display: `${boxEl === "0" ? "none" : "flex"}`,
              }}
            >
              <Title>이미 계정이 있으신가요?</Title>
              <Desc>sns로 간편하게 로그인하세요!</Desc>

              <SBtn onClick={handleClick}>로그인하기</SBtn>
              <Sns>SNS 동기화</Sns>
            </JoinText>
            <LCon
              style={{
                display: `${boxEl === "0" ? "flex" : "none"}`,
              }}
            >
              <LoginSet />
            </LCon>
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
  transition: 0.3s;
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

const Sns = styled.div`
  margin: 50px 20px;
  font-size: 14px;
`;
