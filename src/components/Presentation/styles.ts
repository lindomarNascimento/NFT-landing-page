import styled from "styled-components";
import { flex } from "../../styles/theme/theme";

export const ContainerPresentation = styled.section`
  ${flex("space-between", "center")};
  gap: ${({ theme }) => theme.fontSize[30]};

  margin: 125px 0;
`;

export const Description = styled.div`
  max-width: 400px;
  width: 100%;
`;

export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize[18]};
  margin-bottom: 35px;
`;

export const Avatar = styled.div`
  ${flex("", "flex-end")};
`;
export const ImageAvatar = styled.img``;
export const AvatarContent = styled.div`
  padding-left: 5px;
`;
export const QuantityAvatar = styled.small`
  font-size: ${({ theme }) => theme.fontSize[18]};
  font-weight: bold;
`;
export const TextAvatar = styled.p``;
export const Slogan = styled.div`
  max-width: 590px;
  width: 100%;
`;
export const SloganText = styled.p`
  font-size: ${({ theme }) => theme.fontSize[50]};
  font-weight: bold;
`;
export const SloganBold = styled.small`
  color: ${({ theme }) => theme.colors.orange}};
`;
export const Seal = styled.div`
  svg {
    width: 200px;
    height: 200px;
  }
`;
