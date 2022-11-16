import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [items, setItems] = useState([]);

<<<<<<< HEAD
  function addProducts(value, item) {
    if (value > 0) {
      setCartCount(cartCount + value);
      setItems([...items, { ...item, cantidad: value }]);
=======
    const [cartCount, setCartCount] = useState(0)
    const [items, setItems] = useState([])

    function addProducts(value, item) {
        if (value > 0) {
            setCartCount(cartCount + value)
            setItems([...items,
                { ...item, cantidad: value }])
            
        }
>>>>>>> 88597486128ad7800867f1356889c2644cdd6897
    }
  }

<<<<<<< HEAD
  return (
    <CartContext.Provider
      value={{
        addProducts,
        cartCount,
        items,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
=======
    return (
        <CartContext.Provider value={ {
            addProducts,
            cartCount,
            items,
        } }>
            {children}
        </CartContext.Provider>
    )
}
>>>>>>> 88597486128ad7800867f1356889c2644cdd6897
