import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import PostsPage from "../../pages/Posts";
import NewPostPage from "../../pages/NewPost";
import PreviousPostsPage from "../../pages/PreviousPosts";

export default function PostsRouter() {
  // Notice the paths - the PostsPage will be rendered on the '/posts' path,
  // the NewPostPage will be rendered on '/posts/new'
  // the PreviousPostsPage will be rendered on '/posts/previous'
  // However, we did not have to write the word posts
  // That is because in our App.js, we wrote the path with an asterisk
  // <Route path="/posts/*" element={<PostsRouter />} />
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/new" element={<NewPostPage />} />
      <Route path="/previous" element={<PreviousPostsPage />} />
    </Routes>
  );
}
