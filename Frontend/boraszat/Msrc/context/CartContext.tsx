import { createContext, useContext, useState } from 'react';
import { drinks } from '../pages/Webshop'; //

type CartType = { [id: number]: number };

interface CartContextType {
  cart: CartType;
  updateCart: (id: number, amount: number) => void;
  clearCart: () => void;
  getCartItems: () => {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
}

const CartContext = createContext<CartContextType>({
  cart: {},
  updateCart: () => {},
  clearCart: () => {},
  getCartItems: () => [],
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartType>({});

  const updateCart = (id: number, amount: number) => {
    setCart(prev => ({ ...prev, [id]: amount }));
  };

  const clearCart = () => {
    setCart({});
  };

  const getCartItems = () => {
  return drinks
    .filter(drink => cart[drink.id])
    .map(drink => ({
      id: drink.id,
      name: drink.name,
      image: drink.image,
      price: drink.price,
      quantity: cart[drink.id]
    }));
};


  return (
    <CartContext.Provider value={{ cart, updateCart, clearCart, getCartItems }}>
      {children}
    </CartContext.Provider>
  );
};