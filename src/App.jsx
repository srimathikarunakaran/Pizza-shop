import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import {faPen } from '@fortawesome/free-solid-svg-icons'
import {faMicrophone } from '@fortawesome/free-solid-svg-icons'
import backgroundImage from './pic.jpg'






function App()
{
  return(
    
      
    
    <div className='main-conatainer' style={{display:"flex",backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',}}>

      <nav style={{display:"flex",position:"fixed",top:20,color:"white"}}>
        <div style={{display:"flex",}}>
        <span style={{marginRight:30,marginLeft:"1100px",cursor:'pointer'}}>Gmail</span>
        <span style={{marginRight:30,cursor:"pointer"}}>Images</span>
        <FontAwesomeIcon icon={faFlask} style={{marginRight:30,cursor:"pointer"}} />
        <span className='user'><FontAwesomeIcon icon={faCircleUser} /></span>
        </div>
      </nav>

      <div className='conatiner' style={{color:"white"}}>
          <h1 style={{fontWeight:600,textAlign:"center",fontSize:"100px",marginTop:"200px",padding:"15px",color:"#81828c"}}>Google</h1>
          <div style={{borderRadius:"20px",width:"750px",backgroundColor:"gray",marginLeft:"330px",paddingTop:"5px",paddingBottom:"5px"}}>
          <FontAwesomeIcon icon={faMagnifyingGlass}  style={{marginLeft:"10px",fontSize:"15px",color:"black"}}/>
          <input type="text"  style={{width:"600px",padding:"10px",backgroundColor:"gray",border:"none", cursor:"pointer"}} 
          />
          <FontAwesomeIcon icon={faMicrophone}  style={{marginLeft:"50px",color:"black"}}/>
          </div>
          


          <div style={{marginLeft:"1000px",marginTop:"20px", border:"2px solid",borderRadius:"50%",width:"40px",height:"40px"}}>
            
            <FontAwesomeIcon icon={faPlus}  style={{marginLeft:"12px",marginTop:"11px", cursor:"pointer"}}/>
          </div>

          <div style={{marginLeft:"1300px",marginTop:"50px",fontSize:"16px", borderRadius:"50%",backgroundColor:"#9a9da1",width:"30px",height:"30px"}}>
          <FontAwesomeIcon icon={faPen}  style={{marginTop:"5px",marginLeft:"5px",cursor:"pointer",color:"black"}}/>
          </div>
          
        </div> 

    </div>
    
  )
}


export default App;