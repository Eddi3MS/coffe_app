import QuantityInput from "../QuantityInput";
import { CoffeeData } from "../../data/coffeeData";
import { useCart } from "../../context";
import { formatToString } from "../../utils/handleMoney";
import * as S from "./CartCard.styled";
import { ReactComponent as Trash } from "../../assets/trash.svg";

interface ICartCard {
  product: {
    id: number;
    name: string;
    quantity: number;
    price: number;
    totalPrice?: number;
  };
}

const findImage = (id: number) => {
  let Image = CoffeeData.find((data) => data.id === id)?.Image!;
  return <Image />;
};

const CartCard = ({ product }: ICartCard) => {
  const { handleAddToCart, handleRemoveFromCart } = useCart();

  const handleAddItems = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      quantity: 1,
      price: product.price,
    };

    handleAddToCart(productToAdd);
  };

  const handleRemoveItems = () => {
    handleRemoveFromCart(product.id);
  };

  const removeFromCart = () => {
    handleRemoveFromCart(product.id, true);
  };

  return (
    <S.CartCard>
      <>
        {findImage(product.id)}
        <S.Content>
          <S.Title>{product.name}</S.Title>
          <div className="flex-center  actions_wrapper">
            <QuantityInput
              counter={product.quantity}
              cartActions={{
                handleAdd: handleAddItems,
                handleRemove: handleRemoveItems,
              }}
            />
            <button
              className=" flex-center remove_btn"
              onClick={removeFromCart}
              type="button"
            >
              <Trash />
              <span>Remover</span>
            </button>
          </div>
        </S.Content>
        <span className="total_price">
          R${formatToString(product.totalPrice!)}
        </span>
      </>
    </S.CartCard>
  );
};

export default CartCard;
