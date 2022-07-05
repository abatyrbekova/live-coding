import React from "react";

export default function Display(props) {
  return (
    <div>
      <p>You have clicked the button {props.count} times</p>
      <button onClick={props.handleClick}>Decrement count</button>
    </div>
  );
}
