import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
  };

  const addToCart = (product) => {

    const existing = cart.find(p => p.id === product.id);

    if (existing) {

      const updated = cart.map(p =>
        p.id === product.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );

      setCart(updated);

    } else {

      setCart([...cart, { ...product, quantity: 1 }]);

    }

  };

  const increase = (id) => {

    const updated = cart.map(p =>
      p.id === id
        ? { ...p, quantity: p.quantity + 1 }
        : p
    );

    setCart(updated);
  };

  const decrease = (id) => {

    const updated = cart.map(p =>
      p.id === id
        ? { ...p, quantity: Math.max(1, p.quantity - 1) }
        : p
    );

    setCart(updated);
  };

  const removeFromCart = (id) => {

    const updated = cart.filter(p => p.id !== id);
    setCart(updated);
  };

  return (

    <CartContext.Provider value={{
      cart,
      addToCart,
      increase,
      decrease,
      removeFromCart,
      clearCart
    }}>

      {children}

    </CartContext.Provider>

  );
}