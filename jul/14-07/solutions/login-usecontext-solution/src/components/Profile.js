import React, { useContext, useState } from "react";
import { UserContext } from "./context/user";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();
  
  return (
    <div>
      <h2>Username:</h2>
      <input type="text" readOnly value={user.username} />
      <h2>Email:</h2>
      <input type="text" readOnly value={user.email} />
      <h2>Password:</h2>
      <input
        type={showPassword ? "text" : "password"}
        readOnly
        value={user.password}
      />
      <span onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? <FaRegEye className="icon"/> : <FaRegEyeSlash className="icon"/>}
      </span>
      <h2>Address:</h2>
      <h3>Street:</h3>
      <input type="text" readOnly value={user.address.street} />
      <h3>City:</h3>
      <input type="text" readOnly value={user.address.city} />
      <h2>Interests:</h2>
      <textarea
        readOnly
        value={user.interests.join(",")}
        rows={"5"}
        cols={"30"}
      />
      <br />
      <button onClick={()=> navigate('/posts')}>My posts</button>
      <button onClick={() => setUser(null)}>Log out</button>
    </div>
  );
}
