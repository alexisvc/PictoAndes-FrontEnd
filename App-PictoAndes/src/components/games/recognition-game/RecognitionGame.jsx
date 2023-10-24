import React, { useState } from "react";
import GameHeader from "./GameHeader";
import PictogramQuestion from "./PictogramQuestion";
import PictogramOptions from "./PictogramOptions";
import GameOptions from "./GameOptions";
import "./RecognitionGame.css";
import { useRecognitionGame } from "../../../hooks/useRecognitionGame";

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
    handleResetGame,
  } = useRecognitionGame(pictograms);

  const [isPlaying, setIsPlaying] = useState(false);

  const handleCategorySelect = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
  };

  const handleStartGame = () => {
    setIsConfigurated(true);
    setIsPlaying(true);
  };

  return (
    <>
      <div className="recognition-game">
        <h1 className="game-title">Juego de Reconocimiento</h1>
        <button onClick={handleResetGame}>
          Reiniciar Juego y Regresar al Inicio
        </button>
        {!isConfigurated && !isPlaying && (
          <GameOptions
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            onStartGame={handleStartGame}
          />
        )}
        {isConfigurated && (
          <>
            <GameHeader lives={lives} points={points} badges={badges} />
            <PictogramQuestion
              currentPictogram={currentPictogram}
              handleMouseOver={handleMouseOver}
              checkAnswer={checkAnswer}
            />
            <PictogramOptions
              currentPictograms={currentPictograms}
              handleMouseOver={handleMouseOver}
              checkAnswer={checkAnswer}
            />
          </>
        )}
      </div>
    </>
  );
}

export default RecognitionGame;
