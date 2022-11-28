import styled from "styled-components";
import beach from "./../../img/beach.jpg";
import { SBtn, Title } from "./../style/style.js";
// import {} from "../"
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Wrap
      style={{
        background: `url(${beach}) no-repeat center/cover`,
      }}
    >
      <Box>
        <JoinText>
          <Title>환영합니다!</Title>
          <Desc>로그인을 먼저 해주시겠어요?</Desc>
          <SBtn>
            <Link to="/login">로그인하기</Link>
          </SBtn>
        </JoinText>
      </Box>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: gray; */
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  background-color: beige;
  position: absolute;
  top: 0;
  left: 0;
`;

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
