import styled from "styled-components";
import { flex } from "../../styles/theme/theme";
import { ImArrowUpRight2 } from "react-icons/im";

export const ContainerPopular = styled.section``;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[50]};
  font-weight: bold;
`;

export const TitleColor = styled.small`
  font-size: ${({ theme }) => theme.fontSize[50]};
  color: ${({ theme }) => theme.colors.orange};
`;

export const Content = styled.div`
  position: relative;

  margin: 80px 0;

  &::before {
    content: "";
    background-color: ${({ theme }) => theme.colors.lightGrey};
    width: 1px;
    height: 100%;
    display: inline-block;
    position: absolute;
    right: 50%;
    transform: translate(-50%);
  }
`;

export const FirstLine = styled.div`
  ${flex("space-between", "center")};
`;

export const LastLine = styled.div`
  ${flex("space-between", "center")};
`;

export const CardTitle = styled.h3`
  ${flex("space-between", "center")};
  font-size: ${({ theme }) => theme.fontSize[30]};
  font-weight: 500;

  margin-bottom: 10px;

  transition: all 0.2s ease-in-out;
`;

export const CardIcon = styled(ImArrowUpRight2)`
  color: ${({ theme }) => theme.colors.white};
`;

export const CardDescription = styled.div`
  ${flex("space-between", "center")};
  font-size: ${({ theme }) => theme.fontSize[20]};

  transition: all 0.6s ease-in-out;
`;

export const Name = styled.h3`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: 600;
`;

export const Number = styled.small`
  color: ${({ theme }) => theme.colors.orange};
`;

export const Img = styled.img`
  transition: all 1s ease-in-out;
`;

export const Card = styled.div`
  max-width: 50%;

  &:nth-child(-n + 2) {
    margin-bottom: 60px;
  }

  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    ${CardDescription}, ${CardTitle} {
      transform: scale(0.97);
      color: ${({ theme }) => theme.colors.orange};
    }
    ${CardIcon} {
      color: ${({ theme }) => theme.colors.orange};
    }
    ${Img} {
      transform: scale(0.97);
    }
  }
`;
