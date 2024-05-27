import '../stylesheet/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Tarea = ({id, text, completada, completarTarea, eliminarTarea}) => {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)} >
        {text}
      </div>
      <div 
        className='tarea-contenedor-icons'
        onClick={() => eliminarTarea(id)} >
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  )
}

export default Tarea