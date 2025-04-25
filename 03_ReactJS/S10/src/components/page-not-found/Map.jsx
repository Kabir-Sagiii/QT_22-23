import { useState } from "react";

function Map() {
  const [state, setState] = useState([<p>1</p>, <p>2</p>]);
  return (
    <div>
      <h1>Map concept : {state} </h1>
    </div>
  );
}

export default Map;
