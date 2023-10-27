// PopUp.js
import React from "react";
import "./PopUp.css";

function PopUp({ message, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default PopUp;
