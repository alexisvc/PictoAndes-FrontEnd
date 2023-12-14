import React, { useState } from "react";
import GameHeader from "./GameHeader";
import PictogramQuestion from "./PictogramQuestion";
import PictogramOptions from "./PictogramOptions";
import "./RecognitionGame.css";
import { useRecognitionGame } from "../../../hooks/useRecognitionGame";
import PopUp from "../../extras/PopUp";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaArrowCircleLeft,
  FaBookOpen,
  FaFilm,
  FaHome
} from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../../hooks/useSpeechSynthesis";
import PopUpHelp from "../../extras/PopUpHelp";
import PopUpInstructions from "../../extras/PopUpInstructions";

function RecognitionGame({ pictograms }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isPopUpOpenInstructions, setIsPopUpOpenInstructions] = useState(false);

  const { difficulty } = useParams();
  const {
    currentPictograms,
    currentPictogram,
    lives,
    points,
    badges,
    handleMouseOver,
    checkAnswer,
    showPopUp,
    setShowPopUp,
    message,
  } = useRecognitionGame(pictograms, difficulty);
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak("Texto descriptivo con indicaciones  del juego");
    }
  };

  return (
    <div className="recognition-game">
      {isPopUpOpen && (
        <PopUpHelp
          onClose={() => {
            setIsPopUpOpen(false);
          }}
          url={"https://www.youtube.com/watch?v=wiglQFrf6MM"}
        />
      )}
      {isPopUpOpenInstructions && (
        <PopUpInstructions
          instructions={"En esta sección podrás crear y listar pictogramas"}
          url={"/public/gifs/giphy.gif"}
          onClose={() => {
            setIsPopUpOpenInstructions(false);
          }}
        />
      )}
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/game-config");
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
        <h1>Juego de reconocimiento</h1>
        <button
          onClick={() => {
            setIsPopUpOpenInstructions(true);
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
          <FaFilm />
          <span>Demostración</span>
        </button>
      </div>
      <div className="game-canva">
        <div className="game-header">
          <div>
          <img className="statment" src="/public/messages/3.png" alt="imagen" />
          </div>
          <div>
          <GameHeader lives={lives} points={points} badges={badges} />
          </div>
        </div>

        <div className="game">
            <PictogramQuestion
              currentPictogram={currentPictogram}
              handleMouseOver={handleMouseOver}
            />
            <PictogramOptions
              currentPictograms={currentPictograms}
              handleMouseOver={handleMouseOver}
              checkAnswer={checkAnswer}
            />
        </div>

        {showPopUp && (
          <PopUp
            message={message}
            onClose={() => {
              setShowPopUp(false);
            }}
          />
        )}
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

export default RecognitionGame;
