import { useRef } from "react";
import actionCreator from "./Actioncreator";
import myStore from "./Store";
import { useDispatch } from "react-redux";

function Aclient() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const getInputData = () => {
    const actionObj = actionCreator(inputRef.current.value);
    // myStore.dispatch(actionObj);
    dispatch(actionObj);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>A Client</h2>
      <br /> <hr />
      <br />
      <input ref={inputRef} placeholder="enter some text" />
      <button onClick={getInputData}>Submit</button>
    </div>
  );
}

export default Aclient;
