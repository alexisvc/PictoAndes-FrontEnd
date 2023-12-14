import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Howl } from "howler";

export function useRecognitionGame( pictograms, startDifficulty ) {
  const [currentPictograms, setCurrentPictograms] = useState([]);
  const [currentPictogram, setCurrentPictogram] = useState(null);
  const [difficulty, setDifficulty] = useState(startDifficulty);
  const [synthesis, setSynthesis] = useState(null);
  const [lives, setLives] = useState(5);
  const [points, setPoints] = useState(0);
  const [badges, setBadges] = useState(0);
  const [resetGame, setResetGame] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [message, setMessage] = useState("");

  const correctSoundHowl = new Howl({ src: '/sonidos/correct-choice-43861.mp3' });
  const successSoundHowl = new Howl({ src: '/sonidos/success.mp3' });
  const incorrectSoundHowl = new Howl({ src: '/sonidos/negative_beeps-6008.mp3' });
  
  const navigate = useNavigate();

  const getRandomPictograms = (selectedDifficulty) => {
    let numberOfPictograms = 3;
    if (selectedDifficulty === "Fácil") {
      numberOfPictograms = 3;
    } else if (selectedDifficulty === "Normal") {
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
      utterance.rate = 0.75; // 0.1 - 10

      // Obtener la voz por defecto "Microsoft Sabina - Spanish (Mexico)"
      const voices = window.speechSynthesis.getVoices();
      const defaultVoice = voices.find(voice => (
        voice.name === "Microsoft Sabina - Spanish (Mexico)"
        //voice.name === "Microsoft Raul - Spanish (Mexico)"
        //voice.name === "Microsoft Helena - Spanish (Spain)"
        //voice.name === "Microsoft Laura - Spanish (Spain)"
        //voice.name === "Microsoft Pablo - Spanish (Spain)"
        //voice.name === "Google español"
        //voice.name === "Google español de Estados Unidos"
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
        position: "top-center",
        autoClose: 2000,
      });
      correctSoundHowl.play();
      setPoints(points + 1);
      const updatedPictograms = currentPictograms.filter((pictogram) => pictogram.name !== imageName);
      setCurrentPictograms(updatedPictograms);

      if (updatedPictograms.length > 0) {
        getRandomPictogram(updatedPictograms);
      } else {
        setBadges(badges + 1);
        if (difficulty === "Fácil") {
          setShowPopUp(true);
          setMessage("¡Has completado el nivel!")
          //setTimeout(() => {
            setDifficulty("Normal");
            getRandomPictograms("Normal");
            navigate("/recognition-game/Normal");
          //}, 2000);
          successSoundHowl.play();
        } else if (difficulty === "Normal") { 
          setShowPopUp(true);
          setMessage("¡Has completado el nivel!")
          //setTimeout(() => {
            setDifficulty("Difícil");
            getRandomPictograms("Difícil");
            navigate("/recognition-game/Difícil");
          //}, 2000);
          successSoundHowl.play();
        } else {
          setShowPopUp(true);
          setMessage("¡Has completado el juego!")
          successSoundHowl.play();
        }
      }
    } else {
      toast.error("Incorrecto. Intenta de nuevo ...", {
        position: "top-center",
        autoClose: 2000,
      });
      incorrectSoundHowl.play();
      setLives(lives - 1);
      if (lives - 1 === 0) {
        toast.error("¡Has perdido todas tus vidas!", {
          position: "top-center",
          autoClose: 2000,
        });
        if ( difficulty === "Fácil" ) {
          setShowPopUp(true);
          setMessage("¡Has perdido todas tus vidas!")
          setDifficulty("Fácil");
          getRandomPictograms("Fácil");
          setBadges(0);
          setPoints(0);
          setLives(5);
        } else if ( difficulty === "Normal" ) {
          setShowPopUp(true);
          setMessage("¡Has perdido todas tus vidas!")
          setDifficulty("Fácil");
          getRandomPictograms("Fácil");
          setBadges(0);
          setPoints(0);
          setLives(5);
        } else {
          setShowPopUp(true);
          setMessage("¡Has perdido todas tus vidas!")
          setDifficulty("Fácil");
          getRandomPictograms("Fácil");
          setBadges(0);
          setPoints(0);
          setLives(5);
        }
      }
    }
  };

  const handleResetGame = () => {
    setResetGame(true);
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
    showPopUp,
    setShowPopUp,
    message,
  };
}
