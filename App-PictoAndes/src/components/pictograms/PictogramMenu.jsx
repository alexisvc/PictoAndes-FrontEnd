import { Link } from "react-router-dom";
import "./PictogramMenu.css";
import { FaArrowAltCircleLeft, FaArrowCircleLeft, FaCircle, FaHome } from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import { useNavigate } from "react-router-dom";

function PictogramMenu() {
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak("Hola bienvenido al mundo de los pictogramas, selecciona una opción para continuar");
    }
  };

  return (
    <div className="pictogram-menu">
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowCircleLeft />
        </button>

        <h1>Menú de Pictogramas</h1>
        
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
        </button>
      </div>
      <p className="message">Selecciona una opción para continuar</p>
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
      <div className="footer-button">
        <button onClick={()=>{handleImageClick()}}>
          <FiVolume2/>
        </button>
      </div>
    </div>
  );
}

export default PictogramMenu;