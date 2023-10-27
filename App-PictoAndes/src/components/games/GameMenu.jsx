import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./GameMenu.css";
import { FaArrowAltCircleLeft, FaPlayCircle } from "react-icons/fa";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";

function GameMenu() {
  const { speak, speaking, setSpeaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak("Hola bienvenido al mundo de los pictogramas");
    }
  };
  return (
    <div className="game-menu">
      <div className="nav-button">
        <button onClick={() => {navigate("/")}}>
          <FaArrowAltCircleLeft/>
        </button>
      </div>
      <h1>Menú de Juegos</h1>
      <p>Hola bienvenido al mundo de los pictogramas</p>
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
      <div className="footer-button">
        <button onClick={()=>{handleImageClick()}}>
          <FaPlayCircle/>
        </button>
      </div>
    </div>
  );
}

export default GameMenu;
