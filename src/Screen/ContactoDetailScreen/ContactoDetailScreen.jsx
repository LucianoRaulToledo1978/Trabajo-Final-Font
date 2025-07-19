import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactoDetailContext } from '../../Context/ContactoDetailContext'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'




export default function ContactoDetailScreen() {

    const {contacto_id}=useParams()
    const {loadContacto, contacto_detail,isLoadingContactoDetail}= useContext(ContactoDetailContext)

    useEffect (
        ()=>{
            loadContacto(contacto_id)
        },
        [contacto_id]
    )

    if(isLoadingContactoDetail){
        return<LoaderSpinner/>
    }
    return (
        <div>
            <div>{contacto_detail?.img}</div>
            <h1>{contacto_detail?.name}</h1>
            <p>Llamar</p>
            <p>Notificciones</p>
            
        </div>
    )
}
