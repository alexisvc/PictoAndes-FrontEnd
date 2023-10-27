import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import "./GameOptions.css";

function GameOptions({ difficulty, setDifficulty, onStartGame }) {
  const handleDifficultyClick = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  return (
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

      <div className="difficulty-play">
        <button onClick={onStartGame}>
          <FaPlayCircle />
        </button>
      </div>
    </div>
  );
}

export default GameOptions;
