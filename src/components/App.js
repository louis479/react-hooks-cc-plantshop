import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className="app">
      {plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <img src={plant.image} alt={plant.name} width="150" />
          <p>${plant.price.toFixed(2)}</p>
        </div>
      ))}
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
