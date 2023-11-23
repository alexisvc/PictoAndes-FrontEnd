import React, { useState } from "react";
import GameHeader from "./GameHeader";
import PictogramQuestion from "./PictogramQuestion";
import PictogramOptions from "./PictogramOptions";
import "./RecognitionGame.css";
import { useRecognitionGame } from "../../../hooks/useRecognitionGame";
import PopUp from "../../extras/PopUp";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowCircleLeft, FaCircle, FaHome, FaQuestion } from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../../hooks/useSpeechSynthesis";
import PopUpHelp from "../../extras/PopUpHelp";

function RecognitionGame({ pictograms }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
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
    message
  } = useRecognitionGame(pictograms, difficulty);
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak("Hola, a continuacion se mostraran una serie de pictogramas, debes seleccionar la que corresponda");
    }
  };

  return (
    <div className="recognition-game">
      {isPopUpOpen && 
        <PopUpHelp 
          onClose={() => {setIsPopUpOpen(false)}}
          url={"https://www.youtube.com/watch?v=wiglQFrf6MM"}
        />
      }
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/game-menu");
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
      <div className="game-canva">
        <div className="game">
          <GameHeader lives={lives} points={points} badges={badges} />
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

      {showPopUp &&(
        <PopUp message={message} onClose={() => {setShowPopUp(false)}} />
      )}
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

export default RecognitionGame;