import { useState } from "react";

const initialState = ["white", "red", "blue", "yellow", "orange"];

export default function Fruit({ item, handleDelete }) {
  const [color, setColor] = useState("white");

  const handleChangeColor = () => {
    const newColor = Math.floor(Math.random() * initialState.length);
    setColor(initialState[newColor]);
  };

  return (
    <li>
      {item}, color={color}
      <button onClick={handleChangeColor}>Change color</button>
      <button onClick={() => handleDelete(item)}>Delete</button>
    </li>
  );
}
