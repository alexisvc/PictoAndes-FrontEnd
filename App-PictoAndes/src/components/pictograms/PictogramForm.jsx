import React, { useState } from "react";
import {
  FaArrowCircleLeft,
  FaBookOpen,
  FaHome,
  FaQuestion,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import "./PictogramForm.css";
import PopUpHelp from "../extras/PopUpHelp";

export default function PictogramForm({ createPictogram }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", nameValue);
    formData.append("category", categoryValue);
    formData.append("image", image);

    try {
      await createPictogram(formData);
      // Notificación de éxito
      toast.success("Pictogram created successfully", {
        position: "top-right",
        autoClose: 3000,
      });
      setNameValue("");
      setCategoryValue("");
      setImage(null);

      navigate("/pictogram-menu");
    } catch (error) {
      // Notificación de error
      console.error("Error creating pictogram:", error);
      toast.error(
        "There was an error creating the pictogram. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      setNameValue("");
      setCategoryValue("");
      setImage(null);
    }
  };

  return (
    <div className="create-content">
      {isPopUpOpen && 
        <PopUpHelp 
          onClose={() => {setIsPopUpOpen(false)}}
          url={"https://www.youtube.com/watch?v=wiglQFrf6MM"}
        />
      }
      <div className="app-navigation">
        <button
          onClick={() => {
            navigate("/pictogram-menu");
          }}
        >
          <FaArrowCircleLeft />
          <span>Atrás</span>
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome />
          <span>Inicio</span>
        </button>
        <h1>PictoAndes</h1>
        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaBookOpen />
          <span>Instrucciones</span>
        </button>
        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaQuestion />
          <span>Ayuda</span>
        </button>
      </div>
      <div className="pictogram-form-container">
        <div className="form-section">
          <h3>Crear un nuevo Pictograma</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <p>Nombre:</p>
              <input
                type="text"
                placeholder="Ingresa un Nombre"
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="form-input">
              <p>Categoría:</p>
              <input
                type="text"
                placeholder="Ingresa una Categoría"
                value={categoryValue}
                onChange={(e) => setCategoryValue(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="form-input">
              <p>Imagen:</p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
                className="input-field"
              />
            </div>
            <div className="button-container">
              <button>
                <FaSave />
                <span>Guardar</span>
              </button>
              <button
                onClick={() => navigate("/pictogram-menu")}
              >
                <FaTimes />
                <span>Cancelar</span>
              </button>
            </div>
          </form>
        </div>
        <div className="img-form">
          <img
            src="src/assets/characters/condor.png"
            alt="Imagen de la Aventura"
          />
        </div>
      </div>
    </div>
  );
}
