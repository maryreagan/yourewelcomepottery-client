import {useEffect, useState} from 'react'
import { Button} from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./ProductPage.css"

function ProductPage({products, handleAddToCart }) {
    const [product, setProduct] = useState({})
    const [refresh] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(1)
    const [multipleImgs, setMultipleImgs] = useState([])
    //Get id from url
    let id = window.location.pathname.split("/")[2]

    //Get product from database
    let getProduct = async () => {
        let url = `http://localhost:4000/products/${id}`
        let response = await fetch(url, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem('token')
            })
        })
        let data = await response.json()
        setProduct(data)
        setMultipleImgs(data.multipleImgs)
    }
    useEffect(() => {
        getProduct()
    }, [refresh])
    
    const handlePreviousImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex - 1);
    };
    
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
    };


    //Display product

    return (
        <div className='single-product'>
            <div className="productContainer">
            <div id='img-container'>
                            
                            {multipleImgs && multipleImgs.length > 0 && (
                                    <Button className='scroll-btn' onClick={handlePreviousImage} disabled={currentImageIndex === 0} variant ='text' startIcon={<ArrowBackIosIcon />} style={{paddingTop: '4em'}}>
                                    
                                    </Button>
                                )}
                                
                                {currentImageIndex === 0 ? (
                                    <img className="product-img" src={multipleImgs[0]} alt={product.altText} />
                                ):(
                                    <img className="product-img" src={multipleImgs[currentImageIndex - 1]} alt={product.altText} />
                                )}
                                
                            {multipleImgs && multipleImgs.length > 0 && (
                                <Button className='scroll-btn' onClick={handleNextImage} disabled={currentImageIndex === multipleImgs.length} variant='text'  endIcon={<ArrowForwardIosIcon />} style={{paddingTop: '4em'}}>
                                
                                </Button>
                            )}
                            </div>
            <h1 className="productName">{product.productName}</h1>
            <h2 className="productPrice">${product.price}</h2>
            <h3 className="productDesc">{product.description}</h3>
            <Button variant="contained" className="addToCartButton"onClick={() => handleAddToCart(product)} startIcon={<ShoppingCartIcon />}>
            Add to Cart
          </Button>
            </div>


        </div>
    )
}

export default ProductPage