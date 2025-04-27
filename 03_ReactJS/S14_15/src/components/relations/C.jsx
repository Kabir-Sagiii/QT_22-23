import D from "./D";
// function C({ info }) {
//   return (
//     <div>
//       <h2>C Component : {info}</h2>
//       <br />
//       <hr />
//       <br />
//       <D info={info} />
//     </div>
//   );
// }
import { useContext } from "react";
import myContext from "./Context";

function C() {
  var data = useContext(myContext);
  return (
    <div>
      <h2>C Component :{data} </h2>
      <br />
      <hr />
      <br />
      <D />
    </div>
  );
}

export default C;
