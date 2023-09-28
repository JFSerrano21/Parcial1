import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function details(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={props.carro.image}
     />
     <Card.Body>
       <Card.Title>
        {props.carro.Title}
       </Card.Title>
       <Card.Text>{props.carro.carMaker}</Card.Text>
       <Card.Text>{props.carro.carModel}</Card.Text>
       <Card.Text>{props.carro.carYear}</Card.Text>
       <Card.Text>{props.carro.partName}</Card.Text>
       <Card.Text>{props.carro.available}</Card.Text>
       <Card.Text>{props.carro.price}</Card.Text>
       <Card.Text>{props.carro.description}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default details;