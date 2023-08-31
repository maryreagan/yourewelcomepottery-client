import React, {useState, useEffect} from 'react'
import { useSearchParams, Link } from "react-router-dom"
import "./LandingPage.css"
import ProductCard from './ProductCard'
import { Tabs, Tab } from "@mui/material";
import Typography from "@mui/material/Typography";


function LandingPage({ products, handleAddToCart }) {
  const [currentTabValue, setCurrentTabValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [lines, setLines] = useState([])
  const [refresh] = useState(false)

  const tagFilter = searchParams.get("tag");
  const getLines = () => {
    fetch(`http://localhost:4000/line/`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setLines(data.lines)
    }
    )
  }
  useEffect(() => {
    getLines()
  }, [refresh])
  useEffect(() => {
    setCurrentTabValue(tagFilter || "");
  }, [tagFilter]);

  const handleTabChange = (e, newValue) => {
    setCurrentTabValue(newValue);
  };

  //Filters product by tag name - if there is a matching tag, display filtered products otherwise, all products
  const displayedProducts = tagFilter
    ? products.filter(
        (product) => product.tag.toLowerCase() === tagFilter.toLowerCase()
      )
    : products;
      //if product quantity is 0, show after in stock products
      if(displayedProducts.length > 0){
        displayedProducts.sort((a, b) => {
          if(a.quantity === 0){
            return 1
          }
          else if(b.quantity === 0){
            return -1
          }
          else{
            return 0
          }
        })
      }
      
  return (
    <>
      <nav className="links">
        {/* Link that displays filtered products */}

        <Tabs
          value={currentTabValue}
          textColor="primary"
          TabIndicatorProps={{
            style: {
              backgroundColor: "primary.main",
            },
          }}
          onChange={handleTabChange}
        >

          <Tab label="All Items" value="" component={Link} to="." />
          {lines.map((line, key) => {
            return (
              <Tab
                key={key}
                label={line.name}
                value={line._id}
                component={Link}
                to={`?tag=${line._id}`}
              />
            );
          })}
          {/* <Tab label="Sedona" value="sedona" component={Link} to="?tag=sedona" />
          <Tab label="Black and White" value="bw" component={Link} to="?tag=bw" />
          <Tab label="Fun Guys" value="funguys" component={Link} to="?tag=funguys"/>
          <Tab label="Jo" value="jo" component={Link} to="?tag=jo" /> */}
        </Tabs>
      </nav>
      {displayedProducts.length === 0 && (
      <Typography variant="h5" color="primary" align="center" marginTop="2em"> 
          There are currently no products available in this line. Check back
          later!
        </Typography>
        
      )}

      {/* Maps through displayedProducts and returns a grid with items in ProductCard component */}
      <div className="product-cards-container">
        {displayedProducts.map((product) => {
          return (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
            />
          );
        })}
      </div>
    </>
  );
}

export default LandingPage  