import "./product.css";
import QuantityPicker from './quantityPicker';
function Product(){
    return(
        <div className="product">
            <img src="https://picsum.photos/200/300" alt="" />
            <h5>Product title here</h5>
            <label>$10.00</label>
            <label>$20.00</label>
            <QuantityPicker/>

            <button>Add</button>
        </div>
    );
}

export default Product;