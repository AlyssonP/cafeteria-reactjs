import { Container, Row, Button} from "react-bootstrap";
import { useState } from "react";
import Food from "./Food";

//Dados
import Foods from "../dataset/foods.js";

const Main = () => {
  let [foods, setFoods] = useState(Foods)

  return (
  <main>
    <Container >
      <h3 className="text-center mt-2">Cardápio</h3>

      <div className="d-flex justify-content-end">
        <Button 
          variant="secondary" 
          style={{fontSize:"15px", borderRadius:"20px"}}
        >
          +
        </Button>
      </div>
      
      {/* Lista de Cards Foods */}
      <Row className="justify-content-md-start mt-3">
        {foods.map((food) => <Food key={food.id} food={food}/> )}
      </Row>
    </Container>
  </main>
  )
};

export default Main;