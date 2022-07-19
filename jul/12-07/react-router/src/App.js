import { Routes, Route, Navigate } from "react-router-dom";

// Components
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/NotFound";
import PostsPage from "./pages/Posts";
import NewPostPage from "./pages/NewPost";
import Header from "./components/Header";

// Styles
import "./App.css";
import PreviousPostsPage from "./pages/PreviousPosts";
import PostsRouter from "./components/PostsRouter";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* To organize our code a bit better, we created a PostsRouter component
            - notice the path - '/posts/*'
            - we had to use the asterisk
            */}
        {/* <Route path="/posts/*" element={<PostsRouter />} /> */}

        {/* Without Outlet - we will render either PostsPage, 
                             or NewPostPage, 
                             or PrevioustPostPage component */}

        {/* <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/new" element={<NewPostPage />} />
        <Route path="/posts/previous" element={<PreviousPostsPage />} /> */}

        {/* Outlet - notice that we have nested Route components
                   - Inside the PostsPage component, we can render
                   the child component inside the Outlet component
        */}
        <Route path="/posts" element={<PostsPage />}>
          <Route path="new" element={<NewPostPage />} />
          <Route path="previous" element={<PreviousPostsPage />} />
        </Route>

        {/* <Route path="new" element={<NewPostPage />} />
          <Route path="previous" element={<PreviousPostsPage />} />
        </Route> */}

        {/* Version 1:  If the user goes to a  URL we do not have, we show them the not found page */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* Version 2: If the user goes to a  URL we do not have, we redirect them to the home page */}
        <Route path="*" element={<Navigate to={"/not"} />} />
      </Routes>
    </div>
  );
}

export default App;
