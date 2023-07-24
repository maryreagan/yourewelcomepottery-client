import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Tab } from "@mui/material"
import logo from "/pottery.jpg";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Modal } from '@mui/material';
import CartProduct from "../Cart/CartProduct"
import { CartContext } from '../../CartContext'
import './Navbar.css'

function Navbar() {

  const [currentTabValue, setCurrentTabValue] = useState("")

  const handleTabChange = (e, newValue) => {
    setCurrentTabValue(newValue)
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const cart = useContext(CartContext);

  const checkout = async () => {
    await fetch('http://localhost:8080/checkout', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ items: cart.items })
    }).then((res) => {
      return res.json()
    }).then((res) => {
      if (res.url) {
        window.location.assign(res.url);
      }
    })
  }

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
  console.log(productsCount)
  return (
    <div className="container">
      <Box sx={{ flexGrow: 1, pt: 2, pb: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <Search sx={{ flexGrow: 1 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <div style={{ padding: '1em' }}>
              <Badge badgeContent={productsCount} className="white-badge">
                {/* <Button startIcon={<ShoppingCartIcon sx={{ color: 'white', fontSize: 58}}/>}></Button> */}
                <ShoppingCartIcon onClick={handleShow} />
              </Badge>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Modal open={show} onClose={handleClose}>
        <div style={{ position: 'absolute', top: '20%', left: '30%', width: '40%', background: '#fff', padding: '1em' }}>
          <h2>Shopping Cart</h2>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                /* current product is a hook to CartProduct component */
                <CartProduct key={idx} currentProduct={currentProduct} />
              ))}
              {/* <h1>Total: {cart.getTotalCost().toFixed(2)}</h1> */}
              <Button variant='success' onClick={checkout}>Checkout</Button>
            </>
          ) : (
            <h1>Your Cart is Empty</h1>
          )}
          <Button style={{ float: 'right' }} variant='outlined' onClick={handleClose}>Close</Button>
        </div>
      </Modal>
      <img src={logo} alt="<You're Welcome Pottery Logo>" className="logo" />
      <h1 className='title'>You're Welcome Pottery</h1>
      <Tabs
        className="tabs"
        value={currentTabValue}
        textColor="primary"
        TabIndicatorProps={{
          style: {
            backgroundColor: "primary.main"
          }
        }}
        onChange={handleTabChange}
      >
        <Tab label="Home" component={Link} to="/">Home</Tab>
        <Tab label="About" component={Link} to="/bio">About</Tab>

      </Tabs>
    </div>
  );
}

export default Navbar