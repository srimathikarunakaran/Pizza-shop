import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row,Carousel } from "react-bootstrap";
import Pizza from './Images/Pizza.jpg';
import Pizza1 from './Images/Pizza1.jpg';
import Pizza2 from './Images/Pizza2.jpg';




export default function Ban()
{
    return(
        <>
        <Container fluid>
            <Row className="justify-content-center align-items-center">
                <Col lg={8}>

                <Carousel>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block w-100"
      src={Pizza}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Chicken Pizza</h3>
      <p className="d-none d-sm-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block w-100"
      src={Pizza1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Cheese pizza</h3>
      <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={Pizza2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Veggi Pizza</h3>
      <p className="d-none d-sm-block">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item >
</Carousel>
                </Col>
            </Row>

            <div className='text-center '>
            <h2 className="display-5 mt-5 text-danger">Pizzas For Every Occations!</h2>
            <p className=" mt-5 ">Lorem  srimathijvk khdddrtuh kjsrtrj ipsum dolor sit amet consectetur molestias tenetur <br />fuga accusantium natus inventore quia sequi.</p>
       
            </div>
        </Container>
        </>
    )
}