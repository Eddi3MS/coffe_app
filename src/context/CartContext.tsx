import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { calcTotal, formatToNumber } from "../utils/handleMoney";

type CartContextProps = {
  children: ReactNode;
};

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: string;
  totalPrice?: number;
}

type CartContextData = {
  cart: CartItem[];
  handleAddToCart: (product: CartItem) => void;
};

const CartContext = createContext({} as CartContextData);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = useCallback(
    (product: CartItem) => {
      const alreadyInCart = cart.find((item) => item.id === product.id);

      if (alreadyInCart) {
        const updatedCart = cart.map((cart) => {
          var temp = Object.assign({}, cart);

          if (temp.id === product.id) {
            let newQtt = (temp.quantity += product.quantity);
            temp.quantity = newQtt;
            temp.totalPrice = calcTotal(temp.price, newQtt);
          }
          return temp;
        });

        setCart(updatedCart);
      } else {
        setCart((current) => [
          ...current,
          {
            ...product,
            totalPrice: calcTotal(product.price, product.quantity),
          },
        ]);
      }
    },
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("context must be used within an Provider");
  }

  return context;
};
