import React, { useState } from "react";
import "./PictogramDisplay.css";
import { useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import { FaPlayCircle } from "react-icons/fa";
import { FiDelete, FiTrash2 } from "react-icons/fi";

export function PictogramDisplay({ images }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const { speak, speaking, setSpeaking } = useSpeechSynthesis();
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = Array.from(new Set(images.map((image) => image.category)));

  const handleImageClick = (altText, imageUrl) => {
    if (!speaking) {
      // Utiliza el hook para hablar
      speak(altText);
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
          // Utiliza el hook para hablar
          speak(image.alt);
          setTimeout(() => {}, (index + 1) * 1500);
        });
      } else {
        console.error(
          "La síntesis de voz no está soportada en este navegador."
        );
      }
    }
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages = selectedCategory
    ? images.filter((image) => image.category === selectedCategory)
    : images;

  return (
    <div className="acc-container">
      <div className="selected-images-and-buttons">
        <div className="selected-images">
          {selectedImages.map((image, index) => (
            <div key={index} className="card">
              <img src={image.url} alt={image.alt} />
              <p>{image.alt}</p>
            </div>
          ))}
        </div>

        <div className="button-acc">
          <button onClick={handleDeleteLastImage} disabled={speaking}>
            <FiDelete />
          </button>
          <button onClick={handleReadSelectedImages} disabled={speaking}>
            <FaPlayCircle/>
          </button>
          <button onClick={handleDeleteAllImages} disabled={speaking}>
            <FiTrash2 />
          </button>
        </div>
      </div>

      {/* Grid para mostrar categorías y pictogramas */}
      <div className="grid-acc">
        {/* Columna de categorías */}
        <div className="categories">
          <button onClick={() => handleCategoryFilter("")}>Todas</button>
          {categories.map((category, index) => (
            <button key={index} onClick={() => handleCategoryFilter(category)}>
              {category}
            </button>
          ))}
        </div>
        {/* Columna de pictogramas */}
          <div className="image-grid">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="card"
                onClick={() => handleImageClick(image.name, image.url)}
              >
                <div className="card-image">
                  <img src={image.url} alt={image.name} />
                </div>
                <p>{image.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
}
