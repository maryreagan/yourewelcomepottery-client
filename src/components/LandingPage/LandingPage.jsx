import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material'

import ProductCard from './ProductCard'

function LandingPage() {
  
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:4000/products/all", {
      method: "GET",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
    
  }, [])



    return(
      <Grid container spacing={{xs:2, md:4}} columns={{xs:1, sm:4, md: 8}}>

       { products.map((product) => {
          return (
            <Grid key={product._id} item xs={2} md={2}>
              <ProductCard product={product} />
            </Grid>
          );
        })}

      </Grid>
    )
    
     
}

export default LandingPage  