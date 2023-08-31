import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import logo from "/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { Badge } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./Navbar.css";

function Navbar({ cart }) {
  const [currentTabValue, setCurrentTabValue] = useState(0);

  const handleTabChange = (e, newValue) => {
    setCurrentTabValue(newValue);
  };
  const theme = useTheme();

  const productsCount = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <div className="checkout-container">
        <Badge badgeContent={productsCount} className="white-badge">
          <IconButton className="cart" component={Link} to="/Cart">
            <ShoppingCartIcon sx={{ color: theme.palette.secondary.main }} />
          </IconButton>
        </Badge>
      </div>
      <div className="container">
        <img src={logo} alt="<You're Welcome Pottery Logo>" className="logo" />


        <Tabs
          className="tabs"
          value={currentTabValue}
          textColor="primary"
          TabIndicatorProps={{
            style: {
              backgroundColor: "primary.main",
            },
          }}
          onChange={handleTabChange}
        >
          <Tab label="Home" component={Link} to="/">
            Shop
          </Tab>
          <Tab label="About" component={Link} to="/about">
            About
          </Tab>
          <Tab label="Contact Us" component={Link} to="/contact">
            About
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Navbar;
