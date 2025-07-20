import React from 'react';
import './HeaderWhatsApp.css';
import { FiCamera, FiSearch, FiMoreVertical } from 'react-icons/fi';


const HeaderWhatsApp = () => {
  return (
    <header className="wa-header">
      <div className="wa-title">WhatsApp</div>
      <div className="wa-icons">
        <FiCamera className="wa-icon" />
        <FiSearch className="wa-icon" />
        <FiMoreVertical className="wa-icon" />
      </div>
    </header>
  );
};

export default HeaderWhatsApp;
