import { Button } from "@mui/material"
import { CartContext } from "../../CartContext"
import { useContext } from "react"
import ProductComponent from "../Products/ProductComponents"

function CartProduct ({ _id, quantity }){
    const cart = useContext(CartContext)
    //const {_id: id, quantity} = currentProduct
    console.log(_id);
    const {products, getProductData} = ProductComponent()
    const productData = getProductData(_id)

    return (
        <>
            <h3>{productData.productName}</h3>
            <p>{quantity} total</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(_id)}>Remove</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct