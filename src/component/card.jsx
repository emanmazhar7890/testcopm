import React from "react";
const Card = (props) => {
  return (
    <div>
      <h2 id="location">{props.cityLocation}</h2>
      <p id="Temperature">{props.cityTemp}</p>
      <p id="wind"> WindSpeed:{props.windspeed}m/s </p>
    </div>
  );
};
export default Card;
