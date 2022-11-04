import Product from "../components/product";
import "./catalog.css";
import QuantityPicker from "../components/quantityPicker";

function Catalog() {
    return (
        <div>
            <h1>Catalog</h1>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            

        </div>
    );
}

export default Catalog;