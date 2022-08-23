import React from "react";
import { formatToString } from "../../../../utils/handleMoney";
import { IRequestData } from "../../OrderManagement";
import * as S from "./OrderColumn.styled";

type button = { id: number; label: string; onClick: (id: string) => void };

interface IOrderColumn {
  title: string;
  requests: IRequestData[];
  buttons: button[];
}

const OrderColumn = ({ title, requests, buttons }: IOrderColumn) => {
  return (
    <S.Column className={requests[0].data.status}>
      <h2 className="font-2">{title}</h2>
      {requests.map((req) => (
        <S.Single>
          <h3>Nome: {req.data.name}</h3>

          <h3>Endereço: </h3>
          <p>{`Rua ${req.data.street}, num ${req.data.number}`}</p>
          <p>{`Bairro: ${req.data.district}`}</p>
          {req.data.complement && (
            <p>{`Complemento: ${req.data.complement}`}</p>
          )}

          <h3>Pedido: </h3>
          <ul>
            {req.data.cart.cartItems.map((prod) => (
              <li key={prod.id}>
                <span>
                  {prod.quantity < 10 && "0"}
                  {prod.quantity}
                </span>
                {prod.name}
              </li>
            ))}
          </ul>
          <div className="total__wrapper">
            <p>
              total dos itens:{" "}
              <span>R$ {formatToString(req.data.cart.totalItems)}</span>
            </p>
            <p>
              taxa de entrega:{" "}
              <span>R$ {formatToString(req.data.cart.deliveryFee)}</span>
            </p>
            <p>
              total: <span>R$ {formatToString(req.data.cart.total)}</span>{" "}
            </p>
          </div>

          <div className="actions_wrapper">
            {buttons.map((button) => (
              <button key={button.id} onClick={() => button.onClick(req.id)}>
                {button.label}
              </button>
            ))}
          </div>
        </S.Single>
      ))}
    </S.Column>
  );
};

export default OrderColumn;
