import "./App.css";
import { useState, useRef, useEffect } from "react";

let num = { current: 0 };

function App() {
  const [count, setCount] = useState(0);

  const numRef = useRef(3); // {current: 3}
  const parag = useRef(); // {current: }
  const emailInput = useRef();

  useEffect(() => {
   // parag.current.innerText = "hello";
    emailInput.current.focus();
  }, []);

  return (
    <div className="App">
      hi
      <p ref={parag}> * state * count is: {count} </p>
      <p> * variable * num is: {num.current}</p>
      <p> * ref * numRef is: {numRef.current} </p>
      <button onClick={() => setCount((prev) => prev + 1)}> count +1</button>
      <button onClick={() => (num = { current: num.current + 1 })}>
        num +1
      </button>
      <button onClick={() => (numRef.current += 1)}> numRef +1</button>
      <div style={{ height: "100vh" }}> some div</div>

      <input ref={emailInput} type={"email"} placeholder="your email" autoComplete="off" />

      <div style={{ height: "200px" }}></div>
    </div>
  );
}

export default App;
