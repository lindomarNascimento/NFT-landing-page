import { flex } from "../../styles/theme/theme";
import styled, { css } from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

type NavMobProps = {
  isOpen: boolean;
};

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.black};
  ${flex("space-between", "center")};

  margin-top: 40px;
`;

export const HamburguerIcon = styled(GiHamburgerMenu)``;

export const MenuMobileWrapper = styled.div`
  position: relative;
`;

export const NavMob = styled.div<NavMobProps>`
  background: ${(props) => props.theme.colors.lightGrey};
  position: fixed;
  top: 0;
  left: -100%;

  width: 80%;
  height: 100vh;

  ${flex("flex-start", "center")};

  padding-top: 60px;
  flex-direction: column;

  z-index: 1;

  transition: all 0.4s ease-in-out;
  ${(props) =>
    props.isOpen &&
    css`
      left: 0;
    `}
`;
export const BackgroundBlur = styled.div<NavMobProps>`
  background: ${(props) => props.theme.colors.lightGrey};
  position: fixed;
  top: 0;
  left: -100%;

  width: 100%;
  height: 100vh;

  ${flex("flex-start", "center")};

  padding-top: 60px;
  flex-direction: column;

  opacity: 0.4;
  transition: all 0.4s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      left: 0;
    `}
`;
export const CloseIcon = styled(GrClose)`
  position: absolute;
  top: 20px;
  right: 20px;

  fill: ${(props) => props.theme.colors.orange};
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
