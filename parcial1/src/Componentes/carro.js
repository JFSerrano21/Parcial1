import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Carro(props) {

    const loadDetail = () => {
        console.log("loadDetail");
      };

    return (
        <Col>
        <Card style={{ width: "18rem" }} onClick={loadDetail}>
            <Card.Body className="mb-3">

            <Card.Title>           
                 <Link to={"/details/" + props.carro.carModel}>
                 {props.carro.partName}
                </Link>
            </Card.Title>
            <Card.Text>{props.carro.description}</Card.Text>
            <Card.Text>{"detail"}</Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
    }

export default Carro;

