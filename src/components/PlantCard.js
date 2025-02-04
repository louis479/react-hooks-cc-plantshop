import React from "react";

function PlantCard({ plant, soldOut, handleToggleSoldOut }) {
  // Trigger the parent function to toggle soldOut status
  const handleClick = () => {
    handleToggleSoldOut(plant.id);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      <button onClick={handleClick}>
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
