import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

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
    <div>
      <h2>Edit Pictogram</h2>
      <div>
        <span>Name:</span>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        <span>Category:</span>
        <input type="text" value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
      </div>
      <div>
        <span>Image:</span>
        <input type="file" onChange={(e) => setNewImage(e.target.files[0])} />
      </div>
      <div>
        <button onClick={handleUpdate}>Update Pictogram</button>
        <button onClick={() => {navigate("/")}}>Cancel</button>
      </div>
    </div>
  );
}

export default EditPictogram;
