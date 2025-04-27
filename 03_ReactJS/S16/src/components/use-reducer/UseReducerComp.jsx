import { useReducer } from "react";

const reducer = (state, action) => {
  var newValue;
  if (action.type === "inc") {
    newValue = state + action.value;
  } else if (action.type === "dec") {
    newValue = state - 1;
  } else {
    newValue = 0;
  }

  return newValue;
};

function UseReducerComp() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ padding: "100px" }}>
      <h2>
        Count Value is : <span style={{ color: "green" }}>{state}</span>
      </h2>
      <button
        onClick={() => {
          dispatch({ type: "inc", value: 1 }); //action object
        }}
      >
        Inc Count by 1
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        Dec Count by 1
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "inc",
            value: 5,
          });
        }}
      >
        Inc by 5
      </button>
    </div>
  );
}

export default UseReducerComp;
