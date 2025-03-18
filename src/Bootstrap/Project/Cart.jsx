import { useState } from "react";
import { Button , Offcanvas,} from "react-bootstrap";
import Order from "./Orders";



export default function OffCan()
{
   const [show, setShow] = useState(false);
  return(
    <>
        <Button variant="ligh" onClick={() => setShow(!show)} className="me-2 position-relative">
        <i className="bi bi-cart4"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          2+
         <span className="visually-hidden">Cart</span>
        </span>
         </Button>
       <Offcanvas show={show} onHide={() => setShow(!show)} placement={"end"} >
           <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Order />
          <div className="text-end m-3">
            <Button varient="danger" >Check Out</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    
    </>
  )
}