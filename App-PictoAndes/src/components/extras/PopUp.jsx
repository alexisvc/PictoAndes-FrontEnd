// PopUp.js
import React from "react";
import "./PopUp.css";
import { FaArrowUp, FaRedo, FaSignOutAlt, FaTimes } from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import { useNavigate } from "react-router-dom";

function PopUp({
  message,
  onClose,
  handleContinue,
  handleFinish,
  handleUpgradeDifficulty,
  difficulty,
  lose
}) {
  const navigate = useNavigate();
  const { speak, speaking } = useSpeechSynthesis();

  const handleImageClick = () => {
    if (!speaking) {
      speak("Texto descriptivo");
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="close">
          {/*<button className="close-button" onClick={onClose}>
            <FaTimes />
  </button>*/}
        </div>
        <p>{message}</p>
        <div className="popup-img-btn">
          <img
            src="/public/messages/2.png"
            alt="Mensaje"
            onClick={handleImageClick}
          />
          <div className="popup-btns">
            {!lose ? (
              <>
                <button onClick={handleContinue}> <FaRedo/> Seguir jugando</button>
                <button onClick={handleFinish}> <FaSignOutAlt/> Salir al menú</button>
                {difficulty !== "Difícil" && lose !== true ? (
                  <button onClick={handleUpgradeDifficulty}>
                    <FaArrowUp/>  Subir Dificultad
                  </button>
                ) : null}
              </>
            ) : (
              <>
                <button onClick={onClose}> <FaRedo/> Intentar de nuevo</button>
                <button onClick={handleFinish}> <FaSignOutAlt/> Salir al menú</button>
              </>
            )}
          </div>
        </div>
        <div className="footer-button">
          <button onClick={handleImageClick}>
            <FiVolume2 />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
