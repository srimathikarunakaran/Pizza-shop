import { Col, Container, Row ,Form,InputGroup , FloatingLabel} from "react-bootstrap";




export default function Com()
{
    return(
        <>
        
        <section id="contact" className="bg-light py-3">

            <div className="text-center my-2 py-3">
                <h2 className=" text-danger ">
                    Commants <i className="bi bi-chat-left-heart"></i>
                </h2>
            </div>

            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                    <Form>
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" className="bg-danger"><i className="bi bi-envelope"></i></InputGroup.Text>
                        <FloatingLabel controlId="floatingInput" label="Email address" className="" >
                                  <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                     
                     
                      </InputGroup>


                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1"  className="bg-danger"><i className="bi bi-person-fill"></i></InputGroup.Text>
                        <FloatingLabel controlId="floatingInput" label="Name" className=" " >
                                  <Form.Control type="text" placeholder="Name" />
                        </FloatingLabel>
                     
                     
                      </InputGroup>


                      <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3" >
                        <Form.Control as="textarea" placeholder="Leave a comment here" />
                      </FloatingLabel>

                    </Form>
                    </Col>
                </Row>
            </Container>

        </section>
        
        </>

    )
}