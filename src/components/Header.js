import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { MainStyle } from "./style/GlobalStyle";

export const Header = () => {
  const location = useLocation();
  const onClick = () => {
    window.location.replace("/");
  };
  return (
    <Wrap>
      <Logo>
        <Link to="/">Logo</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to="#">Menu1</Link>
        </Menu>
        <Menu>
          <Link to="#">Menu2</Link>
        </Menu>
        <Menu>
          <Link to="#">Menu3</Link>
        </Menu>
        {/* ================로그인/로그아웃 */}
        <Menu
          style={{
            display: `${location?.state ? "none" : "block"}`,
          }}
          className="login"
        >
          <Link to="/login">로그인</Link>
        </Menu>
        <Menu
          style={{
            display: `${location?.state ? "block" : "none"}`,
          }}
          className="dropMenu"
        >
          User
          <FontAwesomeIcon icon={faCaretDown} />
          <DropBox className="dropBox">
            <Link to="#">
              <h3>마이페이지</h3>
            </Link>
            <h3 onClick={onClick}>로그아웃</h3>
          </DropBox>
        </Menu>
      </MenuWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 80px;
  padding: ${MainStyle.padding};
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 900;
`;

const MenuWrap = styled.ul`
  display: flex;
`;

const Menu = styled.li`
  margin-right: 50px;
  padding: 16px;
  &.login {
    margin-right: 0;
  }
  &.dropMenu {
    margin-right: 0;
    position: relative;
    display: inline-block;
    &:hover {
      .dropBox {
        display: block;
      }
    }
  }
  svg {
    margin-left: 10px;
  }
`;

const DropBox = styled.div`
  /* all: unset; */
  display: none;
  min-width: 150px;
  background-color: ${MainStyle.blackColor};
  position: absolute;
  right: 0;
  margin-top: 10px;
  h3 {
    display: inline-block;
    width: 100%;
    padding: 20px;
    color: white;
    &:hover {
      background-color: ${MainStyle.grayColor};
    }
  }
`;
