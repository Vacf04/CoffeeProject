import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    return storedCart ? storedCart : [];
  });

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function handleAddToCart(data) {
    let newCart = [];
    if (localStorage.getItem('cart')) {
      newCart = JSON.parse(localStorage.getItem('cart'));
      const productInCart = newCart.find((item) => item.id === data[0].id);

      if (productInCart) {
        productInCart.quant++;
      } else {
        newCart.push({
          id: data[0].id,
          quant: 1,
          name: data[0].name,
          image: data[0].image_url,
          price: data[0].price,
        });
      }
    } else {
      newCart.push({
        id: data[0].id,
        quant: 1,
        name: data[0].name,
        image: data[0].image_url,
        price: data[0].price,
      });
    }

    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function handleMinusClick(productId) {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId && product.quant > 1
          ? { ...product, quant: product.quant - 1 }
          : product,
      ),
    );
  }

  function handlePlusClick(productId) {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quant: product.quant + 1 }
          : product,
      ),
    );
  }

  function removeFromCart(productId) {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handlePlusClick,
        handleMinusClick,
        removeFromCart,
        cartQuant: cart
          .map((product) => product.quant)
          .reduce((a, b) => a + b, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
