import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Contexts
import { PostContextProvider } from "./contexts/Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PostContextProvider>
    <App />
  </PostContextProvider>
);
