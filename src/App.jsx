import Button from "./components/Button"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item from "./item/item"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  function clickearConfirmar (){
    alert("esta seguro que desea confirmar la compra ?")
  }
  
  function clickearAdd(){
    alert("se agrego a su Carrito")
  }
  return (
    <>
      <div className="header">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Biblioteca</a></li>
          <li><a href="#">Figuras</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
      <div>
        <Button label="ADD TO CART" 
                color="#fd7014"
                onClick={clickearAdd}/>
        <Button color="green" 
                label ="Confirmar Compra"
                onClick={clickearConfirmar} />
      </div>
      <h1>Vite + React</h1>
      <Item/>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
