import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:${({ theme }) => theme.font.default};
    color: ${({ theme }) => theme.colors.white};
  }

  body {
    -webkit-font-smoothing: antialiased;

    &.ReactModal__Body--open {
      overflow-y: hidden;
    }

    background-color: ${(props) => props.theme.colors.black};
  }

  body,
   input, textarea, button {
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  button {
    cursor: pointer;
  }
`;
