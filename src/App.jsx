// src/App.jsx
import './App.css';
import StarshipList from "./components/StarshipList";
import StarshipSearch from "./components/StarshipSearch";
const data = Array.from({ length: 10 });
const App = () => {
  return (
    <main>
      <h1>Star Wars API</h1>
      <StarshipSearch />
      <StarshipList data={data} />
    </main>
  );
};

export default App;
