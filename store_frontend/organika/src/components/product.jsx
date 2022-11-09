import "./product.css";
import QuantityPicker from './quantityPicker';


const Product
    = (props) => {

        const handleQuantityChange
            = (qty) => {
                console.log("Quantity Changed", qty);
            }



        return (
            <div className="product">
                <img src={"/images/" + props.data.image} alt="" />

                <h5>{props.data.title}</h5>

                <div className="prices">
                    <label>${props.data.price.toFixed("2")}</label>
                    <label>${props.data.price.toFixed("2")}</label>
                </div>


                <div className="controls">
                    <QuantityPicker onChange={handleQuantityChange} />
                </div>

                <button className="btn btn-sm btn-info">Add</button>
            </div>
        );
    }

export default Product;