import React from "react";
import { ReactComponent as Cart } from "../../assets/Cart.svg";
import * as S from "./Card.styled";

interface ICardProps {
  coffee: {
    id: number;
    title: string;
    desc: string;
    price: string;
    Image: React.FC<React.SVGProps<SVGSVGElement>>;
    badges: string[];
  };
}

const Card = ({ coffee: { Image, ...rest } }: ICardProps) => {
  return (
    <S.Card>
      <Image />
      <S.Badges>
        {rest.badges.map((badge) => (
          <S.Badge>{badge}</S.Badge>
        ))}
      </S.Badges>

      <h3 className="font-2">{rest.title}</h3>
      <p>{rest.desc}</p>

      <S.Actions>
        <span>
          R$
          <span className="font-2">{rest.price}</span>
        </span>
        <div className="quantity"></div>
        <button>
          <Cart />
        </button>
      </S.Actions>
    </S.Card>
  );
};

export default Card;
