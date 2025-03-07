import { ButtonHTMLAttributes } from "react";

import {
  ButtonContainer,
  ButtonContainerVariant,
  HandPalmIcon,
  PlayIcon,
} from "./style";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonContainerVariant;
};

export const Button = ({ variant = "success", ...props }: Props) => (
  <ButtonContainer variant={variant} {...props}>
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
