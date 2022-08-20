import React, { InputHTMLAttributes } from "react";
import * as S from "./Input.styled";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: any;
  isInvalid?: boolean;
}

const Input = ({ error, isInvalid, ...rest }: IInput) => {
  return (
    <S.Wrapper className="input__wrapper">
      <input {...rest} className="input__input" />
      {isInvalid && <p className="input__error">* {error}.</p>}
    </S.Wrapper>
  );
};

export default Input;
