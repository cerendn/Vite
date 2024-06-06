import React, { useReducer, createRef } from "react";

const initialState = { counter: 0, lastUpdated: new Date().toLocaleString() };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment_by":
      return {
        ...state,
        counter: state.counter + 1,
        lastUpdated: new Date().toLocaleDateString(),
      };
    case "decrement_by":
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
    case "ERROR":
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incByRef = createRef();
  const decByRef = createRef();
  const setByRef = createRef();

  return (
    <div>
      <p>Counter:{state.counter} </p>
      <p>Last Updated:{state.lastUpdated} </p>

      <button onClick={() => dispatch({ type: "increment_by" })}>
        İncrement
      </button>
      <button onClick={() => dispatch({ type: "decrement_by" })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            payload: {
              amount: Number(incByRef.current.value),
            },
          })
        }
      >
        inc
      </button>
      <input type="text" placeholder="Increment Amount" ref={incByRef} />
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            payload: {
              amount: Number(decByRef.current.value),
            },
          })
        }
      >
        dec
      </button>
      <input type="text" placeholder="Decrement Amount" ref={decByRef} />

      <button
        onClick={() =>
          dispatch({
            type: "SET_COUNTER",
            payload: { amount: Number(setByRef.current.value) },
          })
        }
      >
        SetCounter
      </button>
      <input type="text" placeholder="Set Counter" ref={setByRef} />
    </div>
  );
};

export default Reducer;
