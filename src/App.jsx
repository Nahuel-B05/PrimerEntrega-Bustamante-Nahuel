import Button from "./components/Button"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item from "./item/item"
import NavBar from "./NavBar/NavBar"
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
      <NavBar></NavBar>
      <h1>Bienvenido a BlackCat</h1>
      <h2>Tu tienda de Manga y Figuras Online</h2>
      <div className="contenedor-mangas">
        {/* <Button label="ADD TO CART" 
                color="#fd7014"
                onClick={clickearAdd}/>
        <Button color="green" 
                label ="Confirmar Compra"
                onClick={clickearConfirmar} /> */}
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      </div>
      
      
    </>
  )
}

export default App
