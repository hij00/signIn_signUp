import styled from "styled-components";

export const Home = () => {
  return (
    <Wrap>
      <Box></Box>
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
