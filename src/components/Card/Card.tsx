import React, { useState } from "react";
import { ReactComponent as Cart } from "../../assets/Cart.svg";
import { useCart } from "../../context";
import QuantityInput from "../QuantityInput";
import * as S from "./Card.styled";

interface ICardProps {
  coffee: {
    id: number;
    title: string;
    desc: string;
    price: number;
    price_show: string;
    Image: React.FC<React.SVGProps<SVGSVGElement>>;
    badges: string[];
  };
}

const Card = ({ coffee: { Image, ...rest } }: ICardProps) => {
  const [counter, setCounter] = useState(1);
  const { handleAddToCart } = useCart();

  const handleAddItemToCart = () => {
    let product = {
      id: rest.id,
      name: rest.title,
      quantity: counter,
      price: rest.price,
    };

    handleAddToCart(product);
  };

  return (
    <S.Card>
      <Image />
      <S.Badges>
        {rest.badges.map((badge) => (
          <S.Badge key={badge}>{badge}</S.Badge>
        ))}
      </S.Badges>

      <h3 className="font-2">{rest.title}</h3>
      <p>{rest.desc}</p>

      <S.Actions>
        <span>
          R$
          <span className="font-2">{rest.price_show}</span>
        </span>
        <QuantityInput counter={counter} setCounter={setCounter} />
        <S.CartButton onClick={handleAddItemToCart}>
          <Cart />
        </S.CartButton>
      </S.Actions>
    </S.Card>
  );
};

export default Card;
