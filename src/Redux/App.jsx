import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataSend from "./DataSend";
import DataRecive from "./dataRecive";



function App()
{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<DataSend />} />
            <Route  path="/DataRecive" element={<DataRecive />} />
        </Routes>
        
        
        </BrowserRouter>
        
        
      
        </>
    )
}


export default App;