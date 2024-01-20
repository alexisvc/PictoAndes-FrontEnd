import React from "react";
import "./PopUp.css";

function PopUpExit({ onClose, logout }) {
  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span>¿Está seguro que desea salir?</span>
        <div className="buttons-exit">
          <button onClick={handleLogout}>Sí</button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
}

export default PopUpExit;
