import '../stylesheet/Button.css'
function Button ({text, esBotonDeClick, manejarClick}) {
  return(
    <button 
      className={esBotonDeClick ?  'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClick}>
      {text}
    </button>
  )
}

export default Button