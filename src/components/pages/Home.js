import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { MainStyle } from "../style/GlobalStyle";

export const Home = () => {
  const location = useLocation();
  console.log(location?.state);
  return (
    <Wrap>
      <Box>
        <JoinText
          style={{
            display: `${location?.state ? "none" : "flex"}`,
          }}
        >
          <h1>환영합니다!</h1>
          <h3>로그인을 먼저 해주시겠어요?</h3>
          <Link to="/login">로그인하기</Link>
        </JoinText>
        <JoinText
          style={{
            display: `${location?.state ? "flex" : "none"}`,
          }}
        >
          <h1>환영합니다!</h1>
          <h3>다양한 컨텐츠를 즐겨보세요!</h3>
          {/* <Link to="/login">로그인하기</Link> */}
        </JoinText>
      </Box>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
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
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.3s;
`;

const JoinText = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 20px;
    color: ${MainStyle.blackColor};
  }
  h3 {
    margin-bottom: 150px;
    font-size: 20px;
    font-weight: 500;
    opacity: 0.5;
  }
  a {
    width: 100%;
    display: inline-block;
    padding: 12px 0;
    box-sizing: border-box;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    background-color: ${MainStyle.grayColor};
    color: white;
    border-radius: 50px;
    &:hover {
      background-color: ${MainStyle.blackColor};
      transition: 0.5s;
    }
  }
`;
