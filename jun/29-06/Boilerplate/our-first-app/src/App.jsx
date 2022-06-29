import React from "react";
import uuid from "react-uuid";

// ! This is how we import images
// Images
import logo from "./logo.svg";

// ! This is how we import styles
// Styles
import "./App.css";

function App() {
  const name = "Luke";
  const obj = {
    name: "Matt",
    lastName: "Jordan",
  };

  const listItems = [
    <li key={uuid()}>Mary</li>,
    <li key={uuid()}>Sara</li>,
    <li key={uuid()}>Steve</li>,
  ];

  const names = [
    { name: "Ameer", id: 1 },
    { name: "Justi", id: 2 },
    { name: "Lucia", id: 3 },
    { name: "Lucia", id: 4 },
  ];

  const isWednesday = true;

  return (
    // ! if we want to return two sibling elements, we need to wrap them inside React.Fragment
    // ! Alternative syntax to <React.Fragment> is just <></>
    <React.Fragment>
      <div>Hello</div>
      {/* If we want to reference a javascript value, we need to wrap it inside curly braces */}
      <span>{name}</span>
      <div>
        {/* Accessing objects */}
        {obj.name} {obj.lastName}
      </div>
      {/* Rendering array of list item */}
      <section>{listItems}</section>
      {/* Creating an array of list items */}
      <p>
        {names.map((person) => (
          <li key={uuid()}>{person.name} </li>
        ))}
      </p>

      {/* Using ternary operator to render conditionally */}
      {isWednesday ? (
        <div>Yes it is Wednesday</div>
      ) : (
        <div>No it is not Wednesday</div>
      )}
    </React.Fragment>
  );
}

export default App;
