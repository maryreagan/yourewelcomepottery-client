import React, { useState, useEffect } from "react";

function ProductComponent() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:4000/products/all")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    function getProductData(id) {
        let productData = products.find((product) => product._id === id);

        if (productData === undefined) {
            console.log("Product data does not exist for ID:" + id);
            return undefined;
        }

        return productData;
    }

    // Return an object containing both products and the getProductData function
    return {
        products,
        getProductData,
    };
}

export default ProductComponent;
