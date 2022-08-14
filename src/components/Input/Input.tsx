import React, { InputHTMLAttributes } from "react";
import * as S from "./Input.styled";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  error?: any;
}

const Input = ({ error, ...rest }: IInput) => {
  return (
    <S.Wrapper className="input__wrapper">
      <input {...rest} className="input__input" />
      {error && <p className="input__error">{error}</p>}
    </S.Wrapper>
  );
};

export default Input;
