import { useState, useReducer } from "react";

// The reducer function accepts two parameters - the state and the action object
// the state is passed by React, the action object is whatever we pass inside the dispatch function
function reducer(state, action) {
  // based on the value of action.type, we can modify parts of the state
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "change-email":
      return { ...state, email: state.email };
  }
}

function App() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    name: "John",
    email: "a@a.c",
  });

  console.log(state, "use reducer");

  return (
    <div className="App">
      <h1> use reducer hook</h1>
      {/* examp;e with useState */}
      <h2>Count with useState: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <hr />
      {/* examle with useReducer */}
      <h2>Count with useReducer hook: {state.count} </h2>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment use reducer count
      </button>

      <button
        onClick={() =>
          dispatch({ type: "change-email", newEmail: "email@email.com" })
        }
      >
        Change email to email@email.com
      </button>
    </div>
  );
}

export default App;
