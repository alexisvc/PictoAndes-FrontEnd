import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowCircleLeft, FaCircle, FaHome } from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import { useNavigate } from "react-router-dom";
import "./PictogramAccMenu.css"

function PictogramAccMenu() {
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak("Selecciona la opción para continuar");
    }
  };

  return (
    <div className="acc-menu">
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowCircleLeft />
        </button>

        <h1>Menú Tablero de Comunicación</h1>
        
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
        </button>
      </div>
      <p className="message">Selecciona la opción para continuar</p>
      <div className="acc-content">
        <img
          src="src/assets/characters/condor.png"
          alt="Imagen de la Aventura"
        />
        <button>
          <Link to="/saac" className="link-button">
            Ingresar al tablero
        </Link>
        </button>
      </div>
      <div className="footer-button">
        <button onClick={()=>{handleImageClick()}}>
          <FiVolume2/>
        </button>
      </div>
    </div>
  );
}

export default PictogramAccMenu;
