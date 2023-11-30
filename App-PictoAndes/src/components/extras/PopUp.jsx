// PopUp.js
import React from "react";
import "./PopUp.css";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";

function PopUp({ message, onClose }) {
  const navigate = useNavigate();
  const { speak, speaking } = useSpeechSynthesis();

  const handleImageClick = () => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak("Texto descriptivo");
    }
  };

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
            <button onClick={onClose}>Continuar</button>
            <button
              onClick={() => {
                navigate("/game-menu");
              }}
            >
              Finalizar{" "}
            </button>
          </div>
        </div>
        <div className="footer-button">
        <button
          onClick={() => {
            handleImageClick();
          }}
        >
          <FiVolume2 />
        </button>
      </div>
      </div>
    </div>
  );
}

export default PopUp;
