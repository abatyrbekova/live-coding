import { useContext } from "react";
import "./App.css";
import Container from "./components/Container";
import { Context } from "./components/context/countContext";
import Header from "./components/Header";

function App() {
  const { count, setCount } = useContext(Context);

  return (
    <div>
      {/* one level nested component we use props 
      <Header count={count} />
*/}
      <Header />
      Hello from App
      <h2>count: {count} </h2>
      <button onClick={() => setCount(count + 1)}>count+1</button>
      <Container />
    </div>
  );
}

export default App;
