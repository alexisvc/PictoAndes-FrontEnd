import React, { useState } from "react";
import {
  FaBookOpen,
  FaEdit,
  FaHome,
  FaQuestion,
  FaTrash,
  FaYoutube,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "./PictogramList.css";
import EditPictogram from "./EditPictogram";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PopUpHelp from "../extras/PopUpHelp";
import PopUpInstructions from "../extras/PopUpInstructions";

function PictogramList({ pictograms, updatePictogram, deletePictogram }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isPopUpOpenInstructions, setIsPopUpOpenInstructions] = useState(false);

  const navigate = useNavigate();
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedPictogram, setSelectedPictogram] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const uniqueCategories = [
    ...new Set(pictograms.map((pictogram) => pictogram.category)),
  ].sort();

  const personalizadosIndex = uniqueCategories.indexOf("Personalizados");

  if (personalizadosIndex !== -1) {
    // "Personalizados" existe, muévelo al principio
    uniqueCategories.unshift(
      ...uniqueCategories.splice(personalizadosIndex, 1)
    );
  }

  const filteredPictograms =
    selectedCategory === "todos"
      ? pictograms
      : pictograms.filter(
          (pictogram) => pictogram.category === selectedCategory
        );

  const handleEditClick = (pictogram) => {
    setShowEditForm(true);
    setSelectedPictogram(pictogram);
  };

  const handleDeleteClick = (pictogram) => {
    deletePictogram(pictogram.id);
    // Notificación de éxito
    toast.success("Pictograma eliminado exitosamente", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="pictogram-list-container">
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
          instructions={"Indicaciones"}
          url={"/public/instructions/indicaciones.png"}
          onClose={() => {
            setIsPopUpOpenInstructions(false);
          }}
        />
      )}
      {!showEditForm && (
        <div className="app-navigation">
          <button
            onClick={() => {
              navigate("/pictogram-menu");
            }}
          >
            <FaArrowAltCircleLeft />
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
          <h1>Lista de pictogramas</h1>
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
      )}

      {!showEditForm && (
        <>
          <div className="heading">
            <div className="filter">
              <span>Filtrar: </span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="todos">Todos</option>
                {uniqueCategories.map((category) => (
                  <option
                    key={category}
                    value={category}
                    style={{
                      fontWeight:
                        category === "Personalizados" ? "bold" : "normal",
                      color: category === "Personalizados" ? "red" : "black",
                    }}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="pictogram-table-container">
            <table className="pictogram-table">
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Nombre</th>
                  <th>Pictograma</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredPictograms.map((pictogram) => (
                  <tr key={pictogram.id}>
                    <td>{pictogram.category}</td>
                    <td>{pictogram.name}</td>
                    <td>
                      <img
                        className="img-list"
                        src={pictogram.url}
                        alt={pictogram.name}
                        width="100"
                      />
                    </td>
                    <td className="buttons-edit">
                      <button
                        className="edit-button"
                        onClick={() => handleEditClick(pictogram)}
                      >
                        <FaEdit /> Editar
                      </button>
                      <button
                        className="edit-button"
                        onClick={() => handleDeleteClick(pictogram)}
                      >
                        <FaTrash /> Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {showEditForm && selectedPictogram && (
        <EditPictogram
          pictogram={selectedPictogram}
          updatePictogram={updatePictogram}
          setShowEditForm={setShowEditForm}
          categories={uniqueCategories}
        />
      )}
    </div>
  );
}

export default PictogramList;

/* ... Código CSS existente ... */
