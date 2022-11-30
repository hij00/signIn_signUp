import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
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
        <Menu>
          <Link to="#">User</Link>
        </Menu>
      </MenuWrap>
    </Wrap>
  );
};

const Wrap = styled.div``;

const Logo = styled.div``;

const MenuWrap = styled.ul``;

const Menu = styled.li``;
