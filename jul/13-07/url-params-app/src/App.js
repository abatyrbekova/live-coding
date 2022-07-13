import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SingleUser from "./components/SingleUser";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "70px",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: 'center'
        }}
      >
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/all-users"> Users </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-users" element={<Users />} />
        <Route path="/single-user/:id" element={<SingleUser />} />
      </Routes>
    </div>
  );
}

export default App;
