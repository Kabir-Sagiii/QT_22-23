import { useState } from "react";
import B from "./B";
import myContext from "./Context";

// function A() {
//   const [state, setState] = useState("QT");
//   return (
//     <div>
//       <h2>A Component : {state}</h2>
//       <button
//         onClick={() => {
//           setState("Sagar");
//         }}
//       >
//         Update State
//       </button>
//       <br />
//       <hr />
//       <br />
//       <B data={state} />
//     </div>
//   );
// }

function A() {
  const [state, setState] = useState("QT");
  return (
    <div>
      <h2>A Component : {state}</h2>
      <button
        onClick={() => {
          setState("Sagar");
        }}
      >
        Update State
      </button>
      <br />
      <hr />
      <br />
      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
