import React, { useEffect, useContext, useState } from "react";

// Contexts
import { PostContext } from "./contexts/Posts";

const URL = "https://jsonplaceholder.typicode.com";

const fetchPosts = async () => {
  const response = await fetch(`${URL}/posts`);
  const data = await response.json();

  return data;
};

function App() {
  const [text, setText] = useState("");
  const { posts, setPosts } = useContext(PostContext);

  const [number, setNumber] = useState(1);

  // This will run only once on mount and fetch all the posts
  // useEffect(() => {
  //   fetchPosts().then((data) => setPosts(data));
  // }, [/* setPosts */]);

  // This fetch will happen whenever the number changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${number}`)
      .then((response) => response.json())
      .then((json) => setPosts([...posts, json]));
  }, [number]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => setNumber(number + 1);

  return (
    <div>
      <button onClick={handleClick}>Increment number</button>
      <input onChange={handleChange} value={text} type={"text"} />
      {posts
        .filter((post) => post.title.toLowerCase().includes(text.toLowerCase()))
        .map((post) => (
          <React.Fragment key={post.id}>
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
            <hr />
          </React.Fragment>
        ))}
    </div>
    // We use anchor tag to link to external web pages
    // <a></a>
    // We use Link from React Router to navigate inside our web app
    // <Link>
    //
  );
}

export default App;
