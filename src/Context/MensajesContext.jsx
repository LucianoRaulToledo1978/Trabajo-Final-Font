import React, { useEffect } from 'react';
import { createContext, useState } from 'react'
import { useParams } from 'react-router';
import { getMessagesByContactId } from '../Service/mensajesService';

export const MensajesContext= createContext(
    {

    mensajes:[],
    nuevoMens: (text)=> {},
    handleEliminar: (id_m)=>{},
    loadMensajes: (contacto_id)=>{}

    }
)



 const  MensajesContextProvider=({children}) =>{

    //const {contacto_id} = useParams()

    //useEffect(
        //()=>{

            //console.log('id de contacto es: '+ contacto_id)

        //},
        //[contacto_id]
    //)

    
    const [mensajes,setMensajes]= useState([])
        

    const handleEliminar = (id_m)=>{
        const listaMensActualizada = []
        for(const m of mensajes){
            if (m.id!==id_m){
                listaMensActualizada.push(m)
            }

        }
        setMensajes(listaMensActualizada)
    }

    const nuevoMens = (text)=>{
        const nuevo_mensaje ={emisor:'Luciano: ',hora:'9:30',texto:text,status:'visto',id:mensajes.length+1 }
        const clon_mensajes = [...mensajes]
        clon_mensajes.push(nuevo_mensaje)
        setMensajes(clon_mensajes)
    }


    const loadMensajes= (contacto_id)=>{
        const mensajes=getMessagesByContactId(contacto_id)
        setMensajes(mensajes)
    }


    return (
        <MensajesContext.Provider
            value={
                {
                    mensajes:mensajes,
                    handleEliminar:handleEliminar,
                    nuevoMens: nuevoMens,
                    loadMensajes:loadMensajes

            }
            }
         >
            {children}

        </MensajesContext.Provider>
            
    )
  
}

export default MensajesContextProvider
