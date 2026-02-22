import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Car from './App'

let x = [1962, 2000, 2020];
let y = ['tigor', 'tiago', 'nano'];
let carInfo = {
  color: "red",
  length: 260,
  price: 2000000,
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Car model={x} name="tigor" year={y} carinfo={carInfo}/>
  </StrictMode>,
)
