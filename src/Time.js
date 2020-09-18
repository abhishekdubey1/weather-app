import React from "react";
function Time() {
  const mro = Math.round;
  const converter = (ms) => {
    let s = ms / 1000,
      sr = ms % 1000;
    let m = s / 60,
      mr = s % 60;
    // console.log(mro(s), sr)
    // console.log(mro(m/60/24), mr)
  };
  converter(1600407645);
  return (
    <>
      <h2>sunrise: 1600304200 sunset: 1600348179</h2>
    </>
  );
}
export default Time;
