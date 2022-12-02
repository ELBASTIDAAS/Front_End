import "./product.css";
import QuantityPicker from './quantityPicker';
import DataContext from "../state/dataContext";
import { useState } from 'react';
import { useContext } from "react";

const Product
    = (props) => {
        const addProd = useContext(DataContext).addProductToCart;
        const [quantity, setQuantity] = useState(1);
        const handleAdd = () => {
            //call the context function
            let prodForCart = { ...props.data }
            prodForCart.quantity = quantity;
            addProd(prodForCart);
        }
        const handleQueantityChange = (quantity) => {
            setQuantity(quantity);
        }
        return (
            <div className="product">
                <img src={"/images/" + props.data.image} alt="" />

                <h5>{props.data.title}</h5>

                <div className="prices">
                    <label className="total">${props.data.price}</label>
                    <label className="price">${props.data.price}</label>
                </div>


                <div className="controls">
                    <QuantityPicker onChange={handleQueantityChange} />
                    <button onClick={handleAdd} className="btn btn-outline-dark">Add</button>
                </div>
            </div>
        );
    }

export default Product;