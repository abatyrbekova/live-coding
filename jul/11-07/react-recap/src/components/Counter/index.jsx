import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  // 1. on every render
  // useEffect(() => {
  //   console.log("I have no dependency array");
  // });

  //   // 2. will run only once on component mount
  //   useEffect(() => {
  //     console.log("I should run only once");
  //   }, []);

  // 3. will only when the value of the variable changes
  useEffect(() => {
    console.log("I should run whenever the count changes");
  }, [count]);

  return (
    <div>
      count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
