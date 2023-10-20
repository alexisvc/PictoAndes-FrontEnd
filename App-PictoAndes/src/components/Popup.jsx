import React, { useState } from 'react';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { FaArrowRight, FaHome, FaPlay, FaPause } from 'react-icons/fa';

const popupStyles = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 9999,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const contentStyles = {
  background: 'white',
  padding: '20px',
  borderRadius: '8px',
  color: 'black',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Popup({ children, text }) {
  const [visible, setVisible] = useState(true);
  const { speak, speaking, stopSpeaking, currentText } = useSpeechSynthesis();

  const openPopup = () => {
    setVisible(true);
    speak(text);
  };

  const closePopup = () => {
    setVisible(false);
    stopSpeaking();
  };

  return (
    <>
      {visible ? (
        <div style={popupStyles} onClick={closePopup}>
          <div style={contentStyles} onClick={(e) => e.stopPropagation()}>
            <div>
              <button>
                <FaHome />
              </button>
              <button onClick={closePopup}>
                <FaArrowRight />
              </button>
              
            </div>
            <div>
            <h1>Indicaciones</h1>
            <p>{text}</p>
            <img src="./src/assets/characters/condor.png" alt={text} />
            </div>

            <div>
            <button
                onClick={speaking ? stopSpeaking : () => speak(currentText)}
              >
                {speaking ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            
          </div>
        </div>
      ) : (
        <>
          <button onClick={openPopup}>Indicaciones</button>
          {children}
        </>
      )}
    </>
  );
}
