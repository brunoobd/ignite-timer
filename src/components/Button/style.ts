import { HandPalm, Play } from "@phosphor-icons/react";
import { defaultTheme } from "@themes";
import styled, { css } from "styled-components";

export type ButtonContainerVariant = "success" | "danger";

type ButtonContainerProps = {
  variant: ButtonContainerVariant;
};

const buttonContainerStyle = {
  success: {
    backgroundColor: defaultTheme.COLORS.GREEN_500,
    color: defaultTheme.COLORS.GRAY_100,
    hoverBackgroundColor: defaultTheme.COLORS.GREEN_700,
  },
  danger: {
    backgroundColor: defaultTheme.COLORS.RED_500,
    color: defaultTheme.COLORS.WHITE,
    hoverBackgroundColor: defaultTheme.COLORS.RED_700,
  },
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 8px;
  border: none;
  outline: none;

  transition-duration: 0.2s;

  ${({ theme, variant }) => css`
    background-color: ${buttonContainerStyle[variant].backgroundColor};

    font-weight: ${theme.FONT_WEIGHT.BOLD};

    color: ${buttonContainerStyle[variant].color};

    &:not(:disabled):hover {
      cursor: pointer;
      background-color: ${buttonContainerStyle[variant].hoverBackgroundColor};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `};
`;

export const PlayIcon = styled(Play).attrs(() => ({
  size: 25,
}))``;

export const HandPalmIcon = styled(HandPalm).attrs(() => ({
  size: 25,
}))``;
