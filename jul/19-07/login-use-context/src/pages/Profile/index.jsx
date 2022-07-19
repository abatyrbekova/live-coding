import { useContext } from "react";
import { Link } from "react-router-dom";

// Contexts
import { ACTIONS, UserContext } from "../../contexts/User";

export default function ProfilePage() {
  const { state, dispatch } = useContext(UserContext);

  /**
   * Handler for modifying the username inside our context
   */
  const handleChangeUsername = (e) => {
    dispatch({ type: ACTIONS.UPDATE_USERNAME, username: e.target.value });
  };

  return (
    <div>
      <h3>Username</h3>
      <input
        value={state.user.username}
        type="text"
        onChange={handleChangeUsername}
      />
      {/* <p>{state.user.username}</p> */}
      <hr />
      <h3>Email</h3>
      <p>{state.user.email}</p>
      <hr />
      <h3>Address</h3>
      <p>street: {state.user.address.street}</p>
      <p>city: {state.user.address.city}</p>
      <hr />
      <h3>Interests</h3>
      <p>{state.user.interests.join(", ")}</p>
      <hr />

      <Link to={"/posts"}>Go to posts</Link>
    </div>
  );
}
