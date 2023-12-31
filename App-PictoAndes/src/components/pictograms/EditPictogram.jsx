import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import "./EditPictogram.css";
import {
  FaArrowCircleLeft,
  FaBookOpen,
  FaHome,
  FaQuestion,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import PopUpHelp from "../extras/PopUpHelp";
import PopUpInstructions from "../extras/PopUpInstructions";

function EditPictogram({
  pictogram,
  updatePictogram,
  setShowEditForm,
  categories,
}) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isPopUpOpenInstructions, setIsPopUpOpenInstructions] = useState(false);

  const [newName, setNewName] = useState(pictogram.name);
  const [newCategory, setNewCategory] = useState(pictogram.category);
  const [newImage, setNewImage] = useState(null);

  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedPictogram = {
      name: newName,
      category: newCategory,
    };

    if (newImage) {
      updatedPictogram.image = newImage;
    }

    try {
      await updatePictogram(pictogram.id, updatedPictogram);

      // Notificación de éxito
      toast.success("Pictograma editado exitosamente", {
        position: "top-right",
        autoClose: 3000,
      });
      setNewName("");
      setNewCategory("");
      setNewImage(null);
      setShowEditForm(false);
    } catch (error) {
      // Notificación de error
      toast.error(
        "Error al editar el pictograma.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      setNewName("");
      setNewCategory("");
      setNewImage(null);
    }
  };

  return (
    <div className="edit-content">
      {isPopUpOpen && (
        <PopUpHelp
          onClose={() => {
            setIsPopUpOpen(false);
          }}
          url={"https://www.youtube.com/watch?v=wiglQFrf6MM"}
        />
      )}
      {isPopUpOpenInstructions && (
        <PopUpInstructions
          instructions={"En esta sección podrás crear y listar pictogramas"}
          url={"/src/assets/characters/condor.png"}
          onClose={() => {
            setIsPopUpOpenInstructions(false);
          }}
        />
      )}
      <div className="app-navigation">
        <button
          onClick={() => {
            setShowEditForm(false);
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
            setIsPopUpOpenInstructions(true);
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
      <div className="edit-pictogram-form">
        <div className="form-section-edit">
          <h3>Editar Pictograma</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-input">
              <p>Nombre:</p>
              <input
                type="text"
                placeholder="Ingresa un Nombre"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                required
                className="input-field"
              />
            </div>
            <div className="form-input">
              <p>Categoría:</p>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-input">
              <p>Imagen:</p>
              <input
                type="file"
                onChange={(e) => setNewImage(e.target.files[0])}
                className="input-field"
              />
            </div>
            <div className="button-container">
              <button type="submit">
                <FaSave />
                <span> Guardar</span>
              </button>
              <button type="button" onClick={() => setShowEditForm(false)}>
                <FaTimes />
                <span> Cancelar</span>
              </button>
            </div>
          </form>
        </div>
        <div className="img-form">
          {/*<img src={pictogram.url} alt={pictogram.name} />*/}
          <img
            src="src\assets\characters\condor.png"
            alt="imagen de la aventura"
          />
        </div>
      </div>
    </div>
  );
}

export default EditPictogram;
