const StarshipCard = ({ class_of_ship, title, manufacturer, model }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-details">
        <div className="detail">
            <p>class:</p><span>{class_of_ship}</span>
        </div>
        <div className="detail">
            <p>manufacturer: </p><span>{manufacturer}</span>
        </div>
        <div className="detail">
            <p>model: </p><span>{model}</span>
        </div>
      </div>
    </div>
  );
};
export default StarshipCard;
