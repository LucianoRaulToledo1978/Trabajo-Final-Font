import React from "react"
import { Link } from "react-router"
import './contactoitem.css'




const ContactoItem = ({name, id, last_time_connected, img, last_message, unread_messages}) => {
    
    return (
        <Link to={`/Contactos/${id}/messages`} className="contacto-item">   
            
            <img src={img} alt={`${name} image profile`}  className="contacto-img"/>


            <div className="contacto-info">

                <div className="contacto-top">
                    <h3 className="contacto-name">{name}</h3>
                    <span className="contacto-last-time">Ultima conexion: {last_time_connected}</span>
                </div>

                <div className="contacto-message">
                {last_message.text}
                </div>


                {unread_messages > 0 && (<span className="contcto-unread">{unread_messages}</span>)}


            </div>    
            
            
            
        </Link>
        
        
    )
}

export default ContactoItem 
