import styled from "styled-components";
import { AiOutlineArrowUp, AiOutlineInstagram } from "react-icons/ai";
import { FiYoutube, FiTwitter } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { flex } from "../../styles/theme/theme";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.grey};
`;
export const FooterLogo = styled.div`
  list-style: none;
  ${flex("space-between", "center")};

  padding: 50px 0 35px 0;
`;
export const LogoIconStyled = styled(LogoIcon)`
  width: 258px;
  cursor: pointer;
  height: 31px;
`;
export const WrapperIconArrow = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.orange};
  ${flex("center", "center")};
`;
export const IconArrowTop = styled(AiOutlineArrowUp)`
  fill: ${({ theme }) => theme.colors.black};
`;

export const FooterLinks = styled.section`
  ${flex("center", "center")};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
export const Newsletter = styled.div`
  width: 40%;
  ${flex("center", "center")};
  flex-direction: column;

  padding: 40px;
`;
export const NewsletterTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize[30]};
  font-weight: 500;

  margin-bottom: 25px;
`;
export const NewsletterTitleColor = styled.small`
  font-size: ${({ theme }) => theme.fontSize[30]};
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;
`;
export const NewsletterWrapper = styled.div`
  display: flex;
`;
export const NewsletterInput = styled.input`
  border: none;
  outline: transparent;
  background-color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize[20]};
  padding: 15px 10px;
  font-weight: 400;
  width: 100%;
  max-width: 280px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
export const NewsletterButton = styled.button`
  flex: 1;
  padding: 15px 10px;
  border-radius: 0;
  border: none;
  font-size: ${({ theme }) => theme.fontSize[20]};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;
export const Menu = styled.nav`
  width: 70%;
  ${flex("center", "center")};
  padding: 40px;
  border-left: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;
export const MenuWrapper = styled.div`
  padding: 40px;
  max-width: 500px;
  width: 100%;
  ${flex("space-between", "center")};
`;
export const List = styled.ul`
  list-style: none;
  ${flex("center", "flex-start")};
  flex-direction: column;
`;
export const ListTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize[20]};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;

  margin-bottom: 17px;
`;
export const ListItem = styled.li`
  margin-bottom: 17px;

  display: flex;
  width: 100%;
`;
export const ListAnchor = styled.a`
  font-size: ${({ theme }) => theme.fontSize[20]};
  color: ${({ theme }) => theme.colors.lightGrey};

  width: 100%;

  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
    cursor: pointer;
  }
`;
export const FooterCopyright = styled.section`
  ${flex("space-between", "center")};
  padding: 45px 0;
`;
export const LinkSite = styled.a`
  font-size: ${({ theme }) => theme.fontSize[20]};
  color: ${({ theme }) => theme.colors.lightGrey};
  text-decoration: none;
`;
export const Medias = styled.div`
  width: 20%;
  ${flex("space-between", "center")};

  svg {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
`;

export const InstagramIcon = styled(AiOutlineInstagram)`
  fill: ${({ theme }) => theme.colors.lightGrey};

  &:hover {
    fill: ${({ theme }) => theme.colors.orange};
  }
`;
export const YoutubeIcon = styled(FiYoutube)`
  path,
  polygon {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:hover {
    path,
    polygon {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
export const TwiiterIcon = styled(FiTwitter)`
  path,
  polygon {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  &:hover {
    path,
    polygon {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
export const EmailIcon = styled(HiOutlineMail)`
  path,
  polygon {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
  &:hover {
    path,
    polygon {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`;
