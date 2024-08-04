import { createContext, FC, useContext, useState } from "react";

interface CartContextType {
  cart: Equipment[];
  addToCart: (equipment: Equipment) => void;
  removeFromCart: (cartItemId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Equipment[]>([]);

  const addToCart = (equipment: Equipment) => {
    setCart((prevCart) => [...prevCart, equipment]);
  };

  const removeFromCart = async (cartItemId: string) => {
    setCart(cart.filter((item) => item._id !== cartItemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used whithin a CartProvidier");
  }

  return context;
};
