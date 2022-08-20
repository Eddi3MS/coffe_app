import React from "react";
import { CartCard } from "../../../../components";
import { useCart } from "../../../../context";
import { formatToString } from "../../../../utils/handleMoney";
import * as S from "./CartInfo.styled";

const CartInfo = () => {
  const { cart } = useCart();

  const totalCart = cart
    .map((item) => item.totalPrice!)
    .reduce((sum, price) => sum + price, 0);

  return (
    <S.Cart>
      <h2 className="font-2">Cafés selecionados</h2>
      <div className="cart_items-wrapper">
        {cart.length > 0 ? (
          cart.map((prod) => <CartCard product={prod} key={prod.id} />)
        ) : (
          <span className="cart_empty">Não há items no carrinho.</span>
        )}

        <div className="info_wrapper">
          <div>
            <span>Total dos items</span>{" "}
            <span>R$ {formatToString(totalCart)}</span>
          </div>
          <div>
            <span>Entrega</span> <span>R$ 3,50</span>
          </div>
          <div className="info_total">
            <span>Total</span>{" "}
            <span>
              R$ {totalCart > 0 ? formatToString(totalCart + 3.5) : "0,00"}
            </span>
          </div>

          <button type="submit" className="confirm_btn">
            confirmar pedido
          </button>
        </div>
      </div>
    </S.Cart>
  );
};

export default CartInfo;
