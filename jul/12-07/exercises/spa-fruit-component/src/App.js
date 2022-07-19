import { useState } from "react";

// Components
import Fruit from "./components/Fruit";

// Styles
import "./App.css";

const initialState = ["Apple", "Banana", "Mango", "Lemon"];

export function App() {
  const [fruits, setFruits] = useState(initialState);

  const handleDelete = (fruit) => {
    const newFruits = fruits.filter((fr) => fr !== fruit);
    setFruits(newFruits);
  };

  return (
    <div>
      <ul>
        {fruits.map((f, i) => (
          <Fruit key={i} item={f} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default App;

function add(a, b, cb) {
  cb(a, b);
}

add(1, 2, (a, b) => {
  return a + b;
});
