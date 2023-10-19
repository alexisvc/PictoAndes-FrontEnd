import React, { useState } from "react";
import RecognitionGame from "./RecognitionGame";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MenuGame({ pictograms }) {
    const [selectedPictograms, setSelectedPictograms] = useState([]);
    const [isSelected, setIsSelected] = useState(false);

  const uniqueCategories = [...new Set(pictograms.map(pictogram => pictogram.category))];

  const handleCategoryClick = (category) => {
    const selectedPictogramsByCategory = pictograms.filter(
      (pictogram) => pictogram.category === category
    );
    setSelectedPictograms(selectedPictogramsByCategory);
    setIsSelected(true);
    
  };

  return (
    <div className="menu-game">
      {!isSelected ? (
        uniqueCategories.map((category) => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))
      ) : (
        <RecognitionGame pictograms={selectedPictograms} />
      )}
    </div>
  );
}

export default MenuGame;
