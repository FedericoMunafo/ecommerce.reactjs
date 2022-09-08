import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Item = ({id, title, description, price, pictureUrl, stock}) => {
  return (
  
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
              <Card.Title><h2>{title}</h2></Card.Title>
              <Card.Text>
              <p>{description}</p>
              <p>{price}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  
  );
};        

export default Item;
