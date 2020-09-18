import React from "react";
function Weather(props) {
  return (
    <div className="pressure-humidity">
      <div className="pressure">
        Pressure
        <span className="pressure-data">{props.weekdata ? props.weekdata.list[0].main.pressure : "-"}hpa</span>
      </div>
      <div className="humidity">
        Humidity
        <span className="humidity-data">{props.weekdata ? props.weekdata.list[0].main.humidity : "-"}%</span>
      </div>
    </div>
  );
}
export default Weather;
