import { Col, Card} from "react-bootstrap";

import "./food.css";

const Food = ({food}) => {
  return (
  <Col className="card-food" sm="6" lg="4" xl="3" mb="3">
    <Card>
      <Card.Header className="text-center">
        <span className="food-header">{food.name}</span>
      </Card.Header>
      <Card.Body className="p-0">
        <Card.Img alt={food.alt} src={food.src} />
      </Card.Body>
    </Card>
  </Col>
  )
}

export default Food;