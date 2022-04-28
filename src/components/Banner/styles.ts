import styled from "styled-components";
import { flex } from "../../styles/theme/theme";

export const ContainerBanner = styled.section`
  ${flex()};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
  margin-bottom: 80px;
`;

export const ContainerStatus = styled.div`
  ${flex("space-between", "center")};
  flex-direction: column;
  width: 20%;
`;

export const WrapperStatus = styled.div`
  ${flex("center", "center")};
  flex-direction: column;

  margin-bottom: 60px;
`;

export const StatusNumber = styled.small`
  font-size: ${({ theme }) => theme.fontSize[50]};
  font-weight: 600;
`;

export const StatusText = styled.span`
  font-size: ${({ theme }) => theme.fontSize[20]};
  color: ${({ theme }) => theme.colors.lightGrey};
  font-weight: 600;
`;

export const Content = styled.div`
  padding-top: 70px;

  width: 80%;
  border-left: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};

  display: flex;
  flex-direction: column;
`;

export const DescriptionsText = styled.div`
  ${flex("space-between", "center")};
  margin-bottom: 60px;
  padding-left: 50px;
`;

export const DescriptionContainer = styled.div`
  ${flex("center", "flex-start")};
  flex-direction: column;
  width: 50%;
  max-width: 440px;
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize[18]};
  margin-bottom: 60px;
`;

export const DescriptionLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.orange};
  margin-left: 5px;
`;

export const Title = styled.h1`
  text-decoration: underline;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

export const Img = styled.img`
  width: 100%;
`;
