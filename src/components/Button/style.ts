import { HandPalm, Play } from "@phosphor-icons/react";
import styled, { css } from "styled-components";

type ButtonContainerProps = {
  $color: string;
  $backgroundColor: string;
  $hoverBackgroundColor: string;
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

  ${({ theme, $color, $backgroundColor, $hoverBackgroundColor }) => css`
    background-color: ${$backgroundColor};

    font-weight: ${theme.FONT_WEIGHT.BOLD};

    color: ${$color};

    &:not(:disabled):hover {
      cursor: pointer;
      background-color: ${$hoverBackgroundColor};
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
