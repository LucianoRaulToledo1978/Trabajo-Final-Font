import { createContext, useState } from "react";
import { getContactoLista } from "../Service/ContactoService"; 


export const ContactoContext = createContext({
    contactos:[],
    isLoadingContactos: true

})

const ContactoContextProvaider = ({children})=>{
    
    const [contactos, setContactos]= useState(

        []) 

        const [isLoadingContactos,setIsLoadingContactos] =useState(true) 

    setTimeout(
        () => {
            
            const contacto_lista = getContactoLista() 
            setContactos(contacto_lista)
            setIsLoadingContactos(false)
        }, 
        1000
    )

    return (
        <ContactoContext.Provider
            value={
                {
                    contactos: contactos,
                    isLoadingContactos: isLoadingContactos
                }
            }
        >
            {children}
        </ContactoContext.Provider>
    )

}

export default ContactoContextProvaider

