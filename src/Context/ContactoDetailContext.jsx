import { createContext, useState } from "react";
import { getContactoById } from "../Service/ContactoService";


export const ContactoDetailContext = createContext(
    {

    contacto_detail:null,
    isLoadingContactoDetail: true,
    loadContacto: (contacto_id)=>{},

}
)

export const ContactoDetailContextProvider= ({children})=>{

    const [contacto_detail, setContactoDetail] =useState(null)
    const [isLoadingContactoDetail,setIsLoadingContactoDetail]=useState(false)

    const loadContacto =(contacto_id)=>{
        setIsLoadingContactoDetail(true)
        setTimeout(

            ()=>{
                const contacto_selected= getContactoById(contacto_id)
                setContactoDetail(contacto_selected)
                setIsLoadingContactoDetail(false)

            },
            1000
        )
        
    }



    return(
        <ContactoDetailContext.Provider

        value={
            {
                contacto_detail:contacto_detail,
                isLoadingContactoDetail:isLoadingContactoDetail,
                
                loadContacto:loadContacto
            }
                
            }
            
        
        >
            {children}

            
        </ContactoDetailContext.Provider>
    )
}

export default ContactoDetailContextProvider