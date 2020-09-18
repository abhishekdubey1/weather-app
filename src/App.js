import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./Search";
import Card from "./Card";
import Chart from "./Chart";
import Temperature from "./Temperature";
import Weather from "./Weather";
import Time from "./Time";

function App() {
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("Mumbai");
  const [weekdata, setWeekdata] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  function success(position) {
    fetch(`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&
    exclude=current&appid=ac0a6285171a5e78cc8abcdf306c373e`).then((res) =>
      res.json()
    );
    // .then((data) => setWeekdata(data));
    console.log(position.coords.latitude, position.coords.longitude);
  }
  function error() {
    alert("Location not provided");
  }

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ac0a6285171a5e78cc8abcdf306c373e`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.city.sunrise)
        setTemp(Math.round(data.list[0].main.temp - 273));
        setWeekdata(data);
        // console.log(data.list[0].main);
      })
      .catch(() => alert("Please the City name you entered"));
  }, [city]);

  const inputChanged = (inputValue) => {
    setCity(inputValue);
  };
  return (
    <div className="container">
      <Search inputChanged={inputChanged} />

      <div className="section group">
        <Card weekdata={weekdata} num={1} />
        <Card weekdata={weekdata} num={2} />
        <Card weekdata={weekdata} num={3} />
        <Card weekdata={weekdata} num={4} />
        <Card weekdata={weekdata} num={5} />
      </div>

      <div className="chart-container">
        <Temperature temperature={temp} />

        <Chart weekdata={weekdata} />

        <Weather weekdata={weekdata} />

        <Time />
      </div>
    </div>
  );
}

export default App;
