import React, {useContext, useState} from "react";
import {CartContext} from '../CartContext/CartContext';
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { db } from "../../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const CartWidget = () => {

  const {productCartList, removeItem, clear, getTotalPrice}= useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");
  const sendOrder = (event) => {
  event.preventDefault();
  const order = {
    buyer: {
      name: event.target[0].value,
      phone: event.target[1].value,
      email: event.target[2].value
    },
  items: productCartList,
  total: getTotalPrice()
  }
  const queryRef = collection(db, "orders");
  addDoc(queryRef, order).then(response => {
    setIdOrder(response.id)
    clear();
  });
  } 
  
  // const updateOrder = () => {
  //   const queryRef = doc(db, "orders",);
  // }

  return (
    <div>
      {idOrder ?
      <> 
        <p>Su orden fue creada, id {idOrder}</p>
        <Link to ='/'>
            Agregar Productos
        </Link>
      </> 
      :
      <div>
        {
          productCartList.length > 0 ?
          <div>
            {productCartList.map(producto =>(
              <div>
                <p>{producto.title}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio por Unidad: ${producto.price}</p>
                <p>SubTotal: ${producto.cantidadPrecio}</p>
                <Button onClick={()=>removeItem(producto.id)}>Eliminar del Carrito</Button>
              </div>
            ))}

            <Button onClick={clear}>Vaciar el Carrito</Button>
            <p>Precio total:={getTotalPrice()}</p>
            <Form onSubmit={sendOrder}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control type="text" placeholder="Ingresar nombre de usuario" />
                <Form.Text className="text-muted">
                  
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  No compartiremos tu email con nadie.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="Telefono" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar Orden
              </Button>
            </Form>
          {/* <p>Monto Total: ${getTotalPrice()}</p> */}
        </div> 
        :
          <>
            <p>El carrito esta vacío, agrega algunos productos</p>
            <Link to ="/">
                Ir al Listado de Productos
            </Link>
          </>
        }
      </div>
      }
      </div>  
  )    

}

export default CartWidget;
