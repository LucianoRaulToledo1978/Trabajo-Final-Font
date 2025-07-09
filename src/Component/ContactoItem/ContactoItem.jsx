import React from "react"
import { Link } from "react-router"



const ContactoItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <Link to={`/Contactos/${id}/messages`}>
            
            <img src={img} alt={`${name} image profile`}  width={100}/>
            <h3>{name}</h3>
            <div>
                {last_message.text}
            </div>
            <span>{unread_messages}</span>
            <span>Ultima conexion: {last_time_connected}</span>
            <hr/>
        </Link>
        
        
    )
}

export default ContactoItem 
