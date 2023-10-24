import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import "./EditPictogram.css";

function EditPictogram({ pictogram, updatePictogram }) {
  const [newName, setNewName] = useState(pictogram.name);
  const [newCategory, setNewCategory] = useState(pictogram.category);
  const [newImage, setNewImage] = useState(null); // Para almacenar la nueva imagen
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
      toast.success('Pictogram updated successfully', {
        position: 'top-right',
        autoClose: 3000,
      });
      setNewName('');
      setNewCategory('');
      setNewImage(null);
      navigate('/');
      
    } catch (error) {
      // Notificación de error
      console.error('Error updating pictogram:', error);
      toast.error('There was an error updating the pictogram. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      });
      setNewName('');
      setNewCategory('');
      setNewImage(null);
    }
  };

  return (
    <div className="edit-pictogram-form">
      <div className="form-section">
        <h2 className="form-heading">Edit Pictogram</h2>
        <form onSubmit={handleUpdate}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <input
              type="file"
              onChange={(e) => setNewImage(e.target.files[0])}
              className="input-field"
            />
          </div>
          <div className="button-container">
            <button type="submit" className="create-button">Update Pictogram</button>
            <button type="button" className="cancel-button" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="img-form">
        <img
          src="src\assets\characters\condor.png"
          alt="Image of the adventure"
        />
      </div>
    </div>
  );
}

export default EditPictogram;
