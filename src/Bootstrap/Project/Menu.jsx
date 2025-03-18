import 'bootstrap/dist/css/bootstrap.min.css';

import {  Col, Container,  Row,  } from "react-bootstrap";
import PizzaCard from './PizzaCard';
import { useState } from 'react';




export default function Menu()
{


    const [menu]= useState([1,2,3,4,5,6])

    return(
        <>
        <section id='menu' className='bg-light'>
        <Container>
            

               <div className="text-center">
                  <h3 className="text-danger my-3 py-5">Treat Yourself With Our Every Day Menu <i className="bi bi-tiktok"></i></h3>
                 </div>
            <Row>

               {menu.map((items) => {
                    return(
                        <Col md={6} lg={4} key={items}>
                           <PizzaCard />
                 
                         </Col>
                    );
                    
                })} 

                 
           
            </Row>
          
            




         
        </Container>
        </section>

        </>
    )
}
