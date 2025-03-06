import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.GREEN_500};
  }

  body {
    ${({ theme }) => css`
      background: ${theme.COLORS.GRAY_700};
      color: ${theme.COLORS.GRAY_300};
    `}
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.DEFAULT}, sans-serif;
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.MD};
    `}
  }
`;
