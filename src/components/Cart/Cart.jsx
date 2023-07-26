import React, {useState, useEffect} from 'react'
import { Typography, ButtonGroup, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";

function Cart( { cart, removeFromCart, quantityDecrement, handleAddToCart } ) {

const [totalPrice, setTotalPrice] = useState(0)
  
  useEffect(() => {
    // Calculate the total price whenever the cart changes
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    setTotalPrice(totalPrice);
  }, [cart]);


  const checkout = async () => {
    await fetch("http://localhost:8080/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.url) {
          window.location.assign(res.url);
        }
      });
  };

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
            <Box
              sx={{
                color: "action.active",
                display: "flex",
                flexDirection: "column",
                "& > *": {
                  marginBottom: 2,
                },
                "& .MuiBadge-root": {
                  marginRight: 4,
                },
              }}
            >
              <div>
                <ButtonGroup>
                  <Button
                    aria-label="reduce"
                    onClick={() => quantityDecrement(item._id)}
                  >
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Typography variant="body1">{item.quantity}</Typography>
                  <Button
                    aria-label="increase"
                    onClick={() => handleAddToCart(item)}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </div>
            </Box>
          </div>
        ))
      )}
      <Typography variant="body1">Total: ${totalPrice}</Typography>
      <Button onClick={checkout}> Checkout </Button>
    </div>
  );
}

export default Cart

// () => removeFromCart(item._id)

 