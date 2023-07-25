import React from 'react'
import { Typography, Button } from "@mui/material";

function Cart( { cart, removeFromCart } ) {
    let total = 0
  return (
    <div>
      <Typography variant="h4">Shopping Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            
            <Typography variant="body1">{item.productName}</Typography>
            <Typography variant="body2">${item.price}</Typography>
            <Button onClick={() => removeFromCart(item)}>Remove</Button>
            {/* Add total */}
            <p>Total {total += item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart

// () => removeFromCart(item._id)