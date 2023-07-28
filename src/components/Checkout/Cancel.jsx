import React from "react";
import "./Checkout.css"

function Cancel() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2em",
      }}
    >
      <h1 className="title">Transaction cancelled. 😢</h1>
    </div>
  );
}

export default Cancel;
