import React from "react";
import * as S from "./QuantityInput.styled";

import { ReactComponent as Minus } from "../../assets/minus.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";

interface IQuantityInputProps {
  counter: number;
  setCounter?: React.Dispatch<React.SetStateAction<number>>;
  cartActions?: {
    handleAdd: () => void;
    handleRemove: () => void;
  };
}

const QuantityInput = ({
  counter,
  setCounter,
  cartActions,
}: IQuantityInputProps) => {
  const handleAdd = () => {
    setCounter?.((current) => current + 1);
    cartActions?.handleAdd();
  };

  const handleRemove = () => {
    if (counter === 1) return;

    setCounter?.((current) => current - 1);
    cartActions?.handleRemove();
  };

  return (
    <S.Input>
      <S.QuantityButton onClick={handleRemove} type="button">
        <Minus className="minus" />
      </S.QuantityButton>
      <span>{counter}</span>
      <S.QuantityButton onClick={handleAdd} type="button">
        <Plus className="plus" />
      </S.QuantityButton>
    </S.Input>
  );
};

export default QuantityInput;
