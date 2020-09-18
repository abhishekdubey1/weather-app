import React from "react";
function Temperature({ temperature }) {
  return (
    <h1 className="max-temp">
      <b className="temp-icon">
        {temperature}&#176;C
        <span style={{ color: "yellow", fontSize: "3rem" }}>&#9728;</span>
      </b>
    </h1>
  );
}
export default Temperature;
