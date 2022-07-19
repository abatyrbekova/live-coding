import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Actions
import { ACTIONS } from "../../contexts/User";

// Contexts
import { UserContext } from "../../contexts/User";

// Fetcher function for logging in
const loginUser = async (user) => {
  const response = await fetch("https://test-api-0.herokuapp.com/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export default function LoginPage() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  // Input state
  const [values, setValues] = useState({
    email: "john@doe.com",
    password: "abc123456",
  });

  /**
   * Handler for keeping track of input state
   */
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setValues({ ...values, [inputName]: inputValue });
  };

  /**
   * Handler for submitting the form
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(values)
      .then((data) =>
        dispatch({ type: ACTIONS.LOG_IN_SUCCESS, user: data.user })
      )
      // Navigate the user to the profile page after logging in
      .then(() => navigate("/profile"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.email}
        onChange={(e) => handleChange(e)}
        name="email"
        className="formInput"
        type="email"
        placeholder="Email"
      />
      <input
        value={values.password}
        onChange={(e) => handleChange(e)}
        name="password"
        className="formInput"
        type="password"
        placeholder="Password"
      />
      <button>Log in</button>
    </form>
  );
}
