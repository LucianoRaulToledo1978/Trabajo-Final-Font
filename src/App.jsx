import React, { useState } from 'react';
import HomeScreen from './Screen/HomeScreen/HomeScreen';
import ContactoScreen from './Screen/ContactoScreen/ContactoScreen';
import { Routes , Route} from 'react-router';
import ContactoDetailScreen from './Screen/ContactoDetailScreen/ContactoDetailScreen';

import { getContactoLista } from './Service/ContactoService';
import { getMessagesByContactId } from './Service/mensajesService';





function App() {
  return(
    <div>
      <Routes>

				<Route
					path='/'
					element={<ContactoScreen/>} 
				/>

				
				<Route
					path='/Contactos/:contacto_id/messages'
					element={<HomeScreen/>} 
				/>
				<Route 
					path='/Contactos'
					element={<ContactoScreen/>}
				/>

				<Route 
					path='/Contactos/:contacto_id/detail'
					element={<ContactoDetailScreen/>}
				/>
				
			</Routes>

    </div>
  )
}

export default App





