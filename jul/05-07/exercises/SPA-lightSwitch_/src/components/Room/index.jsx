import React, { useState } from "react";

// Styles
import "./styles.css";

export default function Room() {
  const [isLightOn, setLightOn] = useState(false);

  const handleClick = () => {
    setLightOn(!isLightOn);
  };

  const light = isLightOn ? "lit" : "dark";

  return (
    <div className={light}>
      <p>The room is {light}</p>
      <button onClick={handleClick}>Switch light</button>
    </div>
  );
}
