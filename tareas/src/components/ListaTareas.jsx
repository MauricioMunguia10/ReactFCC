import { useState } from "react"
import TareaForm from "./TareaForm"
import Tarea from "./Tarea"

const ListaTareas = () => {

  const [tareas, setTareas] = useState([])

  const agregarTarea = tarea => {
    if (tarea.text.trim()){
      tarea.text =tarea.text.trim()
      const tareasActualizadas = [tarea, ...tareas]
      setTareas(tareasActualizadas)
    }

  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea =>{
      if(tarea.id === id){
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    setTareas(tareasActualizadas)
  }

  return(
    <>
      <TareaForm onSubmit={agregarTarea}/>
      <div className="tareas-lista-contenedor">
        {
          tareas.map(tarea =>
            <Tarea 
            key={tarea.id}
            id={tarea.id}
            text={tarea.text}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}/>
          )
        }

      </div>
    </>
  )
}

export default ListaTareas