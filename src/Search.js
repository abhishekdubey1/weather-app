import React, { useState } from "react";

function Search({ inputChanged }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const sendInputValue = (e) => {
    if (e.key === "Enter") {
      inputChanged(inputValue);
    }
  };

  return (
    <div className="search-location-input">
      <ion-icon className="location-sharp" name="location-sharp"></ion-icon>
      <input
        placeholder="City Name"
        className="search-input"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={sendInputValue}
      />
      <ion-icon className="search-sharp" name="search-sharp"></ion-icon>
    </div>
  );
}

export default Search;
