    import React, { useContext, useEffect } from "react";

    

    import Chat from '../../Component/Chat/Chat';

    import FormularioMensajeNuevo from "../../Component/Formulario MensajeNuevo/FormularioMensajeNuevo";
    import { Link, useParams } from "react-router";
    import { MensajesContext } from "../../Context/MensajesContext";

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
                <Link to={`/contactos/${contacto_id}/detail`}>Ir a detalle de contacto</Link>

                <cabezera/>

                <Chat/>
                <FormularioMensajeNuevo/>

                

            </div>
            
        )
    }
