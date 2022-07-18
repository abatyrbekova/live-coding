import React, { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./context/user";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://test-api-0.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.user) {
          setUser(data.user);
          navigate('/profile')
        }
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>Email</div>
      <input
        type="email"
        name="email"
        placeholder="your email e.g john@doe.com"
        autoComplete="off"
      />
      <div>Password</div>
      <input type={showPassword ? "text" : "password"} name="password" placeholder="abc123456" />
      <span onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? <FaRegEye className="icon"/> : <FaRegEyeSlash className="icon"/>}
      </span>
      <br />
      <button>Login</button>
    </form>
  );
}
