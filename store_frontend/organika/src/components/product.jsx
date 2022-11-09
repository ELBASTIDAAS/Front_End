import "./product.css";
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

const Product
    = (props) => {
        const [quantity, setQuiantity] = useState(1);

        const handleQuantityChange
            = (qty) => {
                console.log("Quantity Changed", qty);
                setQuiantity(qty);
            };

        const getTotal = () => {
            return (quantity * props.data.price).toFixed("2");
        }



        return (
            <div className="product">
                <img src={"/images/" + props.data.image} alt="" />

                <h5>{props.data.title}</h5>

                <div className="prices">
                    <label className="total">{getTotal()}</label>
                    <label className="price">${props.data.price.toFixed("2")}</label>
                </div>


                <div className="controls">
                    <QuantityPicker onChange={handleQuantityChange} />
                    <button className="btn btn-sm btn-info">Add</button>
                </div>
            </div>
        );
    }

export default Product;