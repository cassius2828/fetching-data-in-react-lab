import StarshipCard from "../StarshipCard";

const StarshipList = ({ data }) => {
  return (
    <>
    <h2>Starships</h2>
    <span>Number of results: *10</span>
        <ul id="card-list">
      {data?.map((card) => {
        return <StarshipCard key={card} />;
      })}
    </ul>
    </>

  );
};
export default StarshipList;
