import { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  CHANGE_EMAIL: "change-email",
};

// The reducer function accepts two parameters - the state and the action object
// the state is passed by React, the action object is whatever we pass inside the dispatch function
function reducer(state, action) {
  // based on the value of action.type, we can modify parts of the state
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };

    case ACTIONS.CHANGE_EMAIL:
      return { ...state, email: action.newEmail };

    default:
      return state;
  }
}

function App() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    name: "John",
    email: "a@a.c",
  });

  return (
    <div className="App">
      <h1> use reducer hook</h1>
      {/* example with useState */}
      <h2>Count with useState: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <hr />
      {/* example with useReducer */}
      <h2>Count with useReducer hook: {state.count} </h2>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        Increment use reducer count
      </button>

      <button
        onClick={() =>
          dispatch({ type: ACTIONS.CHANGE_EMAIL, newEmail: "email@email.com" })
        }
      >
        Change email to email@email.com
      </button>
    </div>
  );
}

export default App;
