import { Button } from "@mui/material"
import { CartContext } from "../../CartContext"
import { useContext } from "react"
import ProductComponent from "../Products/ProductComponents"

function CartProduct ({currentProduct}){
    const cart = useContext(CartContext)
    const {products, getProductData} = ProductComponent()
    const id = currentProduct._id
    const quantity = currentProduct.quantity
    const productData = getProductData(id)

    return (
        <>
            <h3>{productData.productName}</h3>
            <p>{quantity} total</p>
            <p>${(quantity * price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct