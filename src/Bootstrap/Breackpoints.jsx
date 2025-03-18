
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Col } from 'react-bootstrap';


export default function Breack()
{
    return(
        <>

        {/* Narmal Container */}
        
        <Container>
            

            <div className="text-bg-primary m-3 p-3">
                <h2 className='text-warning'>Normal Container :</h2>
                srimathi karunakaran</div>

        </Container>

        {/* Fluid Container */}

        <Container fluid>

            <div className="text-bg-secondary m-3 p-3">
            <h2 className='text-warning'>Fluid Container :</h2>
                srimathi karunakaran</div>

        </Container>


    {/* Fluid MD container */}
        <Container fluid="md">

            <div className="text-bg-secondary m-3 p-3">
            <h2 className='text-warning'>Fluid MD Container :</h2>
                srimathi karunakaran</div>

        </Container>


       {/* Fluid LG container */}
       <Container fluid="lg">

             <div className="text-bg-secondary m-3 p-3">
             <h2 className='text-warning'>Fluid LG Container :</h2>
                srimathi karunakaran</div>

          </Container>

 <br />
 <br /><br />


         

    <Container >

         {/* Basic Grid System  */}
         <Row>
            <h1 className='text-danger'  >Column :</h1>
            <Col className='text-bg-primary  ' xs lg="2" > srimathi karunakaran</Col>

            <Col className='text-bg-secondary'md="auto" >srimathi karunakaran </Col>
            <Col className='text-bg-primary'xs lg="2" >srimathi karunakaran </Col>
         </Row>


         <Row>
            <h1 className='text-danger'>Column :</h1>
            <Col className='text-bg-primary ' >srimathi karunakaran</Col>

            <Col className='text-bg-secondary ' md="auto">srimathi karunakaran</Col>
            <Col className='text-bg-primary ' xs lg="2">srimathi karunakaran </Col>
         </Row>
        
<br /><br />
<h2 className='text-danger'>Multiple Grid in Column :</h2>
         <Row className='mt-3'>
        <Col className='text-bg-secondary p-3  ' xs={12} md={8}>
        srimathi karunakaran
        </Col>
        <Col className='text-bg-primary  p-3  ' xs={6} md={4}>
        srimathi karunakaran
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      
      <Row className='mt-3'>
        <Col  className='text-bg-primary p-3 ' xs={6} md={4}>
        srimathi karunakaran
        </Col>
        <Col className='text-bg-secondary p-3  '  xs={6} md={4}>
        srimathi karunakaran
        </Col>
        <Col  className='text-bg-primary p-3 '  xs={6} md={4}>
        srimathi karunakaran
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      
      <Row className='mt-3'>
        <Col className='text-bg-primary  p-3 '  xs={6}>srimathi karunakaran</Col>
        <Col className='text-bg-secondary p-3  '  xs={6}>srimathi karunakaran</Col>
      </Row>


      <h2 className='text-danger'> Row Grid :</h2>
      <Row md={3} className='m-3'>
        <Col className='text-bg-primary  p-3 ' >1 of 3</Col>
        <Col className='text-bg-secondary p-3  ' xs={6}>2 of 3</Col>
        <Col className='text-bg-primary  p-3 ' >3 of 3</Col>
      </Row>



      <h1 className='text-danger'>MY Practice :</h1>
       <Row className='mt-3'>
        <Col className='text-bg-primary border p-3 ' xs={12} md={4}>srimathi karunakaran</Col>
        <Col className='text-bg-primary border p-3 ' xs={6} md={4}>srimathi karunakaran</Col>
        <Col className='text-bg-primary border p-3 ' xs={6} md={4}>srimathi karunakaran</Col>
       </Row>


       <Row className='mt-3'>
        <Col className='text-bg-primary border p-3 ' sm={6} md={6}>srimathi karunakaran</Col>
        <Col className='text-bg-primary border p-3 ' sm={3} md={3}>srimathi karunakaran</Col>
        <Col className='text-bg-primary border p-3 ' sm={3} md={3}>srimathi karunakaran</Col>
       </Row>



       <Row className='mt-3'>
        <Col className='text-bg-primary border p-3 ' xs={12} md={4}>srimathi karunakaran</Col>
        <Col className='text-bg-primary border p-3 ' xs={6} md={4}>srimathi karunakaran</Col>
        <Col className='text-bg-primary border p-3 ' xs={6} md={4}>srimathi karunakaran</Col>
       </Row>
        
        </Container>







        </>
    )
}
