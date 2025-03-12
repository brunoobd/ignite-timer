import Select from "react-select";
import styled, { css } from "styled-components";

export const HomeContainer = styled.form`
  padding: 0 2rem 2rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.75rem;
`;

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  white-space: nowrap;

  ${({ theme }) => css`
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
  `}
`;

export const TaskInput = styled(Select).attrs(({ theme }) => ({
  styles: {
    container: (baseStyles) => ({
      ...baseStyles,
      width: "17.5rem",
    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      padding: "0.6875rem 0.5rem",

      backgroundColor: "transparent",
      boxShadow: "none !important",

      border: "none",
      borderBottom: "0.125rem solid transparent",
      borderBottomColor: `${
        state.isFocused ? theme.COLORS.GREEN_500 : theme.COLORS.GRAY_500
      } !important`,
      borderRadius: "none",

      fontWeight: theme.FONT_WEIGHT.BOLD,
      fontSize: theme.FONT_SIZE.LG,

      transitionDuration: "0.4s",
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      margin: 0,

      color: theme.COLORS.GRAY_500,
    }),
    input: (baseStyles) => ({
      ...baseStyles,
      margin: 0,
      padding: 0,

      visibility: "visible",

      color: theme.COLORS.GRAY_100,
    }),
    indicatorsContainer: () => ({
      display: "none",
    }),
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      padding: 0,
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      margin: 0,

      color: theme.COLORS.GRAY_100,
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      margin: 0,

      backgroundColor: theme.COLORS.GRAY_700,

      borderRadius: "none",
      border: "none",
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      padding: 0,
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      padding: "0.8125rem 1rem",

      backgroundColor: "transparent",
      color: theme.COLORS.GRAY_300,

      fontFamily: theme.FONT_FAMILY.DEFAULT,
      fontSize: theme.FONT_SIZE.SM,
      fontWeight: theme.FONT_WEIGHT.REGULAR,

      borderBottom: `2px solid ${theme.COLORS.GRAY_600}`,
    }),
  },
}))``;

export const DurationInput = styled.input.attrs(() => ({
  type: "number",
}))`
  max-width: 4.5rem;
  padding: 0.6875rem 0.5rem;

  background-color: transparent;

  transition-duration: 0.4s;

  ${({ theme }) => css`
    border: none;
    border-top: 2px solid transparent;
    border-bottom: 2px solid ${theme.COLORS.GRAY_500};

    font-weight: ${theme.FONT_WEIGHT.BOLD};
    font-size: ${theme.FONT_SIZE.LG};

    &:focus {
      border-bottom-color: ${theme.COLORS.GREEN_700};
      outline: none;
    }

    &::placeholder {
      color: ${theme.COLORS.GRAY_500};
    }
  `};
`;
