import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export function useRecognitionGame( pictograms ) {
  const [isConfigurated, setIsConfigurated] = useState(false);
  const [currentPictograms, setCurrentPictograms] = useState([]);
  const [currentPictogram, setCurrentPictogram] = useState(null);
  const [difficulty, setDifficulty] = useState("Fácil");
  const [synthesis, setSynthesis] = useState(null);
  const [lives, setLives] = useState(5);
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState(0);
  const [resetGame, setResetGame] = useState(false);

  const navigate = useNavigate();

  const getRandomPictograms = (selectedDifficulty) => {
    let numberOfPictograms = 3;

    if (selectedDifficulty === "Normal") {
      numberOfPictograms = 5;
    } else if (selectedDifficulty === "Difícil") {
      numberOfPictograms = 7;
    }

    const shuffledPictograms = shuffleArray(pictograms).slice(0, numberOfPictograms);
    setCurrentPictograms(shuffledPictograms);
    getRandomPictogram(shuffledPictograms);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const getRandomPictogram = (pictograms) => {
    if (pictograms.length > 0) {
      const randomIndex = Math.floor(Math.random() * pictograms.length);
      const randomPictogram = pictograms[randomIndex];
      setCurrentPictogram(randomPictogram);
    } else {
      setCurrentPictogram(null);
    }
  };

  const handleMouseOver = (textToSpeak) => {
    if (synthesis) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.50; // 0.1 - 10

      // Obtener la voz por defecto "Microsoft Sabina - Spanish (Mexico)"
      const voices = window.speechSynthesis.getVoices();
      const defaultVoice = voices.find(voice => (
        //voice.name === "Microsoft Sabina - Spanish (Mexico)"
        //voice.name === "Microsoft Raul - Spanish (Mexico)"
        //voice.name === "Microsoft Helena - Spanish (Spain)"
        //voice.name === "Microsoft Laura - Spanish (Spain)"
        //voice.name === "Microsoft Pablo - Spanish (Spain)"
        //voice.name === "Google español"
        voice.name === "Google español de Estados Unidos"
      ));

      if (defaultVoice) {
        utterance.voice = defaultVoice;
      } else {
        console.error('La voz por defecto no está disponible.');
      }

      synthesis.speak(utterance);
    } else {
      console.error('La síntesis de voz no está soportada en este navegador.');
    }
  };

  const checkAnswer = (imageName) => {
    if (currentPictogram && currentPictogram.name === imageName) {
      confetti();
      toast.success("¡Muy bien!", {
        position: "top-right",
        autoClose: 3000,
      });
      setPoints(points + 1);
      const updatedPictograms = currentPictograms.filter((pictogram) => pictogram.name !== imageName);
      setCurrentPictograms(updatedPictograms);

      if (updatedPictograms.length > 0) {
        getRandomPictogram(updatedPictograms);
      } else {
        toast.success("¡Has completado el juego!", {
          position: "top-right",
          autoClose: 3000,
        });
        setBadges(badges + 1);
        if (difficulty === "Fácil") {
          setDifficulty("Normal");
          getRandomPictograms("Normal");
        } else if (difficulty === "Normal") {
          setDifficulty("Difícil");
          getRandomPictograms("Difícil");
        } else {
          setDifficulty("Fácil");
          getRandomPictograms("Fácil");
        }
      }
    } else {
      toast.error("Incorrecto. Intenta de nuevo.", {
        position: "top-right",
        autoClose: 3000,
      });
      setLives(lives - 1);
      if (lives - 1 === 0) {
        toast.error("¡Has perdido todas tus vidas!", {
          position: "top-right",
          autoClose: 3000,
        });
        setDifficulty("Fácil");
        getRandomPictograms("Fácil");
        setBadges(0);
        setPoints(0);
        setLives(5);
      }
    }
  };

  const handleResetGame = () => {
    setResetGame(true);
    setIsConfigurated(false)
    setDifficulty("Fácil");
    setBadges(0);
    setPoints(0);
    setLives(5);
    navigate("/");
  };

  useEffect(() => {
    getRandomPictograms(difficulty);
    setResetGame(false);
    const synthesis = window.speechSynthesis;
    setSynthesis(synthesis);
  }, [difficulty, resetGame]);

  return {
    isConfigurated,
    setIsConfigurated,
    currentPictograms,
    currentPictogram,
    difficulty,
    setDifficulty,
    synthesis,
    lives,
    points,
    badges,
    resetGame,
    handleMouseOver,
    checkAnswer,
    handleResetGame,
  };
}
