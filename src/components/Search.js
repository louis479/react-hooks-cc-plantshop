import React from "react";

function Search({ plants, setFilteredPlants }) {
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(query)
    );
    setFilteredPlants(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Search plants"
      onChange={handleSearch}
    />
  );
}


export default Search;
