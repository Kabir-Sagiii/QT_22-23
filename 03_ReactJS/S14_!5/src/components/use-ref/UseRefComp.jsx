// function UseRefComp() {
//   let obj = useRef("React JS"); // obj = {current:"React JS"}
//   return (
//     <div style={{ padding: "50px" }}>
//       <h2>useRef Component</h2>
//       <button
//         onClick={() => {
//           console.log(obj.current);
//         }}
//       >
//         Print Ref Value
//       </button>

//       <button
//         onClick={() => {
//           obj.current = "New Data";
//         }}
//       >
//         Update Ref
//       </button>
//     </div>
//   );
// }

import { useRef } from "react";

function UseRefComp() {
  let h2ref = useRef();
  let btnRef = useRef();
  return (
    <div style={{ padding: "50px" }}>
      <h2 ref={h2ref}>useRef Concept</h2>
      <button
        ref={btnRef}
        onClick={() => {
          h2ref.current.style.color = "red";
          h2ref.current.innerText = "Content Changed";
          btnRef.current.innerText = "Content Updated";
          btnRef.current.style.border = "2px solid red";
        }}
      >
        Update Style
      </button>
    </div>
  );
}

export default UseRefComp;
