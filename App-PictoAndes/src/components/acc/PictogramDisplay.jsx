import React, { useState } from 'react';
import './PictogramDisplay.css';
import Togglable from '../Togglable';
import { useNavigate } from "react-router-dom";

export function PictogramDisplay({ images }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const [speaking, setSpeaking] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const navigate = useNavigate();

  const categories = Array.from(new Set(images.map(image => image.category)));

  const handleImageClick = (altText, imageUrl) => {
    if (!speaking) {
      const synth = window.speechSynthesis;
      if (synth) {
        const utterance = new SpeechSynthesisUtterance(altText);
        synth.speak(utterance);
      } else {
        console.error('La síntesis de voz no está soportada en este navegador.');
      }

      const image = { alt: altText, url: imageUrl };
      setSelectedImages([...selectedImages, image]);
    }
  };

  const handleDeleteLastImage = () => {
    if (!speaking && selectedImages.length > 0) {
      const updatedImages = [...selectedImages];
      updatedImages.pop();
      setSelectedImages(updatedImages);
    }
  };

  const handleDeleteAllImages = () => {
    if (!speaking && selectedImages.length > 0) {
      setSelectedImages([]);
    }
  };

  const handleReadSelectedImages = () => {
    if (!speaking && selectedImages.length > 0) {
      setSpeaking(true);

      const synth = window.speechSynthesis;
      if (synth) {
        synth.cancel();

        selectedImages.forEach((image, index) => {
          const utterance = new SpeechSynthesisUtterance(image.alt);
          utterance.onend = () => {
            if (index === selectedImages.length - 1) {
              setSpeaking(false);
            }
          };
          setTimeout(() => synth.speak(utterance), index * 1000);
        });
      } else {
        console.error('La síntesis de voz no está soportada en este navegador.');
      }
    }
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages = selectedCategory
    ? images.filter(image => image.category === selectedCategory)
    : images;

  const handleResetGame = () => {
    setSelectedImages([]);
    setSpeaking(false);
    setSelectedCategory('');
    navigate("/");
  }

  return (
    <Togglable buttonLabel="Tablero de comunicación">
      <button onClick={handleResetGame} disabled={speaking}>
              Reiniciar y Regresar al Inicio
      </button>
      <div className="container">
        <div className="selected-images-and-buttons">
          <div className="selected-images">
            {selectedImages.map((image, index) => (
              <div key={index} className="card">
                <img src={image.url} alt={image.alt} />
                <p>{image.alt}</p>
              </div>
            ))}
          </div>

          <div className="button-container">
            <button onClick={handleDeleteLastImage} disabled={speaking}>
              Eliminar
            </button>
            <button onClick={handleDeleteAllImages} disabled={speaking}>
              Eliminar todos
            </button>
            <button onClick={handleReadSelectedImages} disabled={speaking}>
              Play
            </button>
          </div>
        </div>

        {/* Grid para mostrar categorías y pictogramas */}
        <div className="grid-container">
          {/* Columna de categorías */}
          <div className="categories">
              <button onClick={() => handleCategoryFilter('')}>Todas</button>
            {categories.map((category, index) => (
              <button key={index} onClick={() => handleCategoryFilter(category)}>
                {category}
              </button>
            ))}
          </div>

          {/* Columna de pictogramas */}
          <div className="image-grid">
            <div className="image-grid-inner">
              {filteredImages.map((image, index) => (
                <div key={index} className="card" onClick={() => handleImageClick(image.name, image.url)}>
                  <div className="card-image">
                    <img src={image.url} alt={image.name} />
                  </div>
                  <p>{image.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Togglable>
  );
}
