// Code Keypad Component Here
import React from "react";

const Keypad = () => {
  function handleChange(event) {
    console.log("Entering password...");
  }
  return (
    <div>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter search term..."
      />
    </div>
  );
};

export default Keypad;
