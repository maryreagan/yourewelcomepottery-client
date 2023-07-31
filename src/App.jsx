
import { useState, useEffect } from "react";
import "./App.css";
import Admin from "./components/Admin/Admin";
import LandingPage from "./components/LandingPage/LandingPage";
import Bio from "./components/Bio/Bio";
import Navbar from "./components/Navbar/Navbar";
import Footer2 from "./components/footer/Footer2";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Cart from "./components/Cart/Cart";
import Success from "./components/Checkout/Success";
import Cancel from "./components/Checkout/Cancel";
import NotFound from "./components/NotFound"
import salsa from "./fonts/Salsa-Regular.ttf";

const theme = createTheme({
  typography: {
    fontFamily: [
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Salsa-Regular"
        ].join(","),
  },


  palette: {
    primary: {
      main: "#a04d31",
    },
    secondary: {
      main: "#e1a08b",
    },
  },
});

function App() {


  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState(true);

    useEffect(() => {
      fetch("http://127.0.0.1:4000/products/all")
        .then((res) => res.json())
        .then((data) => {
          if(!data) setFlag(false);
          setProducts(data)} );
    }, []);


const handleAddToCart = (product) => {
  const productInCart = cart.find((item) => item._id === product._id);
  const productFromProducts = products.find((item) => item._id === product._id);

  if (productInCart && productFromProducts) {
    if (productInCart.quantity < productFromProducts.quantity) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      alert(
        `Sorry, you cannot add more than ${productFromProducts.quantity} items to the cart.`
      );
    }
  } else {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
  }
};




  const quantityDecrement = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
    );
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== product._id));
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route
            path="/"
            element={flag ? (<LandingPage products={products} handleAddToCart={handleAddToCart} />) : (<Navigate replace to={"*"} />)}
          />
          <Route path="admin" element={<Admin />} />
          <Route path="about" element={<Bio />} />
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                handleAddToCart={handleAddToCart}
                quantityDecrement={quantityDecrement}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
          <Route path ="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      <Footer2 />
    </ThemeProvider>

  );
}

export default App;
