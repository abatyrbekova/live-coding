import { useContext, Fragment } from "react";

// Contexts
import { UserContext } from "../../contexts/User";

export default function PostsPage() {
  const { state } = useContext(UserContext);
  return (
    <div>
      {state.user.posts.map((post, i) => (
        <Fragment key={post.id}>
          <div>{post.title}</div>
          <hr />
        </Fragment>
      ))}
    </div>
  );
}
