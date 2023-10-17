import { Container, Row, Button} from "react-bootstrap";
import { useRef, useState } from "react";
import Food from "./Food";

//Dados
import Foods from "../models/foods.js";

const Main = () => {
  let [foods, setFoods] = useState(Foods);

  const buttonAdd =  useRef(null);

  const handleAddFoodClick = (event) => {
    let food = {
      id: 5,
      name: "Sanduiche",
      src: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      alt: "Sanduiche muito bom"
    };

    setFoods([...foods, food]);

    buttonAdd.current.disabled = true;
  }

  return (
  <main>
    <Container >
      <h3 className="text-center mt-2">Cardápio</h3>

      <div className="d-flex justify-content-end">
        <Button 
          variant="secondary" 
          style={{fontSize:"15px", borderRadius:"20px"}}
          onClick={handleAddFoodClick}
          ref={buttonAdd}
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