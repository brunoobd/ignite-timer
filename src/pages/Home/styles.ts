import { Minus, Plus } from "@phosphor-icons/react";
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
      padding: "0.625rem 0.5rem",

      backgroundColor: "transparent",
      boxShadow: "none !important",

      border: "none",
      borderBottom: "0.125rem solid transparent",
      borderBottomColor: `${
        state.isFocused ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_500
      } !important`,
      borderRadius: "none",

      fontWeight: theme.FONT_WEIGHT.BOLD,
      fontSize: theme.FONT_SIZE.LG,

      transitionDuration: "0.2s",

      cursor: "text",
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

export const DurationInputContainer = styled.div`
  padding: 0.625rem 0.3125rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition-duration: 0.2s;

  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.COLORS.GRAY_500};

    &:has(input:focus) {
      border-bottom-color: ${theme.COLORS.GRAY_100};
    }

    &::placeholder {
      color: ${theme.COLORS.GRAY_500};
    }
  `};
`;

export const DurationInput = styled.input.attrs(() => ({
  type: "number",
}))`
  max-width: 1.3125rem;
  background-color: transparent;

  border: none;
  outline: none;

  ${({ theme }) => css`
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    font-size: ${theme.FONT_SIZE.LG};
  `};
`;

export const DurationInputActionItem = styled.button.attrs(() => ({
  type: "button",
}))`
  display: flex;
  align-items: center;

  border: none;
  outline: none;

  background: transparent;

  transition-duration: 0.1s;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};

    &:hover {
      color: ${theme.COLORS.GRAY_100};
      cursor: pointer;
    }
  `}
`;

export const PlusIcon = styled(Plus).attrs(() => ({
  size: 20,
}))``;

export const MinusIcon = styled(Minus).attrs(() => ({
  size: 20,
}))``;
