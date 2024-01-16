import React, { useState } from "react";
import "./PictogramDisplay.css";
import { useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from "../../hooks/useSpeechSynthesis";
import {
  FaArrowCircleLeft,
  FaArrowLeft,
  FaBookOpen,
  FaHome,
  FaPlayCircle,
  FaQuestion,
  FaYoutube,
} from "react-icons/fa";
import { FiDelete, FiTrash2 } from "react-icons/fi";
import PopUpHelp from "../extras/PopUpHelp";
import PopUpInstructions from "../extras/PopUpInstructions";

export function PictogramDisplay({ images }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isPopUpOpenInstructions, setIsPopUpOpenInstructions] = useState(false);

  const navigate = useNavigate();
  const [selectedImages, setSelectedImages] = useState([]);
  const { speak, speaking, setSpeaking } = useSpeechSynthesis();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isCategorySelected, setIsCategorySelected] = useState(false);

  // Obtiene las categorías de los pictogramas y las filtra para que no se muestren en el menú
  const categories = Array.from(
    new Set(images.map((image) => image.category))
  )
    .filter((categoria) => categoria !== "Pronombres" && categoria !== "Verbos")
    .sort();
  // Filtra los pictogramas por categoría para mostrarlos en la columna de pronombres
  const pronounsPictograms = () =>
    images.filter((image) => image.category === "Pronombres");
  // Filtra los pictogramas por categoría para mostrarlos en la columna de verbos
  const actionsPictograms = () =>
    images.filter((image) => image.category === "Verbos");

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
    setIsCategorySelected(true);
  };

  const filteredImages = selectedCategory
    ? images.filter((image) => image.category === selectedCategory)
    : images;

  return (
    <div className="acc-container">
      {isPopUpOpen && (
        <PopUpHelp
          onClose={() => {
            setIsPopUpOpen(false);
          }}
          url={"https://www.youtube.com/watch?v=lJiEc1dBbRQ"}
        />
      )}
      {isPopUpOpenInstructions && (
        <PopUpInstructions
          instructions={"En esta sección podrás crear y listar pictogramas"}
          url={"/public/instructions/indicaciones.png"}
          onClose={() => {
            setIsPopUpOpenInstructions(false);
          }}
        />
      )}
      <div className="selected-images-and-buttons">
        <div className="button-nav">
          <button
            onClick={() => {
              navigate("/acc-menu");
            }}
          >
            <FaArrowCircleLeft />
            <span>Atrás</span>
          </button>
          <button
            onClick={() => {
              navigate("/main-menu");
            }}
          >
            <FaHome />
            <span>Inicio</span>
          </button>
        </div>

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
            <span>Quitar</span>
          </button>
          <button onClick={handleReadSelectedImages} disabled={speaking}>
            <FaPlayCircle />
            <span>Reproducir</span>
          </button>
          <button onClick={handleDeleteAllImages} disabled={speaking}>
            <FiTrash2 />
            <span>Borrar</span>
          </button>
        </div>

        <div className="button-nav">
          <button
            onClick={() => {
              setIsPopUpOpenInstructions(true);
            }}
          >
            <FaQuestion />
            <span>Indicaciones</span>
          </button>
          <button
            onClick={() => {
              setIsPopUpOpen(true);
            }}
          >
            <FaYoutube />
            <span>Ayuda</span>
          </button>
        </div>
      </div>

      {/* Grid para mostrar categorías y pictogramas */}
      <div className="grid-acc">
        {/* Columna de pronombres */}
        <div className="pronouns-grid">
          {pronounsPictograms().map((image, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleImageClick(image.name, image.url)}
            >
              <img className="pronouns-img" src={image.url} alt={image.name} />
              <p>{image.name}</p>
            </div>
          ))}
        </div>
        {/* Columna de acciones */}
        <div className="actions-grid">
          {actionsPictograms().map((image, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleImageClick(image.name, image.url)}
            >
              <img className="actions-img" src={image.url} alt={image.name} />
              <p>{image.name}</p>
            </div>
          ))}
        </div>
        {/* Columna de pictogramas  */}
        {isCategorySelected ? (
          <div className="pictograms">
            <div
              className="card"
              onClick={() => {
                setIsCategorySelected(false);
                setSelectedCategory("");
              }}
            >
              <FaArrowLeft size={50} className="icon" />
              <p>Regresar</p>
            </div>
            <div className="pictograms-grid">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="card"
                onClick={() => handleImageClick(image.name, image.url)}
              >
                <img className="default-img" src={image.url} alt={image.name} />
                <p>{image.name}</p>
              </div>
            ))}
            </div>
          </div>
        ) : (
          <div className="categories">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryFilter(category)}
              >
                <span>
                  <img
                    className="category-icon"
                    src={`http://localhost:3001/icons/${category}.png`}
                    alt={category}
                  />
                </span>
                <span>{category}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
