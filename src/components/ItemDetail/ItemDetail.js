import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ItemDetail = ({dato}) => {
  return (
  <Row xs={1} md={2} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={dato.pictureUrl} />
          <Card.Body>
            <Card.Title><h2>{dato.title}</h2></Card.Title>
            <Card.Text>
            <p>{dato.description}</p>
            <p>{dato.price}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>

);
}

export default ItemDetail;
