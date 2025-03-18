import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav, } from 'react-bootstrap';
import OffCan from './Cart';


export default function Head()
{
    return(
        <>
         <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home"><h2 className='text-danger '> <span> <i className="bi bi-yelp"></i>Pizza Shop</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="">
            <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#menu" className='fw-bold'>Menu</Nav.Link>
            <Nav.Link href="#must try"className='fw-bold'>Must Try</Nav.Link>
            <Nav.Link href="#contact"className='fw-bold'>Contact Us</Nav.Link>
            <OffCan />
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
        </>
    )
}