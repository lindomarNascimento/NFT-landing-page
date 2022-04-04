import { flex } from "../../styles/theme/theme";
import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.black};
  ${flex("space-between", "center")};
`;

export const Logo = styled.a`
  list-style: none;
  cursor: pointer;

  svg {
    width: 258px;
    height: 31px;
  }
`;

export const Nav = styled.nav`
  ${flex("space-between", "center")};
  flex: 0.6;
`;

export const NavItem = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize[18]};

  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;

export const ButtonConect = styled.button`
  ${flex("space-evenly", "center")};

  background-color: ${(props) => props.theme.colors.white};
  border: 0;

  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize[16]};
  font-weight: bold;

  height: 50px;
  width: 230px;

  svg {
    width: 30px;
    height: 30px;
  }

  transition: all 0.4s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.lightWhite};
  }
`;
