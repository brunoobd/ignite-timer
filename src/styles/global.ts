import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :focus-visible:not(input) {
      outline: none;
      box-shadow: 0 0 0 2px ${theme.COLORS.GREEN_500};
    }

    body {
      padding: 0 1rem;

      background: ${theme.COLORS.GRAY_900};

      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
      font-family: ${theme.FONT_FAMILY.DEFAULT}, sans-serif;
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.MD};

      color: ${theme.COLORS.GRAY_100};
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
  `}
  
`;
