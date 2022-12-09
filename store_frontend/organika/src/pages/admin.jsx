import './admin.css'
import { useEffect, useState } from 'react';
import DataService from '../services/dataService';
const Admin = () => {
    const [product, setProducts] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    const [couponCode, setCouponCode] = useState({});
    const [allCoupons, setAllCoupons] = useState([]);

    const saveProduct = () => {
        console.log(product);
        //send the product to server
        // call the saveProduct function on dataService

        let service = new DataService();
        service.saveProduct(product);

        //add the products to the allProducts array
        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }
    const saveCoupon = () => {
        console.log(couponCode);
        //add the coupon to the allCoupon array
        let copy = [...allCoupons];
        copy.push(couponCode);
        setAllCoupons(copy);
    }
    const productValChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        //copy, modify the copy, set the copy back
        let copy = { ...product };
        copy[name] = value;
        setProducts(copy);
    }
    const couponValChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        //copy, modify the copy, set the copy back
        let copy = { ...couponCode };
        copy[name] = value;
        setCouponCode(copy);
    }

    /**
     * create the fn
     * create an instance of dataservice
     * call the getCatalog method to retrive the list of products
     * set the list of products to the allProducts state variable
     */
    const loadProductsFromServer = async () => {
        let service = new DataService();
        let prods = await service.getCatalog();
        setAllProducts(prods);
    }

    const loadCouponsFromServer = async () => {
        let service = new DataService();
        let coupons = await service.getCoupons();
        setAllCoupons(coupons);
    }
    // when the component is loded/displayed
    useEffect(() => {
        loadProductsFromServer();
        loadCouponsFromServer();
    }, []);

    return (
        <div className="admin">
            <h3 className="rarito">STORE ADMINISTRATION</h3>
            <div className="content">
                <div className="products-form">
                    <h5>Save product</h5>
                    <div className="my-control">
                        <label htmlFor=""><i class="bi bi-code"></i> Title</label>
                        <input name="title" onBlur={productValChange} type="text" placeholder="Introducing the Title" />
                    </div>
                    <div className="my-control">
                        <label htmlFor=""><i class="bi bi-card-image"></i>  Image</label>
                        <input name="image" onBlur={productValChange} type="file" placeholder="Introducing the Image" />
                    </div>
                    <div className="my-control">
                        <label htmlFor="">Category</label>
                        <input name="category" onBlur={productValChange} type="text" placeholder="Introducing the Category" />
                    </div>
                    <div className="my-control">
                        <label htmlFor=""> <i class="bi bi-currency-dollar"></i> Price</label>
                        <input name="price" onBlur={productValChange} type="number" placeholder="Introducing the Price" />
                    </div>
                    <div className="center">
                        <button onClick={saveProduct} className="btn btn-dark">Save product</button>
                    </div>
                    <hr />
                    <h5>- Product List -</h5>
                    <ul>
                        {allProducts.map(p => (
                            <li key={p.title}>
                                {p.title} - ${parseFloat(p.price).toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="coupons-form">
                    <h5>Register Coupon Codes</h5>
                    <div className="my-control">
                        <label htmlFor="" >Coupon</label>
                        <input name="code" type="text" onBlur={couponValChange} placeholder="Introducing the Coupon" />
                    </div>
                    <div className="my-control">
                        <label htmlFor=""> Discount</label>
                        <input name="discount" type="number" onBlur={couponValChange} placeholder="Introducing the Discount.." />
                    </div>
                    <div className="center1">
                        <button onClick={saveCoupon} className="btn btn-dark">Save Coupon</button>
                    </div>
                    <hr />
                    <h5>- Valid Coupon Codes -</h5>
                    <ul>
                        {allCoupons.map((c) => (
                            <li key={c.code}>
                                {c.code} - ${c.discount}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    );
};

// create a coupon state variable
// create a function to save the coupon
//input fields on the coupon form will call your couponValChange
// whan the user click on the save coupon button, console log counpon state variable

export default Admin;