// Components
import ListItem, { redBackground } from "./components/ListItem";

// Data
import { todos, food, drinks } from "./data";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <button className={redBackground}>new Button</button>
      <ul>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            text={todo.task}
            buttonText={"Todo button"}
            styles={"listItems"}
          />
        ))}
      </ul>
      <ul>
        {food.map((f) => (
          <ListItem key={f.id} text={f.meal} buttonText={"Meal button"} />
        ))}
      </ul>
      <ul>
        {drinks.map((drink) => (
          <ListItem key={drink.id} text={drink.drink} />
        ))}
      </ul>
    </div>
  );
}

export default App;
