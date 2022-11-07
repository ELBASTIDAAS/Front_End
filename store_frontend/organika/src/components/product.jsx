import "./product.css";
import QuantityPicker from './quantityPicker';
function Product(props) {
    return (
        <div className="product">
            <img src={"/images/" + props.data.image} alt="" />
            <h5>{props.data.title}</h5>
            <div className="prices">
            <label>${props.data.price}</label>
            <label>${props.data.price}</label>
            </div>
            <QuantityPicker />

            <button className="btn btn-sm btn-info">Add</button>
        </div>
    );
}

export default Product;