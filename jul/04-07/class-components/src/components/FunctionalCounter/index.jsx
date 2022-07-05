import { useState } from "react";

export default function FunctionalCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Functional component</h3>
      <p>count: {count}</p>
      <button onClick={handleClick}>Increment count</button>
    </div>
  );
}
