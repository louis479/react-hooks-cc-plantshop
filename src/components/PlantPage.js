import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function PlantPage({ plants, onAddPlant }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} /> 
      <PlantList plants={plants} /> 
    </main>
  );
}

export default PlantPage;
