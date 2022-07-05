import { useState } from "react";
// Components
import Counter from "./components/Counter";
import Display from "./components/Display";

// Styles
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <Counter count={count} handleClick={handleIncrement} />
      <Display count={count} handleClick={handleDecrement} />
    </div>
  );
}

export default App;

// component App

function doMath() {
  const count = 4;
  // component Counter
  function addTwo() {
    return count + 2;
  }

  // component Display
  function subtractTwo() {
    return count - 2;
  }
}
