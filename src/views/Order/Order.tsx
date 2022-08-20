import React, { useEffect, useState } from "react";
import * as S from "./Order.styled";
import { ReactComponent as Image } from "../../assets/ordered.svg";
import { ReactComponent as Map } from "../../assets/order_map.svg";
import { ReactComponent as Payment } from "../../assets/order_payment.svg";
import { ReactComponent as Time } from "../../assets/Time.svg";
import { CookiesHandler } from "../../utils/cookies";
import { paymentTypes } from "../Cart/components/PaymentType/PaymentType";

const Order = () => {
  const data = useState(() => {
    return CookiesHandler.getCookies();
  })[0];

  useEffect(() => {
    if (data && !data.save) {
      CookiesHandler.destroyCookies();
    }
  }, []);

  return (
    <S.Order>
      <div className="info__wrapper">
        <h1 className="font-2">Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <S.Wrapper>
          <div className="delivery__wrapper">
            <div className="delivery__info">
              <Map />
              <div>
                <p>
                  Entrega em{" "}
                  <span>
                    {data?.street}, {data?.number}
                  </span>
                </p>
                <p>{data?.district} - Samonte, MG</p>
              </div>
            </div>
            <div className="delivery__info">
              <Time />
              <div>
                <p>Previsão de Entrega</p>
                <span>20min - 30min</span>
              </div>
            </div>
            <div className="delivery__info">
              <Payment />
              <div>
                <p>Pagamento na Entrega</p>
                <span>
                  {
                    paymentTypes.find((type) => type.value === data?.payment)
                      ?.title
                  }
                </span>
              </div>
            </div>
          </div>
        </S.Wrapper>
      </div>
      <div className="image__wrapper">
        <Image />
      </div>
    </S.Order>
  );
};

export default Order;
