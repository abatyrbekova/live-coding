import { useState } from "react";

// Fetchers
import { registerUser } from "./Fetchers";

// Styles
import "./App.css";

function App() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  // By using one handle change
  // we are able to dinamically change the correct value inside our
  // values object.
  // To every inpuy we added a name
  // We use the same keys inside our values object (userName, email, password)
  // When the user types in the input, we use the inputs name to overwrite only that key
  // inside our state, while preserving the rest of the state
  const handleChange = (e) => {
    // [e.target.name] is a variable
    // to target a propery inside an object with a variable,
    // we have to wrap it inside square brackets
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // We use prevent default to prevent the browser from reloading
    e.preventDefault();
    // We make an API call, and when we get the succesfull response from the API
    // we change the setSuccess state to true
    registerUser(values).then(() => setSuccess(true));
  };

  return (
    <div className="App">
      <form>
        <input
          value={values.userName}
          onChange={handleChange}
          type="text"
          placeholder="Name"
          name="userName"
        />
        <input
          value={values.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          value={values.password}
          onChange={handleChange}
          type="password"
          placeholder="Password"
          name="password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {success ? <h3>Succesfully registered</h3> : null}
    </div>
  );
}

export default App;
