# What we learned today

1. In React, we do not want our page to refresh whenever we go to a new link, that is why we cannot use
   a regular `<a>` tag.
2. In fact, we had to install a completely new library to use navigation in React.
3. We installed a library called `react-router-dom`.

4. Once we have installed the library there was one thing we had to do be able to use it:
   We had to go to [index.js](./src/index.js) and wrap the `<App>` component with a `<BrowserRouter>` component which we imported from the `react-router-dom`.

5. We also learned that we cannot use the normal `<a>` tag because it refreshes our app, so we used the `<Link>` component from the `react-router-dom` library. Example in [Header](./src/components/Header/index.jsx)

6. We started by using the `<Link>` component, but we then changed it to a `<NavLink>` component, which is basically the same, but it gives the component a className if the `<NavLink>` is currently active.

7. Cool, so now that we were able to use links to change the URL, we now need to add some routes so that we can choose which component should be rendered depending on the URL.

8. In [App](./src/App.js), we added a `<Routes>` component inside which we added `<Route>` components.

9. Every `<Route>` component accepted two props: the `path` prop, and the `element` prop.
   The path prop means on which URL the component should be rendered, the element prop means which component should be rendered.

10. We then learned that we can nest routes. The example in [App](./src/App.js), shows that a `<Route>` component can have other `<Route>` components as children. To be able to render the child components inside our parent component, we need to add an `<Outlet>` component to the [parent](./src/pages/Posts/index.jsx). Now, the child route component will be rendered inside the parent.

11. Alternative way of nesting components is shown inside the [PostRouter](./src//components//PostsRouter/index.jsx). We were able to nest that router component inside our [App](./src/App.js) by adding an asterisk to the path - `<Route path="/posts/*" element={<PostsRouter />} /> *`. If we choose this way of nesting routes, we are not adding any additional functionality, we do not render elements inside an `<Outlet>` component. We are just reorganizing our code into smaller chunks so it becomes more maintainable.
