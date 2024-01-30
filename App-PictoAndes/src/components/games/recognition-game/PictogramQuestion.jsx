import React from "react";
import { FiVolume2 } from "react-icons/fi";
import "./PictogramQuestion.css";

function PictogramQuestion({ currentPictogram, handleMouseOver }) {
  return (
    currentPictogram && (
      <div className="question">
        
        <img
          className="question-img"
          src={
             currentPictogram.url
          }
          alt={currentPictogram.name}
        />
        <div className="question-btn">
          <button onClick={() => handleMouseOver(currentPictogram.name)}>
            <FiVolume2 size={35} />
          </button>
        </div>
      </div>
    )
  );
}

export default PictogramQuestion;
