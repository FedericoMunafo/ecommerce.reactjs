import React, {useContext} from "react";
import {CartContext} from '../CartContext/CartContext';
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";

const CartWidget = () => {

  const {productCartList, removeItem, clear, getTotalPrice}= useContext(CartContext);

  return (
    <div>
      {
        productCartList.length > 0 ?
        <div>
          {productCartList.map(producto =>(
            <>
            <p>{producto.title}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Precio por Unidad: ${producto.price}</p>
            <p>SubTotal: ${producto.cantidadPrecio}</p>
            <Button onClick={()=>removeItem(producto.id)}>Eliminar del Carrito</Button>
            </>
          ))}

            <Button onClick={clear}>Vaciar el Carrito</Button>
            <p>Monto Total: ${getTotalPrice()}</p>
        </div>
       
       :
       <>
       <p>El carrito esta vacío</p>
       <Link to ='/'>
          Agregar Productos
       </Link>
       </>
}
    </div>
  );
}

export default CartWidget;
