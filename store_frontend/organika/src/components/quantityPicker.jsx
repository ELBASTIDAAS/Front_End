import "./quantityPicker.css";
import { useState } from 'react';

function QuantityPicker() {

    const [quantity, setQuantity] = useState(1);

    function increase() {

        setQuantity(quantity + 1);
    }
    function decrease() {
        if (quantity > 0){
            setQuantity(quantity - 1);
        }
    }
    return (
        <div className="qt-picker">
            <button className="btn btn-sm btn-dark" onClick={increase}>+</button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-dark" disabled={quantity === 1} onClick={decrease}>-</button>
        </div>
    );
}
export default QuantityPicker;