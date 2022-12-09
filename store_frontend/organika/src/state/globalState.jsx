import DataContext from "./dataContext";
import { useState } from "react";

const GlobalState = (props) => {
    let [cart, setCar] = useState([]);
    let [user] = useState({ id: 42, name: "Miguel" });

    const addProductToCart = (product) => {
        //add the product to the cart
        console.log("add product to cart");
        // add product to cart array
        let copy = [...cart];
        let found = false;
        // check if the product is already in the cart
        for (let i = 0; i < cart.length; i++) {
            let exisiting = cart[i];
            if (exisiting._id === product._id) {
                // increase the quantity
                exisiting.quantity += product.quantity;
                found = true;
                return;
            }
        }
        if (!found) {
            copy.push(product);
        }
        setCar(copy);
    };
    const removeProductFromCart = () => {
        //remove the product from the cart
        console.log("remove product from cart");
    }
    return (
        <DataContext.Provider
            value={{
                cart: cart,
                user: user,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart
            }}>
            {props.children}
        </DataContext.Provider>
    );
}
export default GlobalState;