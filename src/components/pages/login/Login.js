import { useForm } from "react-hook-form";
import styled from "styled-components";
import { LoginSet } from "./LoginSet";

export const Login = () => {
  const { handleSubmit, register } = useForm({ mode: "onChange" });

  return (
    <Wrap>
      <Box>
        <LConWrap>
          <LoginSet />
        </LConWrap>
      </Box>
    </Wrap>
  );
};

const Wrap = styled.div`
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
  left: 0;
`;

const LConWrap = styled.div``;
