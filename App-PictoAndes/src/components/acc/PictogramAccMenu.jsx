import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft, FaArrowCircleLeft, FaBookOpen, FaCircle, FaHome, FaQuestion } from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import { useNavigate } from "react-router-dom";
import "./PictogramAccMenu.css"
import PopUpHelp from "../extras/PopUpHelp";

function PictogramAccMenu() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
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
          <span>Atrás</span>
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
          <span>Inicio</span>
        </button>
        <h1>Menú Tablero de Comunicación</h1>
        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaBookOpen />
          <span>Instrucciones</span>
        </button>
        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaQuestion />
          <span>Ayuda</span>
        </button>
      </div>
      <div className="acc-content">
        <img
          src="public\messages\2.png"
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
          <span>Audio</span>
        </button>
      </div>
    </div>
  );
}

export default PictogramAccMenu;
