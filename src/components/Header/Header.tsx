import React from "react";
import * as S from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Map } from "../../assets/Map.svg";
import { ReactComponent as Cart } from "../../assets/Cart.svg";
import { useCart } from "../../context";

const Header = () => {
  const { cart } = useCart();

  let cartCount = cart.length;

  return (
    <S.Header>
      <div className="container header_container">
        <Logo />

        <div className="flex-center">
          {cart.length > 0 && (
            <div
              style={{
                position: "absolute",
                top: "8rem",
                left: "50%",
                background: "#ccc",
                padding: "1rem",
              }}
            >
              <p style={{ color: "red", fontSize: "1.5rem" }}>provisorio</p>
              {cart.map((item) => (
                <p key={item.id}>{`${item.name} - ${
                  item.quantity
                } = R$${item.totalPrice?.toFixed(2)}`}</p>
              ))}
            </div>
          )}
          <S.Location>
            <Map />
            <span>Samonte, MG</span>
          </S.Location>
          <S.Cart aria-label="carrinho">
            <Cart />
            <span>{cartCount}</span>
          </S.Cart>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
