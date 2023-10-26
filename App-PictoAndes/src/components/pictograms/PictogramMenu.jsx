import { Link } from "react-router-dom";
import "./PictogramMenu.css";

function PictogramMenu() {
  return (
    <div className="pictogram-menu">
      <h1>Menú de Pictogramas</h1>
      <div className="pictogram-content">
        <button>
          <Link to="/pictogram-list" className="link-button">Listar Pictogramas</Link>
        </button>
        <img
          src="src/assets/characters/condor.png"
          alt="Imagen de la Aventura"
        />
        <button>
          <Link to="/pictogram-form" className="link-button">Crear un nuevo Pictograma</Link>
        </button>
      </div>
    </div>
  );
}

export default PictogramMenu;
