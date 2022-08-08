import { createContext, useState } from "react";

export const PostContext = createContext();

// We can also destructure the Provider
// const { Provider } = PostContext;

export const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};
