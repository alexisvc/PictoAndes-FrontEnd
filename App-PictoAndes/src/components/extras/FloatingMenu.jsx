import React from "react";
import "./FloatingMenu.css";
import { FaTimes } from "react-icons/fa";

const FloatingMenu = ({ onClose, user, logout }) => {
  return (
    <div className="floating-menu">
      <div className="floating-menu-content">
        <div className="hd-menu">
          <div className="close">
            <button>
              <FaTimes className="close-txt" onClick={onClose} />
            </button>
          </div>
        </div>
        <div className="menu-buttons">
          <button
            onClick={() => {
              window.open("https://fis.epn.edu.ec/index.php/es/", "_blank");
            }}
          >
            Facultad de Ingeniería en Sistemas EPN
          </button>
          <button
            onClick={() => {
              window.open("https://www.epn.edu.ec/", "_blank");
            }}
          >
            Escuela Politécnica Nacional
          </button>
          <button
            onClick={() => {
              window.open("https://ludolab.epn.edu.ec/", "_blank");
            }}
          >
            LudoLab
          </button>
          {user && (
            <button
              onClick={() => {
                logout();
                onClose();
              }}
            >
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
