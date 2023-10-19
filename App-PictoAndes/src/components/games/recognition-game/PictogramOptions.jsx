import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FiVolume2 } from "react-icons/fi";
function PictogramOptions({ currentPictograms, handleMouseOver, checkAnswer }) {
  return (
    <div className="images">
      {currentPictograms.map((pictogram) => (
        <div key={pictogram.name}>
          <img src={pictogram.url} alt={pictogram.name} onClick={() => checkAnswer(pictogram.name)}/>
          <div>
            <button onClick={() => handleMouseOver(pictogram.name)}>
              <FiVolume2 size={20}/>
            </button>  
            {/*<button onClick={() => checkAnswer(pictogram.name)}>✔️</button>*/}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PictogramOptions;
