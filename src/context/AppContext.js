import { createContext, useReducer } from "react";

// The reducer - this is used to update the state, based on the action
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expanse) => expanse.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return { ...state, budget: action.payload };

    default:
      return state;
  }
};

// Sets the initial state when the app loads
const initialState = {
  budget: 3000,
  expenses: [],
};

//Creates the context this is the data our components import and use to get the state
export const AppContext = createContext();

// Provieder component - wraps the components we want to give access to the state
// Accepts the children, wich are the nested (wrapped) components

export const AppProvider = (props) => {
  // Sets up the app state, takes a reducer and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Returns our context. Pass in the value we want to show
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {" "}
      {props.children}
    </AppContext.Provider>
  );
};
