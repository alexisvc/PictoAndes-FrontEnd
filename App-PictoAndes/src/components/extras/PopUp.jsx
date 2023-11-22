// PopUp.js
import React from "react";
import "./PopUp.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PopUp({ message, onClose }) {
  const navigate = useNavigate();

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="close">
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <p>{message}</p>
        <div className="popup-img-btn">
          <img src="/public/messages/2.png" />
          <div className="popup-btns">
            <button onClick={onClose}>Continuar </button>
            <button
              onClick={() => {
                navigate("/game-menu");
              }}
            >
              Finalizar{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
