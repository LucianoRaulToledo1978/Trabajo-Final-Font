import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactoDetailContext } from '../../Context/ContactoDetailContext'
import LoaderSpinner from '../../Component/LoaderSpinner/LoaderSpinner'
import './contactoDetail.css'
import { Link } from 'react-router'




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
        <div className='contacto-detail-container'>

            <Link to="/contactos" className="wa-button back">
                ← Volver a contactos
            </Link>

            <img
            src={contacto_detail?.img}
            alt={`Foto de ${contacto_detail?.name}`}
            className= "contacto-img"/>


            <h1 className='contacto-nombre'>{contacto_detail?.name}</h1>

            <div className='contacto-opciones'>
                <p>Llamar</p>
                <p>Notificciones</p>

            </div>     
            
        </div>
    )
}
