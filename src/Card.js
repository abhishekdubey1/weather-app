import React from "react";

function Card(props) {
  // let icon = IconSetter();
  let tempMax = !(props.weekdata.list === undefined) ? (
    <span>
      {Math.round(props.weekdata.list[props.num].main.temp_max - 273)}
    </span>
  ) : (
    "-"
  );
  let tempMin = !(props.weekdata.list === undefined) ? (
    <span>
      {Math.round(props.weekdata.list[props.num].main.temp_min - 273)}
    </span>
  ) : (
    "-"
  );

  return (
    <div className="col span_1_of_5">
      <h3 className="weekday">Fri</h3>
      <div className="max-temp">
        <span>{tempMax} &#176;</span>
        <span>{tempMin}&#176;</span>
      </div>
      <div className="min-temp"></div>
      <div className="weather">
        {props.weekdata ? (
          props.weekdata.list[props.num].weather[0].main === "Rain" ||
          props.weekdata.list[props.num].weather[0].main === "Clouds" ? (
            props.weekdata.list[props.num].weather[0].main === "Rain" ? (
              <ion-icon className="" name="cloud-sharp"></ion-icon>
            ) : (
              <ion-icon name="rainy-sharp"></ion-icon>
            )
          ) : (
            <span style={{ color: "yellow", fontSize: "3rem" }}>&#9728;</span>
          )
        ) : (
          "-"
        )}
      </div>
    </div>
  );
}
export default Card;
