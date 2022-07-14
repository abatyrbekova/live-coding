# State Management in React

- **local state:**

so far we have only been working with local state (local to its component)

Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

useState is the first tool you should reach for to manage state in your components. <br/>
useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer. (we will learn useReducer next week)

- **global state:**

Once you attempt to manage state across multiple components, things get a bit trickier.

You will reach a point in your application where patterns like “lifting state up” and passing callbacks down to update your state from components lead to lots and lots of props.

What do you do if you want to update a component’s state from basically anywhere in your app? You turn it into global state.

To manage it, however, many developers opt for a third-party solution (e.g. Redux, Zustand, Jotai...).

React has created 2 hooks (useContext and useReducer) to help us manage the state without using an external library.

# useContext()

## Definition:

- A react hook that manages (distributes) the state.

Every react component has its own local state.

In functional components, this local state is set and modified using the useState hook.

useContext is a react hook that makes this state available throughout the entire project.

## Use case:

If a state is needed only in the local component then no need to be included in the context API.

If a state is needed by one-level nested components, then we use props instead of useContext.

Only when the state needs to be accessible by multiple components (mostly not direct children) is when we use useContext.

## How does it work?

We can divide it into 3 steps:

**1 - Context Provider:**

The first step is to write the state - that needs to be distributed - and its logic in a context provider component.

```js
import { useState, createContext } from "react";

const Context = createContext();

 function ContextProvider(props) {
  const [todos, setTodos] = useState([]);
  
  const onAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <Context.Provider
      value={{
        todos,
        setTodos,
        onAddTodo,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
```

(you can also include the Context Provider in another component if you want to only pass the local state of that component to its children as demonstrated in the w3schools example [here](https://www.w3schools.com/react/react_usecontext.asp))

**2 - Wrapping the App with it:**

Second step is to wrap the entire project with the previous component **Context Provider** (usually around App component but could be any other container component if used)


```js
import { ContextProvider } from "././store/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <ContextProvider>
      <App />
    </ContextProvider>

  </React.StrictMode>
);
```

**3 - Using the state where it's needed:**

Now that the state and its functions (or any other variables included in the Context Provider) are accessible by all our components within App, we can finally get what we need using the useContext hook.

in the target component:

```js
import React, { useContext } from "react";
import Context from "../store/context";

export default function Form() {
  const { onAddTodo } = useContext(Context);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;
    onAddTodo(todo);
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="input-group mb-3">
        <input
          name="todo"
          type="text"
          className="form-control"
          placeholder="add todo"
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          ADD
        </button>
      </div>
    </form>
  );
}
```


---

---


### Resources:

- [Learn useContext In 13 Minutes](https://www.youtube.com/watch?v=5LrDIWkK_Bc)

- [Bookstore example with use context](https://www.robinwieruch.de/react-usecontext-hook/)

