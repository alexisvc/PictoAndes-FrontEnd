import { Link } from "react-router-dom";
import "./GameMenu.css";

function GameMenu() {
  return (
    <div className="game-menu">
      <h1>Menú de Juegos</h1>
      <div className="game-content">
        <button>
          <Link to="/recognition-game" className="link-button">Reconocimiento</Link>
        </button>
        <img
          src="src/assets/characters/condor.png"
          alt="Imagen de la Aventura"
        />
        <button>
          <Link to="/acc-game" className="link-button">Oraciones</Link>
        </button>
      </div>
    </div>
  );
}

export default GameMenu;
