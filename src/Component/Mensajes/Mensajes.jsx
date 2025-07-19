import React, { useContext } from 'react'

import { MensajesContext } from '../../Context/MensajesContext';

import './Mensajes.css'




export default function Mensajes({emisor, hora, id, texto, estatus}) {
    const {handleEliminar} = useContext(MensajesContext)

    const classNames={mensa:'formato-dialogo'}
    if(emisor==='Luciano'){classNames.mensa = classNames.mensa + 'formato-dialogo_mi-mensaje'}

  return (
    <div className={classNames.mensa}>
        <span>{emisor}</span>
        <span>{texto}</span>
        <div>
            <span>{hora}</span>
            <span>✔✔</span>
            
        </div>
        <button onClick={()=>{handleEliminar(id)}}>Eliminar</button>
        
    </div>
  )
}
