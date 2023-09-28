import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";

function Carros(props) {

    return (

    <Container className="mt-3">
        <Row>
        <Carro/>
        <Carro/>
        <Carro/>
        </Row>
    </Container>
    );
    }

export default Carros;


