import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PictogramMenu.css";
import { FaArrowCircleLeft, FaHome, FaQuestion } from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import { useNavigate } from "react-router-dom";
import PopUpHelp from "../extras/PopUpHelp";

function PictogramMenu() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      speak("Hola bienvenido al mundo de los pictogramas, selecciona una opción para continuar");
    }
  };

  return (
    <div className="pictogram-menu">
      {isPopUpOpen && 
        <PopUpHelp 
          onClose={() => {setIsPopUpOpen(false)}}
          url={"https://www.youtube.com/watch?v=wiglQFrf6MM"}
        />
      }
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaArrowCircleLeft />
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
        </button>
        <h1>Menú de Pictogramas</h1>
        
        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaQuestion />
        </button>
      </div>
      <div className="pictogram-content">
        
        <img
          src="public\messages\2.png"
          alt="Imagen de la Aventura"
        />
        <div className="buttons">
        <button>
          <Link to="/pictogram-list" className="link-button">Listar Pictogramas</Link>
        </button>
        <button>
          <Link to="/pictogram-form" className="link-button">Crear un nuevo Pictograma</Link>
        </button>
        </div>
        
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
