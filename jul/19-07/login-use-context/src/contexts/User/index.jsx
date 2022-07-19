import { createContext, useReducer } from "react";

export const UserContext = createContext();

/**
 * Actions to modify our state
 */
export const ACTIONS = {
  LOG_IN_SUCCESS: "LOG_IN_SUCCESS",
  UPDATE_USERNAME: "UPDATE_USERNAME",
};

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOG_IN_SUCCESS:
      return { user: action.user };

    case ACTIONS.UPDATE_USERNAME:
      return { user: { ...state.user, username: action.username } };

    default:
      return state;
  }
};

/**
 * Component with which we wrap the components which should have access to the context
 */
export default function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
