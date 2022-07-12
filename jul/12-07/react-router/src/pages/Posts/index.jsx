import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function PostsPage() {
  return (
    <div>
      These are the posts:
      <p>Post one</p>
      <p>Post two</p>
      {/* Absolute path - from the ending of .com */}
      {/* <Link to={"/posts/new"}>Create a new post</Link> */}
      {/* Relative path - it appends it to the end of the current URL */}
      <div>
        <Link to={"new"}>Create a new post</Link>
      </div>
      <div>
        <Link to={"previous"}>See previous posts</Link>
      </div>
      <Outlet />
    </div>
  );
}
