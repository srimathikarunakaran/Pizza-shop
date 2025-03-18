import { useState } from "react";
import {useDispatch} from 'react-redux';
import {usenavigate} from 'react-router-dom'
import { setname,setage,setphone, } from "./Action";





function DataSend()
{

    const[name, setnameValue] = useState('');
    const[age, setageValue] = useState('');
    const[phone, setphoneValue] = useState('');


    const dispatch = useDispatch();
    const navigate = usenavigate();



    const dataSubmit = (e) => {
        e.preventDefult;
        dispatch(setname(name));
        dispatch(setage(age));
        dispatch(setphone(phone));
        navigate('/DataRecive')

    }


    return(
        <>
          

          <div>
            <form onSubmit={dataSubmit}>
              
              <input type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e)=> setnameValue(e.target.value)}
               />

              <input type="text"
              placeholder="Enter Your Age"
              value={age}
              onChange={(e)=> setageValue(e.target.value)}
               />


             <input type="text"
              placeholder="Enter Your phone No"
              value={phone}
               onChange={(e)=> setphoneValue(e.target.value)}
               />


               <button>click</button>

            </form>
          </div>
        
        
        </>
    )
}



export default DataSend;