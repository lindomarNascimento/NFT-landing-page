import { ImArrowUpRight2 } from "react-icons/im";
import styled from "styled-components";
import { flex } from "../../styles/theme/theme";

export const ContainerBest = styled.section`
  ${flex("center", "center")};
  flex-direction: column;

  margin-bottom: 100px;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[50]};
  font-weight: bold;
`;

export const ColorTitle = styled.small`
  font-size: ${({ theme }) => theme.fontSize[50]};
  color: ${({ theme }) => theme.colors.orange};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 60px 30px;
  grid-template-areas:
    ". . ."
    ". . .";

  margin: 80px 0;

  width: 100%;
`;

export const CardImage = styled.img`
  max-width: 100px;
  width: 100%;
  margin-right: 20px;
`;

export const Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSize[20]};
  ${flex("center", "flex-start")};
  flex-direction: column;
`;

export const Name = styled.h5`
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 500;

  transition: all 0.2s ease-in-out;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize[20]};

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const CardIcon = styled(ImArrowUpRight2)`
  fill: ${({ theme }) => theme.colors.orange};
  margin: 0 15px;
`;

export const Card = styled.div`
  ${flex("space-between", "center")};
  width: 100%;
  max-width: 390px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 25px 30px;

  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};

    ${Description} {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
