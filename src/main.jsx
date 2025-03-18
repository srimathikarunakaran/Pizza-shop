import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Website from './Bootstrap/Project/website';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Website/>
   
  </StrictMode>,
)
