// PopUp.js
import React from "react";
import "./PopUp.css";
import { FaTimes } from "react-icons/fa"; // Importa el icono de "X" de react-icons

function PopUp({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default PopUp;
