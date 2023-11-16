// PopUpHelp.js
import React from "react";
import "./PopUpHelp.css";
import { FaTimes } from "react-icons/fa";

function PopUpHelp({ url, onClose }) {
  const videoId = url.split("v=")[1];

  return (
    <div className="popup-help" onClick={onClose}>
      <div className="popup-content-help">
        <div className="close">
          <button className="close-button-help" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div>
        <h2 className="titulo">Necesitas ayuda para realizar esta actividad?</h2>
          <p className="subtitulo">En el siguiente video tutorial se mostrará:</p>
        </div>
        <div className="video-container-help">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default PopUpHelp;
