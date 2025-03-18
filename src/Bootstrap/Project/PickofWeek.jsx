import { Col, Container, Row,Image, Button,Toast,ToastContainer, } from "react-bootstrap";

import Pizza from './Images/Pizza.jpg'
import { useState } from "react";




export default function Pic()
{


    const [show, setShow] = useState(false);
    return(
        <>
        <section id="must try" className="my-3">
            <div className="text-center  m-5 p-3">

                <h2 className="text-danger "> <i className="bi bi-search-heart "></i>Pick Of The Week</h2>
            </div>

            <Container>
                <Row  className="align-items-center">
                    <Col md={7}>
                       
                       
                       <Image src={Pizza} fluid alt="Pizza" className="border rounded"></Image>
                    </Col>


                    <Col md={5}>
                    <div className="p-3">
                        <h2 className="h1">Double Chees Pizza</h2>
                        <p className="lead text-muted">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, pariatur excepturi suscipit nihil laboriosam .
                        </p>
                        <Button onClick={() => setShow(true)} className="bg-danger text-black "> <i className="bi bi-basket px-2"></i>Buy Now</Button>
                    </div>
                    
                    </Col>
                </Row>
            <ToastContainer
                      className="p-3 position-fixed bottom-0 end-0"
                      position={ 'bottom-end'}
                       style={{ zIndex: 1 }}
                >
               <Toast onClose={() =>setShow(false)}  show={show} delay={3000} autohide >
                 <Toast.Header closeButton={false}>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                         <strong className="me-auto">Added</strong>
                         <small>11 mins ago</small>
                 </Toast.Header>
                 <Toast.Body> Item Added to cart.</Toast.Body>
               </Toast>
           </ToastContainer>
    </Container>


  </section>
        
        </>
    )
}