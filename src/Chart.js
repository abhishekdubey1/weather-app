import React from "react";
function Chart(props) {
  return (
    <div className="chart">
      {props.weekdata ? (
        <div className="fullday-chart">
          {Math.round(props.weekdata.list[0].main.temp_min - 273)}&#176;
          {Math.round(props.weekdata.list[2].main.temp_min - 273)}&#176;
          {Math.round(props.weekdata.list[4].main.temp_min - 273)}&#176;
          {Math.round(props.weekdata.list[6].main.temp_min - 273)}&#176;
          {Math.round(props.weekdata.list[8].main.temp_min - 273)}&#176;
          {Math.round(props.weekdata.list[10].main.temp_min - 273)}&#176;
        </div>
      ) : (
        "-"
      )}
      <div className="fullday-chart">9am 1pm 4pm 7am 10pm 1am</div>
    </div>
  );
}
export default Chart;
