import { useState } from "react"




export default function Tables()
{


let[data,setdata]= useState([]) ;
let[data1,setdata1]= useState([]) ;
let[data2,setdata2]= useState([]) ;




let datasubmit=(e) => 
{
    e.preventDefault()
     
}


    return(
        <>
        <form onSubmit={datasubmit} >
           
           <label htmlFor="start" >start</label>
           <input type="text" value={data} onChange={(e) => setdata(e.target.value)} />
           <br />


           <label htmlFor="End" >End</label>
           <input type="text"  style={{marginTop:"20px"}}  value={data1} onChange={(e) => setdata1(e.target.value)} />
           <br />

           <label htmlFor="Mul">Multiple</label>
           <input type="text" style={{marginTop:"20px"}} value={data2} onChange={(e) => setdata2(e.target.value)}  /><br />

           <input type="submit" style={{marginTop:"20px"}}  />

        <h1>{data}</h1>

        <h1>{data1}</h1>

        <h1>{data2}</h1>



        </form>
          


        </>
    )
}