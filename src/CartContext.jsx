import { createContext, useState } from "react";
import ProductComponent from './components/Products/ProductComponents';


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    //getTotalCost: () => {}
});


export function CartProvider({children}){
    const { products, getProductData } = ProductComponent()
    const [cartProducts, setCartProducts] = useState([])
    console.log(cartProducts);

    function getProductQuantity(id) {
        const quantity = cartProducts.find( product => product._id === id)?.quantity;
        if(quantity === undefined){
            return 0;
        }

        return quantity
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id); 

        if(quantity === 0){
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        _id: id,
                        quantity: 1
                    }
                ]
            )
        }else{
            setCartProducts(
                cartProducts.map(
                    product =>
                    product._id === id
                    ?{ ...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }

    function removeOneFromCart(id){
        const quantity = getProductQuantity(id);

        if (quantity === 1){
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product._id === id
                    ?{ ...product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    }

    function deleteFromCart (id) {
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct._id != id;
            })
        )
    }

   /*  function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem._id)
            console.log(cartItem._id)
            totalCost += (productData.price * cartItem.quantity)
        })
        
        return totalCost
    } */

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        //getTotalCost

    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;