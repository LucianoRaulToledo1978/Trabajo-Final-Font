import React, {useContext} from "react";
import { ContactoContext } from "../../Context/ContactoContex";
import ContactoLista from "../../Component/ContactoLista/ContactoLista";

export default function ContactoScreen(){
    const {contactos}= useContext(ContactoContext)

    return(

        <div>
            <ContactoLista/>
        </div>
    )

    
}