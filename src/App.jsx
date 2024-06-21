// src/App.jsx
import { useEffect, useState } from "react";
import "./App.css";
import StarshipList from "./components/StarshipList";
import StarshipSearch from "./components/StarshipSearch";

const URL = `https://swapi.dev/api/starships/`;

const App = () => {
  const [starships, setStarships] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    const fetchStarWarsData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setStarships(data.results);
    };
    fetchStarWarsData();
  }, []);
  const filterSpaceships = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    const filteredShips = await data.results.filter((ship) =>
      ship.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(searchValue);
    setStarships(filteredShips);
  };
  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch
        filterSpaceships={filterSpaceships}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <StarshipList starships={starships} />
    </main>
  );
};

export default App;
