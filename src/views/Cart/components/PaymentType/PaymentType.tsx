import React from "react";
import { InputRadio } from "../../../../components";
import { ReactComponent as Dollar } from "../../../../assets/dollar.svg";
import * as S from "./PaymentType.styled";
import { Controller } from "react-hook-form";

import { ReactComponent as Card } from "../../../../assets/card.svg";
import { ReactComponent as Debito } from "../../../../assets/deb.svg";
import { ReactComponent as Money } from "../../../../assets/money.svg";

const paymentTypes = [
  { id: "1", title: "Cartão de Credito", Icon: Card, value: "credito" },
  { id: "2", title: "Cartão de Débito", Icon: Debito, value: "debito" },
  { id: "3", title: "Dinheiro", Icon: Money, value: "dinheiro" },
];

const PaymentType = ({ hookForms }: any) => {
  return (
    <S.Payment>
      <div className="form__title">
        <Dollar />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </p>
        </div>
      </div>

      <div className="inputs__wrapper">
        {paymentTypes.map((type) => (
          <Controller
            key={type.id}
            name="payment"
            control={hookForms.control}
            render={({ field: { onChange, value } }) => (
              <InputRadio
                value={value}
                onClick={() => onChange(type.value)}
                title={type.title}
                Icon={type.Icon}
                id={type.id}
                className={value === type.value ? "selected" : undefined}
              />
            )}
          />
        ))}
      </div>

      {!!hookForms.errors.payment && (
        <span className="payment__error">
          * {hookForms.errors.payment?.message}.
        </span>
      )}
    </S.Payment>
  );
};

export default PaymentType;
