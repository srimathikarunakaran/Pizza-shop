import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import {  Container, Card,Button, Row, Col, } from "react-bootstrap";

import Cpizza from './Images/Cpizza.jpg';
import MyVerticallyCenteredModal   from 'react-bootstrap/Modal';



export default function PizzaCard()
{

    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
        <Container fluid>
            <Row>
            <Col >
                
                    <Card className='m-3 border border-danger-subtle'>
                     <Card.Img variant="top" src={Cpizza}  />
                          <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                      the card content.
                    </Card.Text>
                      <div className="text-center"> 
                      <Button variant="danger"  onClick={() => setModalShow(true)}>Add to Basket</Button>
                      </div>
                 
                  </Card.Body>
                    </Card>

                    <MyVerticallyCenteredModal
                    show={modalShow}
                     onHide={() => setModalShow(false)}
                      />
                
                </Col>
            </Row>
        </Container>
        </>
    )
}

