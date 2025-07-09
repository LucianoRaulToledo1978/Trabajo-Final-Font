import mook_datos from "../Datos/contactos-mook"


export const getContactoLista = () => {
    return mook_datos.contactos
}

export const getContactoById= (contacto_id)=>{

    for(const contacto of mook_datos.contactos ){
        if(Number(contacto.id)===Number(contacto_id) ){
            return contacto
        }   
    }
    return null 
    
}