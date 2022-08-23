import React, { ButtonHTMLAttributes } from "react";
import * as S from "./Button.styled";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: string;
}

const Button = ({ text, variant, ...rest }: IButtonProps) => {
  return (
    <S.Button {...rest} className={variant}>
      {text}
    </S.Button>
  );
};

export default Button;
