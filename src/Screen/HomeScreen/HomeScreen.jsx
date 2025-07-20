    import React, { useContext, useEffect } from "react";

    

    import Chat from '../../Component/Chat/Chat';

    import FormularioMensajeNuevo from "../../Component/Formulario MensajeNuevo/FormularioMensajeNuevo";
    import { Link, useParams } from "react-router";
    import { MensajesContext } from "../../Context/MensajesContext";
    import './HomeScreen.css';

    export default function HomeScreen() {
        const {contacto_id}=useParams()
        const {loadMensajes}=useContext(MensajesContext)

        useEffect(
            ()=>{
                loadMensajes(contacto_id)
            },
            [contacto_id]
        )
        
        return (
            
            <div>

                <Link to="/contactos" className="wa-button back">← Volver a contactos</Link>

                <Link to={`/contactos/${contacto_id}/detail`} className="wa-button">Ir a detalle de contacto</Link>
                
                

                <Chat/>
                <FormularioMensajeNuevo/>

                

            </div>
            
        )
    }
