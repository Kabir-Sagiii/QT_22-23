// import { useState } from "react";

// var myStateStyles = {
//   textAlign: "center",
//   marginTop: "50px",
// };

// function StateDemo() {
//   let data = useState("Welcome to React JS"); //data = [state,setter]

//   function updateState() {
//     data[1]("Hello React");
//   }

//   return (
//     <div style={myStateStyles}>
//       <h2> {data[0]} </h2>
//       <button onClick={updateState}>Update UI</button>
//     </div>
//   );
// }
// export default StateDemo;

import { useState } from "react";

var myStateStyles = {
  textAlign: "center",
  marginTop: "50px",
};

function StateDemo() {
  let [x, y] = useState("Welcome to React JS World"); //data = [state,setter]

  function updateState() {
    y(" Majha aagaya");
  }

  return (
    <div style={myStateStyles}>
      <h2> {x} </h2>
      <button onClick={updateState}>Update UI</button>
    </div>
  );
}
export default StateDemo;
