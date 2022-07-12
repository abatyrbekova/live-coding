import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about");
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? { backgroundColor: "red" } : undefined;
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Posts</NavLink>
        </li>
        <li>
          <a href="https://www.google.com" target={"_blank"} rel="noreferrer">
            Go to google
          </a>
        </li>

        <button onClick={handleNavigate}>Send user to about page</button>
      </ul>
    </nav>
  );
}
