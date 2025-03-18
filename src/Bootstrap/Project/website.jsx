

import Ban from "./Banner";
import Com from "./Commants.jsx";
import Head from "./Header";
import Menu from './Menu.jsx';
import Pic from "./PickofWeek.jsx";



export default function Website()
{
    return(
        <>
         <Head />
         

         <Ban />


         <Menu />


         <Pic />

         <Com />

         <div className="text-center my-3 text-danger samll">Copyright 2025-2026</div>

         <offCan />
        
        </>
    )
}