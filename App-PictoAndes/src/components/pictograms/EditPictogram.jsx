import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import "./EditPictogram.css";
import { FaArrowCircleLeft, FaCircle, FaHome, FaQuestion, FaSave, FaTimes } from "react-icons/fa";
import PopUpHelp from "../extras/PopUpHelp";

function EditPictogram({ pictogram, updatePictogram, setShowEditForm }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
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
      toast.success("Pictogram updated successfully", {
        position: "top-right",
        autoClose: 3000,
      });
      setNewName("");
      setNewCategory("");
      setNewImage(null);
      setShowEditForm(false);
    } catch (error) {
      // Notificación de error
      console.error("Error updating pictogram:", error);
      toast.error(
        "There was an error updating the pictogram. Please try again.",
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
      {isPopUpOpen && 
        <PopUpHelp
          onClose={() => {setIsPopUpOpen(false)}}
          url={"https://www.youtube.com/watch?v=wiglQFrf6MM"}
        />
      }
      <div className="app-navigation">
        <button
          onClick={() => {
            setShowEditForm(false);
          }}
        >
          <FaArrowCircleLeft />
        </button>
        <button
          onClick={() => {
            setShowEditForm(false);
          }}
        >
          <FaHome />
        </button>
        <h1>PictoAndes</h1>

        <button
          onClick={() => {
            setIsPopUpOpen(true);
          }}
        >
          <FaQuestion />
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
              <input
                type="text"
                placeholder="Ingresa una Categoría"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                required
                className="input-field"
              />
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
              <button type="submit" className="create-button">
                <FaSave />
                <span> Guardar</span>
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => setShowEditForm(false)}
              >
                <FaTimes />
                <span> Cancelar</span>
              </button>
            </div>
          </form>
        </div>
        <div className="img-form">
          <img src={pictogram.url} alt={pictogram.name} />
        </div>
      </div>
    </div>
  );
}

export default EditPictogram;
