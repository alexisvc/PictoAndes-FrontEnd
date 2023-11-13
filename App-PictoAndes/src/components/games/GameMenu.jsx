import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./GameMenu.css";
import { FaArrowAltCircleLeft, FaArrowCircleLeft, FaCircle } from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";

function GameMenu() {
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak("Hola, a continuacion se mostraran una serie de pictogramas, debes seleccionar la que corresponda");
    }
  };
  return (
    <div className="game-menu">
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowCircleLeft />
        </button>

        <h1>Juego de reconocimiento</h1>
        
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaCircle />
        </button>
      </div>
      <div>
        <p className="message">Texto que ayude a dar información</p>
        <div className="game-content">
          <button>
            <Link to="/recognition-game" className="link-button">
              Reconocimiento
            </Link>
          </button>
          <img
            src="src/assets/characters/condor.png"
            alt="Imagen de la Aventura"
          />
        </div>
      </div>
      <div className="footer-button">
        <button
          onClick={() => {
            handleImageClick();
          }}
        >
          <FiVolume2 />
        </button>
      </div>
    </div>
  );
}

export default GameMenu;
