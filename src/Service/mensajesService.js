import mook_datos from "../Datos/contactos-mook";

export const getMessagesByContactId = (contacto_id) => {
    for(const contacto of mook_datos.contactos){
        if(Number(contacto.id) === Number(contacto_id)){
            return contacto.messages
        }
    }
   
    return null
}