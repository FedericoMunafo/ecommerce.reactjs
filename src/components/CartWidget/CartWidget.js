import React, {useContext} from "react";
import {CartContext} from '../CartContext/CartContext'

const CartWidget = () => {
  const {productCartList, removeItem, clear}= useContext(CartContext);

  return (
    <div>
      Mi carrito
      <div>
        {productCartList.map(producto =>(
          <>
          <p>{producto.title} - {producto.cantidad}</p>
          <button onClick={()=>removeItem(producto.id)}>Eliminar del Carrito</button>
          </>
        ))}
          <button onClick={clear}>Vaciar el Carrito</button>
      </div>
    </div>
  )
}

export default CartWidget;