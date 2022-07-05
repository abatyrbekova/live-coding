import React from "react";

export default function Counter(props) {
  return (
    <div>
      <p>Count is: {props.count}</p>
      <button onClick={props.handleClick}>Increment count</button>
    </div>
  );
}
