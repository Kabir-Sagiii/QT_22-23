import React from "react";
import { useSelector } from "react-redux";
function BComp() {
  let info = useSelector((storedata) => {
    return storedata;
  });
  return (
    <div style={{ padding: "50px" }}>
      <h2>B Component</h2>
      <br /> <hr />
      <br />
      <p style={{ color: "green", fontWeight: "bold" }}>{info}</p>
    </div>
  );
}

export default BComp;
