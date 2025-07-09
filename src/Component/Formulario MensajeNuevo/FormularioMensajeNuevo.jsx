import React,{use, useContext} from 'react'
import { MensajesContext } from '../../Context/MensajesContext'

export default function FormularioMensajeNuevo() {
    const {nuevoMens} = useContext(MensajesContext)

    const handleSubmitNuevoMensaje =(e)=>{
        e.preventDefault()
        let nuevo_texto= e.target.text.value
        nuevoMens(nuevo_texto)
        e.target.text.value=' '
    }
  return (
    <div>
        <form onSubmit={handleSubmitNuevoMensaje}>
            <div>
                <label htmlFor="text"></label>
                <textarea  id="text" minLength={5} required></textarea>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}
