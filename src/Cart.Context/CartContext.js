import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addProduct = (Item, newCantidad) => {
    const {cantidad = 0} = cart.find(prod => prod.id === Item.id) || {};
    const newCart = cart.filter(prod => prod.id !== Item.id);
    setCart([...newCart, {...Item, cantidad: cantidad + newCantidad}])
  } 
  console.log('carrito:', cart);
  // const addProduct = (Item, cantidad) =>{
  //   let newCart;
  //   let product = cart.find(product => product.id === Item.id);
  //   if (product) {
  //       product.cantidad += cantidad;
  //       newCart = [...cart];
  //   } else{
  //       product = {...Item, cantidad : cantidad };
  //       newCart = [...cart, product];
  //   }
  //   setCart(newCart);
  // }

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false; 

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  
  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;