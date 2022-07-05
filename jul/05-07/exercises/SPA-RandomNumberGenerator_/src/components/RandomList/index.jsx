import React, { useState } from "react";

export default function RandomList() {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const handleClick = () => {
    setRandomNumbers([...randomNumbers, Math.random()]);
  };
  return (
    <div>
      <button onClick={handleClick}>Add random number</button>
      {randomNumbers.map((num, i) => (
        <p key={i}>{num}</p>
      ))}
    </div>
  );
}
