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
  FaHome,
  FaQuestion,
} from "react-icons/fa";
import { FiVolume2 } from "react-icons/fi";
import { useSpeechSynthesis } from "../../../hooks/useSpeechSynthesis";
import PopUpHelp from "../../extras/PopUpHelp";

function RecognitionGame({ pictograms }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const { startDifficulty } = useParams();
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
  } = useRecognitionGame(pictograms, startDifficulty);
  const { speak, speaking } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak("Selecciona el pictograma que corresponde al sonido");
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
      {showPopUp && (
        <PopUp
          message={message}
          onClose={() => {
            setShowPopUp(false);
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
        <div className="game-header">
          <GameHeader lives={lives} points={points} badges={badges} />
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
      </div>
      {/*<div className="footer-button">
        <button
          onClick={() => {
            handleImageClick();
          }}
        >
          <FiVolume2 />
        </button>
      </div>*/}
    </div>
  );
}

export default RecognitionGame;
