import './App.css'
import logo from './img/logo.jpg'
import Button from './components/Button'
import Contador from './components/Contador'
import { useState } from 'react'

function App () {

  const [contador, setContador] = useState(0)

  const manejarClick = () => {
    setContador(contador+1)
  }
  const reiniciar = () => {
    setContador(0)
  }

  return(
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo' 
          src={logo} 
          alt="" />
      </div> 
      
      <div className='contenedor-principal'>
        <Contador numClicks={contador}/>
        <Button text='Click' esBotonDeClick={true} manejarClick={manejarClick}/>
        <Button text='Reset' esBotonDeClick={false} manejarClick={reiniciar}/>
      </div>
    </div>
  )
}

export default App