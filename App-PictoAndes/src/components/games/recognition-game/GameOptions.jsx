import React from "react";

function GameOptions({ difficulty, setDifficulty, onStartGame }) {
  return (
    <div className="difficulty-selector">
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
      <div>
        <button onClick={onStartGame}>Jugar</button>
      </div>
    </div>
  );
}

export default GameOptions;
