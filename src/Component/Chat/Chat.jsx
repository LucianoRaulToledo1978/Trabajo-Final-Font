import React,{useContext} from 'react';
import Mensajes from '../Mensajes/Mensajes';
import { MensajesContext } from '../../Context/MensajesContext';


export default function Chat() {
    const {mensajes} = useContext(MensajesContext)


  return (
    <div>
        {
            mensajes.map((mensaje)=>{
                return(
                    <Mensajes
                        key={mensaje.id}
                        emisor={mensaje.emisor}
                        id={mensaje.id}
                        hora={mensaje.hora}
                        texto={mensaje.texto}
                        status={mensaje.status}
                    
                    
                    />
                )
            })
        }
    </div>
  )
}
