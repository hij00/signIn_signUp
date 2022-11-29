import styled from "styled-components";
import { Btn, SBtn, Title } from "./../style/style.js";
// import {} from "../"
import { Link } from "react-router-dom";
import { MainStyle } from "../style/GlobalStyle";

export const Home = () => {
  return (
    <Wrap
    // style={{
    //   background: `url(${beach}) no-repeat center/cover`,
    // }}
    >
      <Box>
        <JoinText>
          <Text>환영합니다!</Text>
          <Text>로그인을 먼저 해주시겠어요?</Text>
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
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(255, 236, 195, 1) 100%
  );
`;

const Box = styled.div`
  padding: ${MainStyle.padding};
  width: 50%;
  height: 100%;
  /* background-color: rgba(${MainStyle.rgbColor}, 0.7); */
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s;
  /* transform: translateX(${(props) => props.a}); */
  /* z-index: 2; */
`;

const JoinText = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.h1`
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.5;
`;
