import './App.css'
import Logo from './img/logo.jpg'
import Button from './components/Button'
import Display from './components/Display'
import BtnClear from './components/BtnClear'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App () {

  const [input,setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val)

  }
  const calculaResultado = () => {
    if(input)
      setInput(evaluate(input))
    else
      alert('Ingrese alguna operación')
  }

  return(
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={Logo}
          className='freecodecamp-logo'
          alt="Logo de freecodecamp" />
      </div>
      <div className='contenedor-calculadora'>
        <Display input={input}/>
        <div className='fila'>
          <Button manejarClick={agregarInput}>1</Button>
          <Button manejarClick={agregarInput}>2</Button>
          <Button manejarClick={agregarInput}>3</Button>
          <Button manejarClick={agregarInput}>+</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={agregarInput}>4</Button>
          <Button manejarClick={agregarInput}>5</Button>
          <Button manejarClick={agregarInput}>6</Button>
          <Button manejarClick={agregarInput}>-</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={agregarInput}>7</Button>
          <Button manejarClick={agregarInput}>8</Button>
          <Button manejarClick={agregarInput}>9</Button>
          <Button manejarClick={agregarInput}>*</Button>
        </div>
        <div className='fila'>
          <Button manejarClick={calculaResultado}>=</Button>
          <Button manejarClick={agregarInput}>0</Button>
          <Button manejarClick={agregarInput}>.</Button>
          <Button manejarClick={agregarInput}>/</Button>
        </div>
        <div className='fila'>
          <BtnClear manejarClear={() => setInput('')}>Clear</BtnClear>
        </div>
      </div>
    </div>
  )
}

export default App