import React, {useEffect} from "react";
import "./Checkout.css"



function Success() {
  useEffect(() => {

   const urlParams = new URLSearchParams(window.location.search);
   const ids = urlParams.get("ids").split(",");
   const quantities = urlParams.get("quantities").split(",");

    const body = {
      ids: ids,
      quantities: quantities,
    };

    fetch(`http://127.0.0.1:4000/products/retrieve`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Now you can perform the necessary actions to update your MongoDB database here.
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2em",
      }}
    >
      <h1 className="title">Thank you for your purchase. 🎉</h1>
    </div>
  );
}

export default Success;
