import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import React, { useState, useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';



const ItemDetail = ({dato}) => {
  const {addItem} = useContext(CartContext);
  const [irAlCarrito, setirAlCarrito] = useState(false);

  const onAdd = (cantidad)=>{
    setirAlCarrito(true);
    addItem(dato, cantidad)
  }

  return (
  <Link to={`/detalle/${dato.id}`}>
  <Row xs={1} md={1} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={dato.pictureUrl} />
          <Card.Body>
            <Card.Title><h2>{dato.title}</h2></Card.Title>
            <Card.Text>
            <p>{dato.description}</p>
            <p>{dato.price}</p>
            {
              irAlCarrito
                ? <Link to='/carrito'>Finalizar Compra</Link>
                : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            }
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  </Link>
);
}

export default ItemDetail;
