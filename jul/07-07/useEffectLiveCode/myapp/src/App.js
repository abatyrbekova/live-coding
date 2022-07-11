import { useEffect, useState } from "react";
import "./App.css";

function App({ something }) {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  // a state for the cleanup example (line 30)
  // const [loading, setLoading] = useState(true);
  //==========================================================
  // Runs after every render:
  // useEffect(() => {

  //   console.log("hi from useEffect");
  // });
  //================================================
  // Runs once:
  // useEffect(() => {

  //   console.log("hi from useEffect");
  // },[]);
  //==================================================
  // Runs on state change (count)
  // useEffect(() => {

  //   console.log("hi from useEffect");
  // },[count]);
  //===================================================

  // example for cleanup function (loading page):
  // useEffect(() => {
  //   let mounted = true;
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success && mounted) {
  //         setLoading(false);
  //       }
  //     });
  //   return () => {
  //     mounted = false;
  //   };
  // }, [count]);
  //=====================================================

  // fetch function:
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    // manipulating the DOM directly
    document.title = "newTilte " + count;

    // calling the fetch function:
    getData();

    console.log("hi from useEffect");
  }, [count]);

  return (
    <div className="App">
      count: {count}
      <br />
      <button onClick={() => setCount(count + 1)}> count +1 </button>
      <button onClick={getData}> get posts </button>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h2> {item.title} </h2>
            <p> {item.body} </p>
          </div>
        );
      })}
      <br />
    </div>
  );
}

export default App;
