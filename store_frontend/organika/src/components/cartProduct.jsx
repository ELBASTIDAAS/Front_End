import "./cartProduct.css";


const CardProduct = (props) => {
    const getTotal = () => {
        let total = props.data.price * props.data.quantity;
        return total.toFixed(2);
    };
    return (
        <div className="card-product">
            <img src={"/images/" + props.data.image} alt="" />

            <div className="description">
                <h5>{props.data.title}</h5>
                <p>{props.data.category}</p>
            </div>
            <label className="price">Price: ${props.data.price.toFixed(2)}</label>
            <label className="quantity">Quantity: {props.data.quantity}</label>
            <label className="total">Total: ${getTotal()}</label>
        </div>
    );
}

export default CardProduct;