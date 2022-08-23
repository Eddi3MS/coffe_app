import React from "react";
import * as S from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as Map } from "../../assets/Map.svg";
import { ReactComponent as Cart } from "../../assets/Cart.svg";
import { useCart } from "../../context";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "../../context/UserContext";
import Button from "../Button";

const Header = () => {
  const { cart } = useCart();
  const { user, logout } = useUser();
  const navigate = useNavigate();

  let cartCount = cart.length;

  const navigateToCart = () => {
    if (cartCount > 0) {
      navigate("/cart");
    } else {
      toast("Adicione items ao carrinho, primeiro!", {
        icon: "😉",
      });
    }
  };

  const navigateBackHome = () => {
    navigate("/");
  };

  return (
    <S.Header>
      <div className="container header_container">
        <Logo
          className="logo"
          aria-label="Coffee Logo"
          onClick={navigateBackHome}
        />

        <div className="flex-center">
          <S.Location>
            <Map />
            <span>Samonte, MG</span>
          </S.Location>
          <S.Cart aria-label="carrinho" onClick={navigateToCart}>
            <Cart />
            {cartCount > 0 && <span>{cartCount}</span>}
          </S.Cart>
          {user && (
            <S.User>
              <Link to="orders-list">Pedidos</Link>
              <Button onClick={logout} text="Logout" variant="logout" />
            </S.User>
          )}
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
