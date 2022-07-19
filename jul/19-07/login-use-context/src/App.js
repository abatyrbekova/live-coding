import { Routes, Route } from "react-router-dom";

// Components
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import PostsPage from "./pages/Posts";

// Styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/posts" element={<PostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
