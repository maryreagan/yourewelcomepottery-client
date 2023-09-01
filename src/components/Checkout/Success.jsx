import {useEffect} from "react";

import { Typography } from "@mui/material";



function Success() {
  useEffect(() => {
   const urlParams = new URLSearchParams(window.location.search);
   const ids = urlParams.get("ids").split(",");
   const quantities = urlParams.get("quantities").split(",");

    const body = {
      ids: ids,
      quantities: quantities,
    };

    fetch(`https://youre-welcome-pottery-server-5b5629123e07.herokuapp.com/products/retrieve`, {
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

      <Typography
        variant="h4"
        align="center"
        mb={2}
        marginTop="1em"
        color="primary"
        fontFamily="Salsa-Regular"
      >
        Thank you for your purchase. 🎉
      </Typography>
      

    </div>
  );
}

export default Success;
