import React, { useState } from "react";
import "./GameOptions.css";
import { FaArrowCircleLeft, FaBookOpen, FaCircle, FaHome, FaQuestion } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from "../../../hooks/useSpeechSynthesis";
import { FiVolume2 } from "react-icons/fi";
import PopUpHelp from "../../extras/PopUpHelp";

function GameOptions() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      speak(
        "Hola, a continuación se mostrarán una serie de pictogramas, debes seleccionar la que corresponda"
      );
    }
  };

  const handleDifficultyClick = (difficulty) => {
    navigate(`/recognition-game/${difficulty}`);
  };

  return (
    <div className="game-config">
      {isPopUpOpen && 
        <PopUpHelp 
          onClose={() => {setIsPopUpOpen(false)}}
          url={"https://www.youtube.com/watch?v=wiglQFrf6MM"}
        />
      }
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/game-menu");
          }}
        >
          <FaArrowCircleLeft />
          <span>Atrás</span>
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
          <span>Inicio</span>
        </button>
        <h1>Juego de reconocimiento</h1>
        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaBookOpen />
          <span>Instrucciones</span>
        </button>
        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaQuestion />
          <span>Ayuda</span>
        </button>
      </div>
      <div className="config-content">
          <img
            src="public\messages\2.png"
            alt="Imagen de la Aventura"
          />
          <div className="difficulty-buttons">
            <button onClick={() => handleDifficultyClick("Fácil")}>
              Fácil
            </button>
            <button onClick={() => handleDifficultyClick("Normal")}>
              Normal
            </button>
            <button onClick={() => handleDifficultyClick("Difícil")}>
              Difícil
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
          <span>Audio</span>
        </button>
      </div>
    </div>
  );
}

export default GameOptions;
