import '../stylesheet/Clear.css'

const BtnClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
)

export default BtnClear