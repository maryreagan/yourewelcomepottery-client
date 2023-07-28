import React from "react";
import "./Checkout.css"

function Success() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2em"
      }}
    >

      <h1 className="title">Thank you for your purchase. 🎉</h1>
    </div>
  );
}

export default Success;
