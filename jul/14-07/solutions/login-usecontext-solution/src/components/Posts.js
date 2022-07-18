import React, { useContext } from "react";
import { UserContext } from "./context/user";

export default function Posts() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="posts-container">
      {user.posts.map((x, i) => (
        <div key={i}>
          <h2>{x.title}</h2>
          <p>{x.body} </p>
          <p>
            <b>{user.username} </b>
          </p>
        </div>
      ))}
     
        <button onClick={() => setUser(null)}>Log out</button>
      
    </div>
  );
}
