import React, { ChangeEvent, useMemo, useState } from "react";
import { Card, Hero } from "../../components";
import { useCart } from "../../context";
import { CoffeeData } from "../../data/coffeeData";
import * as S from "./Home.styled";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return search
      ? CoffeeData.filter(
          (coffee) =>
            coffee.desc.includes(search) ||
            coffee.title.includes(search) ||
            coffee.badges.includes(search)
        )
      : CoffeeData;
  }, [search]);

  return (
    <>
      <Hero />
      <S.Home>
        <S.Header>
          <h2 className="font-2">Nossos cafés</h2>
          <input
            type="search"
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            placeholder="Buscar..."
          />
        </S.Header>

        <S.Wrapper>
          {filteredData.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </S.Wrapper>
      </S.Home>
    </>
  );
};

export default Home;
