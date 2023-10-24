import React from "react";
import "./GameOptions.css";

function GameOptions({ difficulty, setDifficulty, onStartGame }) {
  return (
    <div className="difficulty-selector">
      <div className="difficulty-select">
      <label htmlFor="difficulty">Dificultad:</label>
      <select
        id="difficulty"
        value={difficulty}
        onChange={(e) => {
          setDifficulty(e.target.value);
        }}
      >
        <option value="Fácil">Fácil</option>
        <option value="Normal">Normal</option>
        <option value="Difícil">Difícil</option>
      </select>
      </div>
      
      <div className="difficulty-play">
        <button onClick={onStartGame}>Jugar</button>
      </div>
    </div>
  );
}

export default GameOptions;
