import { createContext, useState } from "react";

const Context = createContext(null);

const ContextProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <Context.Provider value={{ count, setCount }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
