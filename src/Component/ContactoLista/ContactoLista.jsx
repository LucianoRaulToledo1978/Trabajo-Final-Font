import React, {useContext} from "react";
import {ContactoContext} from "../../Context/ContactoContex";
import ContactoItem from "../ContactoItem/ContactoItem";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

const ContactoLista =()=>{
    const{contactos, isLoadingContactos}=useContext(ContactoContext)

    if(isLoadingContactos){
        return(<LoaderSpinner/>)
    }

    return (
        <div>
            {
                contactos.map(
                    (contacto) => {
                        return <ContactoItem
                            key={contacto.id}
                            id={contacto.id}
                            name={contacto.name}
                            last_time_connected={contacto.last_time_connected}
                            img={contacto.img}
                            last_message={contacto.last_message}
                            unread_messages={contacto.unread_messages}
                        />
                        
                    }
                )
            }
        </div>
    )
}

export default ContactoLista