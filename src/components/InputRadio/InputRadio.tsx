import React, { KeyboardEvent } from "react";
import * as S from "./InputRadio.styled";

interface IInputRadio {
  value: string;
  onClick: () => void;
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  id: string;
  className?: string;
}

const InputRadio = ({
  value,
  onClick,
  title,
  Icon,
  id,
  className,
}: IInputRadio) => {
  const handleKeyPress = (event: KeyboardEvent<HTMLLabelElement>) => {
    if (event.key === "Enter") {
      onClick();
    }
  };

  return (
    <S.Radio>
      <input
        type="radio"
        name="teste"
        id={id}
        value={value}
        onClick={onClick}
      />
      <label
        htmlFor={id}
        className={className}
        tabIndex={0}
        onKeyPress={handleKeyPress}
      >
        <Icon /> <span>{title.toUpperCase()}</span>
      </label>
    </S.Radio>
  );
};

export default InputRadio;
