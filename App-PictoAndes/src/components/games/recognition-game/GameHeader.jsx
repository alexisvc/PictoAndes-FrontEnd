import React from "react";
import "./GameHeader.css";

function GameHeader({ lives, points, badges }) {
  const livesIcon = "❤️".repeat(lives);
  const badgesIcon = "🧁".repeat(badges);

  return (
      <div className="game-stats">
        <div className="stat">
          <span className="stat-label">Vidas: </span>
          <span className="stat-value">{livesIcon}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Puntos: </span>
          <progress max={15} value={points}></progress>
        </div>
        <div className="stat">
          <span className="stat-label">Insignias: </span>
          <span className="stat-value">{badgesIcon}</span>
        </div>
      </div>
  );
}

export default GameHeader;
