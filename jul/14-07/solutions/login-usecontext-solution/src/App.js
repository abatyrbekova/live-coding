import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useContext } from "react";
import { UserContext } from "./components/context/user";

function App() {
  const { user } = useContext(UserContext);
  return (
    <main className="App">
      <Routes>
        <Route path="/posts" element={user ? <Posts /> : <Navigate to="/" />} />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/" />}
        />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<div>404 page not found</div>} />
      </Routes>
    </main>
  );
}

export default App;
