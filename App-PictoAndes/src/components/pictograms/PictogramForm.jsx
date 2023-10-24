import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import "./PictogramForm.css";

export default function PictogramForm({ createPictogram }) {
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

      navigate("/");
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
    <div className="pictogram-form-container">
      <div className="form-section">
        <h3 className="form-heading">Create a new pictogram</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Category"
              value={categoryValue}
              onChange={(e) => setCategoryValue(e.target.value)}
              required
              className="input-field"
            />
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
              className="input-field"
            />
          </div>
          <div className="button-container">
            <button className="create-button">Create</button>
            <button className="cancel-button" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div className="img-form">
        <img
          src="src\assets\characters\condor.png"
          alt="imagen de la aventura"
        />
      </div>
    </div>
  );
}
