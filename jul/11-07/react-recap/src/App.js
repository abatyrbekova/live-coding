import { useState } from "react";

// Components
import Text from "./components/Text";
import Counter from "./components/Counter";

// Styles
import "./App.css";

const texts = [
  { color: "", text: "Normal text" },
  { color: "green", text: "Success text" },
  { color: "red", text: "Error text" },
];

const todoItems = ["First item", "Second item"];

function App() {
  const [todos, setTodos] = useState(todoItems);

  const handleDelete = (index) => {
    const newTodos = todos.filter((item, i) => {
      return i !== index;
    });

    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Counter />
      {/* 1.  */}
      {/* <p style={{ backgroundColor: "" }}>Normal text</p> */}
      {/* <p style={{ backgroundColor: "green" }}>Success text</p>
      <p style={{ backgroundColor: "red" }}>Error text</p> */}
      {/* 2. */}
      {/* <Text color={""} text={"Normal text"} />
      <Text color={"green"} text={"Success text"} />
      <Text color={"red"} text={"Error text"} /> */}
      {/* 3. */}
      {texts.map((text, i) => {
        return <Text key={i} color={text.color} text={text.text} />;
      })}

      {todos.map((todo, i) => (
        <li key={i}>
          {todo} <button onClick={() => handleDelete(i)}>Delete</button>
        </li>
      ))}
    </div>
  );
}

export default App;
