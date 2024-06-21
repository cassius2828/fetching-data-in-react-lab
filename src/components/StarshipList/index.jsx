import StarshipCard from "../StarshipCard";

const StarshipList = ({ starships }) => {
  return (
    <>
    <h2>Starships</h2>
    <span>Number of results: {starships?.length}</span>
        <ul id="card-list">
      {starships?.map((card) => {
        return <StarshipCard model={card.model} title={card.name} manufacturer={card.manufacturer} class_of_ship={card.starship_class} key={card} />;
      })}
    </ul>
    </>

  );
};
export default StarshipList;
