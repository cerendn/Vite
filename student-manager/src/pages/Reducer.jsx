import React, { useReducer } from "react";

const initialState = { counter: 0, lastUpdated: new Date().toLocaleString() };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment by":
      return {
        ...state,
        counter: state.counter + 1,
        lastUpdated: new Date().toLocaleDateString(),
      };
    case "decrement by":
      return {
        ...state,
        counter: state.counter - 1,
        lastUpdated: new Date().toLocaleDateString(),
      };
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload.amount,
        lastUpdated: new Date().toLocaleString(),
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - action.payload.amount,
        lastUpdated: new Date().toLocaleString(),
      };
    case "reset":
      return {
        ...state,
        counter: 0,
        lastUpdated: new Date().toLocaleDateString(),
      };
    case "SET_COUNTER":
      return {
        ...state,
        counter: action.payload.amount,
        lastUpdated: new Date().toLocaleString(),
      };

    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Counter:{state.counter} </p>
      <button onClick={() => dispatch({ type: "increment" })}>İncrement</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default Reducer;
