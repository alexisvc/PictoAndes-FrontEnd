import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "./PictogramList.css";
import EditPictogram from "./EditPictogram";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PictogramList({ pictograms, updatePictogram, deletePictogram }) {
  const navigate = useNavigate();
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedPictogram, setSelectedPictogram] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const uniqueCategories = [
    ...new Set(pictograms.map((pictogram) => pictogram.category)),
  ];

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
    toast.success("Pictogram deleted successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="pictogram-list-container">
      {!showEditForm && (
        <>
          <div className="nav-button">
            <button
              onClick={() => {
                navigate("/pictogram-menu");
              }}
            >
              <FaArrowAltCircleLeft />
            </button>
            <div className="heading">
              <h2>Lista de pictogramas</h2>
              <div className="filter">
                <span>Filtrar: </span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="todos">Todos</option>
                  {uniqueCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </>
      )}

      {!showEditForm && (
        <div className="pictogram-table-container">
          <table className="pictogram-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Pictograma</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredPictograms.map((pictogram) => (
                <tr key={pictogram.id}>
                  <td>{pictogram.name}</td>
                  <td>{pictogram.category}</td>
                  <td>
                    <img
                      className="img-edit"
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
                      <FaEdit /> Edit
                    </button>
                    <button
                      className="edit-button"
                      onClick={() => handleDeleteClick(pictogram)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showEditForm && selectedPictogram && (
        <EditPictogram
          pictogram={selectedPictogram}
          updatePictogram={updatePictogram}
        />
      )}
    </div>
  );
}

export default PictogramList;
