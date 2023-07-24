import { useState } from 'react'
import './App.css'
import Admin from './components/Admin/Admin'
import ProductCreate from './components/Admin/ProductCreate'
import LandingPage from './components/LandingPage/LandingPage'
import Bio from "./components/Bio/Bio"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/footer/footer"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material"
import Cancel from "./components/Checkout/Cancel"
import Success from "./components/Checkout/Success"

const theme = createTheme( {
  palette: {
    primary: {
      main: "#a04d31",
    },
    secondary: {
      main: "#e1a08b",
    },
  },
})


function App() {
  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="admin" element={<Admin />} />
          <Route path="bio" element={<Bio />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App
