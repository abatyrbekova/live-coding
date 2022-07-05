import { useState } from "react";

// Styles
import "./App.css";

function App() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("John Doe");

  const handleChange = (e) => {
    // We use the e.target.value to get the value of the input
    setName(e.target.value);
  };

  return (
    <div className="App">
      <form>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="Name"
        />
        <input type="email" />
        <input type="password" />
        <button>Submit</button>
      </form>

      <p>The name is: {name}</p>
    </div>
  );
}

export default App;

// const input = document.querySelector('input')
// const value = input.value

// input.addEventListener('change', (e)=>{
//   e.preventDefault()
// })
