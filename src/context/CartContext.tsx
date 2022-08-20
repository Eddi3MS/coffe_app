import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import toast from "react-hot-toast";

type CartContextProps = {
  children: ReactNode;
};

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  totalPrice?: number;
}

type OrderType = "ORDERING" | "ORDERED" | "VIEWING" | "APPROVED";

type CartContextData = {
  cart: CartItem[];
  handleAddToCart: (product: CartItem) => void;
  handleRemoveFromCart: (productId: number, removeAll?: boolean) => void;
  orderStatus: OrderType;
  updateOrderStatus: (newStatus: OrderType) => void;
};

const CartContext = createContext({} as CartContextData);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderStatus, setOrderStatus] = useState<OrderType>("ORDERING");

  const handleAddToCart = useCallback(
    (product: CartItem) => {
      const alreadyInCart = cart.find((item) => item.id === product.id);

      if (alreadyInCart) {
        const updatedCart = cart.map((cart) => {
          var temp = Object.assign({}, cart);

          if (temp.id === product.id) {
            let newQtt = (temp.quantity += product.quantity);
            temp.quantity = newQtt;
            temp.totalPrice = temp.price * newQtt;
          }
          return temp;
        });

        setCart(updatedCart);
      } else {
        setCart((current) => [
          ...current,
          {
            ...product,
            totalPrice: product.price * product.quantity,
          },
        ]);
      }

      toast.success("Produto adicionado com sucesso.", {
        duration: 3000,
        position: "top-center",
        icon: "🤤",
      });
    },
    [cart]
  );

  const handleRemoveFromCart = useCallback(
    (productId: number, removeProduct = false) => {
      toast.success("Produto removido com sucesso.", {
        duration: 3000,
        position: "top-center",
        icon: "😕",
      });
      if (removeProduct) {
        let newCart = cart.filter((cart) => cart.id !== productId);
        setCart(newCart);
        return;
      }

      const updatedCart = cart.map((cart) => {
        var temp = Object.assign({}, cart);

        if (temp.id === productId) {
          let newQtt = (temp.quantity -= 1);
          temp.quantity = newQtt;
          temp.totalPrice = temp.price * newQtt;
        }
        return temp;
      });

      setCart(updatedCart);
    },
    [cart]
  );

  const updateOrderStatus = useCallback((newStatus: OrderType) => {
    setOrderStatus(newStatus);
    setCart([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        orderStatus,
        updateOrderStatus,
        cart,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
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
