import styled from "styled-components";
import { flex } from "../../styles/theme/theme";

export const ContainerImgs = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 60px 10px;
  grid-template-areas:
    ". . . ."
    ". . . .";
`;

export const Image = styled.div`
  flex: 1;
`;
export const Img = styled.img`
  cursor: pointer;

  border: 1px solid #ccc;

  transition: all 0.3s ease-in-out;
  width: 100%;
  &:hover {
    transform: scale(0.95);
    border: ${({ theme }) => `1px solid ${theme.colors.orange}`};
  }
`;
