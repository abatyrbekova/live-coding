import { useState } from "react";

// Styles
import "./App.css";

// ! Array destructuring - a will be Maria, b will be John and so on
const namesArray = ["Maria", "John", "Steve", "Luke"];
const [a, b, c, d] = namesArray;

const App = () => {
  // Tuple is an array with two elements
  // Tuple - first item is the value, second item is the function to modify the value
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState(namesArray);

  // ! We cannot modify variables, we have to use useState to do it
  // let name = "John";
  // name = "Maria"
  // ! This would work
  // setName("Maria");

  // ! Event handler to increment count
  const handleIncrement = () => {
    if (count === 10) {
      return;
    }

    setCount(count + 1);
  };

  // ! Event handler to decrement count
  const handleDecrement = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
  };

  // ! Event handler to add a user to the array
  const handleAddUser = () => {
    if (users.includes("Wolf")) {
      return;
    }

    const name = "Wolf";
    // ! We cannot use push, we always have to use setUsers function to modify the value
    setUsers([...users, name]);
  };

  return (
    <div className="App">
      <Count count={count} />
      <button onClick={handleIncrement}>Increment count</button>
      <button onClick={handleDecrement}>Decrement count</button>

      <div>
        {users.map((user, i) => (
          <p key={i}>{user}</p>
        ))}

        <button onClick={handleAddUser}>Add user</button>
      </div>
    </div>
  );
};

export default App;

const Count = (props) => {
  return <p>{props.count}</p>;
};

// ! Event listeners in vanilla javascript
// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {});
