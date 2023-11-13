import React from "react";
import "./GameOptions.css";
import { FaArrowCircleLeft, FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from "../../../hooks/useSpeechSynthesis";
import { FiVolume2 } from "react-icons/fi";

function GameOptions({ difficulty, setDifficulty, onStartGame }) {
  const handleDifficultyClick = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    onStartGame();
  };

  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak("Hola, a continuacion se mostraran una serie de pictogramas, debes seleccionar la que corresponda");
    }
  };

  return (
    <div className="game-difficulty">
      <div className="">
        <p className="message">Selecciona la opción para continuar</p>
        <img
          src="src/assets/characters/condor.png"
          alt="Imagen de la Aventura"
        />
      </div>
      <div className="difficulty-selector">
        <div className="difficulty-buttons">
          <button
            onClick={() => handleDifficultyClick("Fácil")}
            className={difficulty === "Fácil" ? "selected" : ""}
          >
            Fácil
          </button>
          <button
            onClick={() => handleDifficultyClick("Normal")}
            className={difficulty === "Normal" ? "selected" : ""}
          >
            Normal
          </button>
          <button
            onClick={() => handleDifficultyClick("Difícil")}
            className={difficulty === "Difícil" ? "selected" : ""}
          >
            Difícil
          </button>
        </div>
      </div>
      <div className="footer-button">
        <button onClick={()=>{handleImageClick()}}>
          <FiVolume2/>
        </button>
      </div>
    </div>
  );
}

export default GameOptions;
