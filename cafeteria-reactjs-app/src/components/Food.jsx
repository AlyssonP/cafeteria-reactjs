import { Col, Card } from "react-bootstrap";

import "./food.css";

const Food = ({food}) => {
  return (
  <Col col-sm="auto" >
    <Card>
      <Card.Header>
        {food.name}
        
      </Card.Header>
      <Card.Body className="p-0">
        <Card.Img alt={food.alt} src={food.src} />
      </Card.Body>
    </Card>
  </Col>
  )
}

export default Food;