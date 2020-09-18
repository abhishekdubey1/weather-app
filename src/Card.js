import React, { useState, useEffect } from "react";
// import IconSetter from "./IconSetter";
// import sun.svg from "./"
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

  // console.log(props.weekdata, "WEEEEKDATA");
  return (
    <div className="col span_1_of_5" style={{ border: "1px solid black" }}>
      <h3 className="weekday">Fri</h3>
      <div className="max-temp">{tempMax} &#176;</div>
      <div className="min-temp">{tempMin}&#176;</div>
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
