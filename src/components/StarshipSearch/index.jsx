import { useEffect } from "react";

const StarshipSearch = ({
  searchValue,
  setSearchValue,
  filterSpaceships,
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    filterSpaceships();
  };
  useEffect(() => {
    filterSpaceships();
  }, [searchValue]);
  return (
    <div id="search-container">
      <h2>Search</h2>
      <form action="">
        <label htmlFor="">Search Term:</label>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
        />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};
export default StarshipSearch;
