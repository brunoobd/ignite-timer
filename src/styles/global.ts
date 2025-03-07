import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.GREEN_500};
  }

  body {
    padding: 0 1rem;
    
    background: ${({ theme }) => theme.COLORS.GRAY_900};

    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.DEFAULT}, sans-serif;
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.MD}rem;

      color: ${theme.COLORS.GRAY_100};
    `}
  }
`;
