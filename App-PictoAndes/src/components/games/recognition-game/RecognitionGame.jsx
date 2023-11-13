import React, { useState } from "react";
import GameHeader from "./GameHeader";
import PictogramQuestion from "./PictogramQuestion";
import PictogramOptions from "./PictogramOptions";
import GameOptions from "./GameOptions";
import "./RecognitionGame.css";
import { useRecognitionGame } from "../../../hooks/useRecognitionGame";
import PopUp from "../PopUp";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft, FaCircle } from "react-icons/fa";

function RecognitionGame({ pictograms }) {
  const {
    isConfigurated,
    setIsConfigurated,
    currentPictograms,
    currentPictogram,
    difficulty,
    setDifficulty,
    lives,
    points,
    badges,
    handleMouseOver,
    checkAnswer,
    showPopUp,
    setShowPopUp,
    message
  } = useRecognitionGame(pictograms);

  const handleStartGame = () => {
    setIsConfigurated(true);
  };

  const navigate = useNavigate();

  return (
    <div className="recognition-game">
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/game-menu");
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
      <div className="game-canva">
      {!isConfigurated && (
          <GameOptions
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            onStartGame={handleStartGame}
          />
      )}
      {isConfigurated && (
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
      )}

      {showPopUp &&(
        <PopUp message={message} onClose={() => {setShowPopUp(false)}} />
      )}
      </div>
    </div>
  );
}

export default RecognitionGame;
