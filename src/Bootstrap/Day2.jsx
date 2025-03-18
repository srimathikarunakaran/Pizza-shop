import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Day2()
{
    return(
        <>
         <Container>
         
         {/* display */}
         {/* hide and show */}
         <h2 className="m-3 p-3 bg-danger text-black d-block">srimathi karunakaran</h2>

         {/* flex  */}

         <h1 className="text-danger">Flex :</h1>
         <div className="d-flex ">
            <p className="m-3 p-3 text-bg-primary">srimathi karunakaran</p>
            <p className="m-3 p-3 text-bg-primary">srimathi karunakaran</p>
            <p className="m-3 p-3 text-bg-primary">srimathi karunakaran</p>
         </div>


          {/* align items end and self start */}
          <h2 className="text-warning">Allign Items and self-Start :</h2>
         <div className="d-flex flex-column text-center align-items-end">
            <p className="m-3 p-3 text-bg-primary w-50">srimathi karunakaran</p>
            <p className="m-3 p-3 text-bg-primary w-50 align-self-start">srimathi karunakaran</p>
            <p className="m-3 p-3 text-bg-primary w-50">srimathi karunakaran</p>
         </div>

    {/* align items start and self end */}
    <h2 className="text-warning">Allign Items and self-end :</h2>
         <div className="d-flex flex-column text-center align-items-start">
            <p className="m-3 p-3 text-bg-primary w-50">srimathi karunakaran</p>
            <p className="m-3 p-3 text-bg-primary w-50 align-self-end">srimathi karunakaran</p>
            <p className="m-3 p-3 text-bg-primary w-50">srimathi karunakaran</p>
         </div>



{/* stack */}
  
  <h1 className="text-danger">
    Stack :
  </h1>

  <h2 className="text-primary">Vertical Stack :</h2>
        <div className="vstack gap-2 align-items-center">
            <p className="m-3 p-3 text-bg-secondary w-50">srimathi karunakaran</p>
            <p className="m-3 p-3 text-bg-secondary w-50">srimathi karunakaran</p>
            <p className="m-3 p-3 text-bg-secondary w-50">srimathi karunakaran</p>
        </div>
 
        <h2 className="text-primary">Horizantal Stack :</h2>

        <div className="hstack gap-2 align-items-center">
            <p className="m-3 p-3 text-bg-secondary w-50">srimathi karunakaran</p>
            <p className="m-3 p-3 text-bg-secondary w-50">srimathi karunakaran</p>
            <p className="m-3 p-3 text-bg-secondary w-50">srimathi karunakaran</p>
        </div>




       {/* shadow */}

       {/* <h1 className="text-danger">Shadow</h1>
       <div className=" shadow-lg bg-primary m-3 p-3">srimathi karunakran</div> */}

            <div className="shadow-none p-3 mb-5 bg-light rounded">No shadow</div>
            <div className="shadow-sm p-3 mb-5 bg-white rounded">Small shadow</div>
            <div className="shadow p-3 mb-5 bg-white rounded">Regular shadow</div>
            <div className="shadow-lg p-3 mb-5 bg-white rounded">Larger shadow</div>





         </Container>
        
        </>
    )
}








