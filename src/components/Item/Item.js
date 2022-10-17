import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
import CardGroup from 'react-bootstrap/CardGroup';

const Item = ({id, title, description, price, pictureUrl}) => {
  return (

    <CardGroup>
     <Card>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title><h2>{title}</h2></Card.Title>
          <Card.Text>
          <p>{description}</p>
          <p>${price}</p>
          </Card.Text>
          <Link to={`/detalle/${id}`}>
            <Button variant="secondary">Detalle del Producto</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title><h2>{title}</h2></Card.Title>
          <Card.Text>
          <p>{description}</p>
          <p>${price}</p>
          </Card.Text>
          <Link to={`/detalle/${id}`}>
            <Button variant="secondary">Detalle del Producto</Button>
          </Link>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title><h2>{title}</h2></Card.Title>
          <Card.Text>
          <p>{description}</p>
          <p>${price}</p>
          </Card.Text>
          <Link to={`/detalle/${id}`}>
            <Button variant="secondary">Detalle del Producto</Button>
          </Link>
        </Card.Body>
      </Card>
    </CardGroup>    
  );
};        

export default Item;
