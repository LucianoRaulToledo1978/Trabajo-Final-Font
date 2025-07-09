
import { createRoot } from 'react-dom/client';

import App from './App.jsx';

import React from 'react';
import MensajesContextProvider from './Context/MensajesContext.jsx';
import { BrowserRouter } from 'react-router';
import ContactoContextProvaider from './Context/ContactoContex.jsx';
import ContactoDetailContextProvider from './Context/ContactoDetailContext.jsx';

createRoot(document.getElementById('root')).render(

    <BrowserRouter>

        <ContactoContextProvaider>
            <MensajesContextProvider>
                <ContactoDetailContextProvider>
                    <App />

                </ContactoDetailContextProvider>
                
            </MensajesContextProvider>

        </ContactoContextProvaider>
    
    
    </BrowserRouter>

    
    

)
    
