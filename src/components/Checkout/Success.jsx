import React, {useEffect} from "react";
import { Button } from "@mui/material";



function Success() {
  // let body = {
  //   url : window.location.href
  // }
  // let requestOptions = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(body),
  // }
  useEffect(() => {
    fetch(`http://127.0.0.1:4000/products/retrieve/${window.location.href}`)
      .then(console.log('success'))
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
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial",
      }}
    >

      <h1>Thank you for your purchase 🎉</h1>
    </div>
  );
}

export default Success;
