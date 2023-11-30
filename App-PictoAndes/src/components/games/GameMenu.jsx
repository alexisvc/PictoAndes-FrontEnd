import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./GameMenu.css";
import { FaArrowAltCircleLeft, FaArrowCircleLeft, FaCircle, FaHome, FaQuestion } from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import PopUpHelp from "../extras/PopUpHelp";

function GameMenu() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak("Texto descriptivo");
    }
  };
  return (
    <div className="game-menu">
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
        <h1>Juego de reconocimiento</h1>
        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaQuestion />
        </button>
      </div>
      <div>
        <div className="game-content">
          <img
            src="public\messages\2.png"
            alt="Imagen de la Aventura"
          />
          <button>
            <Link to="/game-config" className="link-button">
              Reconocimiento
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
        </button>
      </div>
    </div>
  );
}

export default GameMenu;
