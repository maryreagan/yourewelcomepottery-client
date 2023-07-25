import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  Tabs, Tab } from "@mui/material"
import logo from "/logo.png";
import './Navbar.css'

function Navbar() {

  const [ currentTabValue, setCurrentTabValue ] = useState("")

    const handleTabChange = (e, newValue) => {
    setCurrentTabValue(newValue)
  }

  return (
    <div className = "container">
      <img src={logo} alt="<You're Welcome Potteyr Logo>" className="logo" />
      <h1 className='title'>You're Welcome Pottery</h1>
        <Tabs
            className="tabs"
            value={currentTabValue}
            textColor="primary"
            TabIndicatorProps={{
              style:{
              backgroundColor: "primary.main"
              }
            }}
            onChange={handleTabChange}
          >
      <Tab label="Home" component={Link} to="/">Home</Tab>
      <Tab label="About" component={Link} to="/bio">About</Tab>

          </Tabs>
      <Link className="cart-link" to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar