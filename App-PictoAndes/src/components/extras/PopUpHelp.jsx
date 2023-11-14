// PopUpHelp.js
import React from "react";
import "./PopUpHelp.css";
import { FaTimes } from "react-icons/fa";

function PopUpHelp({ url, onClose }) {
  const videoId = url.split("v=")[1];

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content">
        <div className="close">
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="video-container">
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
