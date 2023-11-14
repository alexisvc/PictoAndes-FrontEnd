import React from "react";
import "./FloatingMenu.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FloatingMenu = ({ onClose, user, logout }) => {
  const navigate = useNavigate();
  return (
    <div className="floating-menu">
      <div className="floating-menu-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        {/* Contenido del menú */}
        <div className="menu-buttons">
          <button
            onClick={() => {
              onClose();
            }}
          >
            Elemento 1
          </button>
          <button
            onClick={() => {
              onClose();
            }}
          >
            Elemento 2
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
          ) }
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
