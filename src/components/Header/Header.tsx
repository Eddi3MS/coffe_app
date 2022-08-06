import React from "react";
import * as S from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Map } from "../../assets/Map.svg";
import { ReactComponent as Cart } from "../../assets/Cart.svg";

const Header = () => {
  return (
    <S.Header>
      <Logo />

      <div className="flex-center">
        <S.Location>
          <Map />
          <span>Samonte, MG</span>
        </S.Location>
        <S.Cart>
          <Cart />
        </S.Cart>
      </div>
    </S.Header>
  );
};

export default Header;
