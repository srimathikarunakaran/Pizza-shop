import {Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';




export default function Typo()
{
    return(
        <>

        <Container>

        {/* display */}

        <h1 className='text-uppercase text-danger fst-italic'>display :</h1>
        
        <h1 className="display-1">srimathi karunakaran</h1>

        <h1 className="display-3 text-muted">srimathi karunakaran</h1>

        <h1 className="display-5">srimathi karunakaran</h1> <br />
       <br />





        {/* lead(text family) and muted text */}
          
          <h1 className='text-primary fst-italic'>Normal p tag :</h1>     
        <p>hi im srimathi karunakaran from cuddalore ...i like to watch k drama and kpop thing </p>
        <br />

               <h1 className='text-danger fst-italic'>Lead and Muted Text</h1>
        <p className="lead text-muted ">hi im srimathi karunakaran from cuddalore ...i like to watch k drama and kpop thing and some motivational videos like that  </p>
        
<br />
<br />
        {/* Text Allign */}
        <h1 className='text-danger fst-italic'> Text Allign :</h1>

        <h3 className='display-5 text-start'>srimathi karunakaran</h3>

          <h3 className='display-5 text-center'>srimathi karunakaran</h3> 
      
          
          <h3 className='display-5 text-end'>srimathi karunakaran</h3> <br /> <br />

          {/* Text Transform */}
                 <h1 className='text-danger fst-italic'> Text Transform :</h1>
                 <h3 className='text-primary'>Capitalized</h3>
                 <p className='text-capitalize'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut expedita pariatur reiciendis libero quasi ratione maxime ad quis assumenda, mollitia consequatur natus quaerat molestias perspiciatis nam, incidunt deleniti vero laboriosam.</p>
                  <h3 className='text-primary'>Uppercase</h3>
                 <p className='text-uppercase'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut expedita pariatur reiciendis libero quasi ratione maxime ad quis assumenda, mollitia consequatur natus quaerat molestias perspiciatis nam, incidunt deleniti vero laboriosam.</p>

<br /><br />
         {/*Font Size  */}

         <h1 className='text-danger fst-italic'>Font Size :</h1>

          <h1 className='fs-1'>srimathi</h1>
          <h1 className='fs-3'>srimathi</h1>
          <h1 className='fs-5'>srimathi</h1> <br /><br />


          {/* font Weight */}
          <h1 className='text-danger fst-italic'>Font weight :</h1>

          <p className='fw-bold'>srimathi karunakaran</p>
          <p className='fw-bolder'>srimathi karunakaran</p>
          <br /><br />

          {/* Font Style */}
          <h1 className='text-danger fst-italic'>Font Style :</h1>

          <p className='fst-italic fw-bold'>srimathi karunakaran</p>
          <br /><br />

          {/* Text Decoration */}
            <h1 className='text-danger fst-italic'>Text Decoration :</h1>
            <h3 className='text-primary'>Underline tag :</h3>
           <p className='text-decoration-underline'>srimathi karunakaran</p>
            <h3 className='text-primary'>Underline tag with anchor</h3>
               
           <a href="#" className='text-decoration-underline'>click here</a>


           {/* image */}

           <h1 className='text-info'>Image :</h1>
           <br />
           <br />

           <br />

           <br />

           <br />
           {/* Colors */}
            <p className='text-bg-primary text-warning'>srimathi karunakaran</p>

            {/* light,dark,muted */}
            <p className='text-secondary bg-dark'>srimathi karunakaran</p>

          {/* opacity */}
          <p className='text-black-50'>srimathi karunakaran</p>


          {/* padding x ,y */}
          <p className='text-indigo bg-danger px-5 py-5 w-25'>srimathi karunakaran</p>
          {/* padding top,bottom  */}
          <p className='text-primary bg-dark  pt-2 pb-3 '>srimathi karunakaran</p>


          {/* Margin */}
          <p className='text-dark bg-primary p-3 m-5'>srimathi karunakaran</p>
          <p className='text-dark bg-primary p-3 m-auto w-25'>srimathi karunakaran</p>


          {/* Border */}
          <p className='text-dark bg-primary p-3 m-5 border border-3 border-danger rounded-pill w-50 text-center'>srimathi karunakaran</p>
           
           
           {/* display */}
         {/* hide and show */}
         <h2 className="m-3 p-3 bg-danger text-black">srimathi karunakaran</h2>


           
           
           </Container>



        </>
    )
}