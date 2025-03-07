import { ButtonHTMLAttributes } from "react";

import { ButtonContainer, HandPalmIcon, PlayIcon } from "./style";
import { useTheme } from "styled-components";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "success" | "danger";
};

export const Button = ({ variant = "success", ...props }: Props) => {
  const { COLORS } = useTheme();
  const buttonContainerCustomStyle = {
    success: {
      backgroundColor: COLORS.GREEN_500,
      color: COLORS.GRAY_100,
      hoverBackgroundColor: COLORS.GREEN_700,
    },
    danger: {
      backgroundColor: COLORS.RED_500,
      color: COLORS.WHITE,
      hoverBackgroundColor: COLORS.RED_700,
    },
  };

  return (
    <ButtonContainer
      color={buttonContainerCustomStyle[variant].color}
      backgroundColor={buttonContainerCustomStyle[variant].backgroundColor}
      hoverBackgroundColor={
        buttonContainerCustomStyle[variant].hoverBackgroundColor
      }
      {...props}
    >
      {variant === "success" ? (
        <>
          <PlayIcon />
          Começar
        </>
      ) : (
        <>
          <HandPalmIcon />
          Interromper
        </>
      )}
    </ButtonContainer>
  );
};
