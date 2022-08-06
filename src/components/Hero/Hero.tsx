import React from "react";
import * as S from "./Hero.styled";
import BG from "../../assets/Background.svg";
import { ReactComponent as Coffee } from "../../assets/Coffee.svg";
import { ReactComponent as Cart } from "../../assets/CartCircle.svg";
import { ReactComponent as Time } from "../../assets/Time.svg";
import { ReactComponent as Wrap } from "../../assets/Wrap.svg";
import { ReactComponent as Fresh } from "../../assets/Fresh.svg";

const Hero = () => {
  return (
    <S.Hero background={BG}>
      <S.Content>
        <S.Title>
          <h1 className="font-2">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora.
          </p>
        </S.Title>
        <S.List>
          <li>
            <Cart />
            Compra simples e segura
          </li>
          <li>
            <Wrap />
            Embalagem mantém o café intacto
          </li>
          <li>
            <Time />
            Entrega rápida e rastreada
          </li>
          <li>
            <Fresh />O café chega fresquinho até você
          </li>
        </S.List>
      </S.Content>

      <Coffee />
    </S.Hero>
  );
};

export default Hero;
