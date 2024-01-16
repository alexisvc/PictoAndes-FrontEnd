import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PictogramMenu.css";
import {
  FaArrowCircleLeft,
  FaBookOpen,
  FaHome,
  FaQuestion,
  FaYoutube,
} from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import { useNavigate } from "react-router-dom";
import PopUpHelp from "../extras/PopUpHelp";
import PopUpInstructions from "../extras/PopUpInstructions";

function PictogramMenu() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isPopUpOpenInstructions, setIsPopUpOpenInstructions] = useState(false);
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      speak(
        "Hola bienvenido al mundo de los pictogramas, selecciona una opción para continuar"
      );
    }
  };

  return (
    <div className="pictogram-menu">
      {isPopUpOpen && (
        <PopUpHelp
          onClose={() => {
            setIsPopUpOpen(false);
          }}
          url={"https://www.youtube.com/watch?v=lJiEc1dBbRQ"}
        />
      )}
      {isPopUpOpenInstructions && (
        <PopUpInstructions
          instructions={"En esta sección podrás crear y listar pictogramas"}
          url={"/public/instructions/indicaciones.png"}
          onClose={() => {
            setIsPopUpOpenInstructions(false);
          }}
        />
      )}
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/main-menu");
          }}
        >
          <FaArrowCircleLeft />
          <span>Atrás</span>
        </button>
        <button
          onClick={() => {
            navigate("/main-menu  ");
          }}
        >
          <FaHome />
          <span>Inicio</span>
        </button>
        <h1>Menú de Pictogramas</h1>
        <button
          onClick={() => {
            setIsPopUpOpenInstructions(true);
          }}
        >
          <FaQuestion />
          <span>Indicaciones</span>
        </button>
        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaYoutube />
          <span>Ayuda</span>
        </button>
      </div>
      <div className="pictogram-content">
        <img src="public\messages\2.png" alt="Imagen de la Aventura" />
        <div className="buttons">
          <button>
            <Link to="/pictogram-list" className="link-button">
              Listar Pictogramas
            </Link>
          </button>
          <button>
            <Link to="/pictogram-form" className="link-button">
              Crear un nuevo Pictograma
            </Link>
          </button>
        </div>
      </div>
      <div className="footer-button">
        <button
          onClick={() => {
            handleImageClick();
          }}
        >
          <FiVolume2 />
          <span>Audio</span>
        </button>
      </div>
    </div>
  );
}

export default PictogramMenu;
