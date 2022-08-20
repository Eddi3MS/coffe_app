import React, { useEffect, useState } from "react";
import * as S from "./Order.styled";
import { ReactComponent as Image } from "../../assets/ordered.svg";
import { ReactComponent as Map } from "../../assets/order_map.svg";
import { ReactComponent as Payment } from "../../assets/order_payment.svg";
import { ReactComponent as Time } from "../../assets/Time.svg";
import { paymentTypes } from "../Cart/components/PaymentType/PaymentType";
import { onSnapshot } from "firebase/firestore";
import { requestRef } from "../../lib/firebase";
import { useParams } from "react-router-dom";

const status = {
  request_sent: "Pedido Enviado.",
  request_viewed: "Pedido Visualizado.",
  request_accepted: "Pedido em Produção.",
  request_denied: "Pedido Recusado.",
  request_left: "Pedido à Caminho.",
};

interface IData {
  id: string;
  data: {
    complement: string;
    status: string;
    number: string;
    save: boolean;
    district: string;
    name: string;
    street: string;
    payment: string;
  };
}

const Order = () => {
  const [data, setData] = useState<IData | null>(null);

  const { id } = useParams();

  useEffect(() => {
    const unsubscribe = onSnapshot(requestRef, (snapshot) => {
      setData(
        snapshot.docs
          .map((doc) => ({ id: doc.id, data: doc.data() }))
          .find((req) => req.id === id) as IData
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (data === null) {
    return <p>Carregando...</p>;
  }

  return (
    <S.Order>
      <div className="info__wrapper">
        <h1 className="font-2">Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <h2 className={`font-2 ${data.data.status}`}>
          Status:
          <span>{status[data.data.status as keyof typeof status]}</span>
        </h2>
        <S.Wrapper>
          <div className="delivery__wrapper">
            <div className="delivery__info">
              <Map />
              <div>
                <p>
                  Entrega em
                  <span>
                    {data.data.street}, {data.data.number}
                  </span>
                </p>
                <p>{data.data.district} - Samonte, MG</p>
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
                    paymentTypes.find(
                      (type) => type.value === data.data.payment
                    )?.title
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
