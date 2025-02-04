import React from "react";
import PlantCard from "./PlantCard"; // ✅ Importing PlantCard component

function PlantList({ plants }) {
  return (
    <div>
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant} // Pass the entire plant object as a prop
        />
      ))}
    </div>
  );
}

export default PlantList;
