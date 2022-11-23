import './admin.css'
import { useState } from 'react';
const Admin = () => {
    const [product, setProducts] = useState({});
    const saveProduct = () => {
        console.log('save product')
    }
    const saveCoupon = () => {
        console.log('save coupon')
    }
    const productValChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        product[name] = value;
    }
    return (
        <div className="admin">
            <h3>Store Administration</h3>
            <div className="content">
                <div className="products-form">
                    <h5>Save product</h5>
                    <div className="my-control">
                        <label htmlFor="">Title</label>
                        <input name="title" onBlur={productValChange} type="text" />
                    </div>
                    <div className="my-control">
                        <label htmlFor="">Image</label>
                        <input name="image" onBlur={productValChange} type="text" />
                    </div>
                    <div className="my-control">
                        <label htmlFor="">Category</label>
                        <input name="category" onBlur={productValChange} type="text" />
                    </div>
                    <div className="my-control">
                        <label htmlFor="">Price</label>
                        <input name="price" onBlur={productValChange} type="number" />
                    </div>
                    <div className="my-control">
                        <button onClick={saveProduct} className="btn btn-dark">Save product</button>
                    </div>
                </div>

                <div className="coupons-form">
                    <h5>Register Coupon Codes</h5>

                    <div className="my-control">
                        <label htmlFor="">Coupon</label>
                        <input type="text" />

                    </div>

                    <div className="my-control">
                        <label htmlFor="">Discount</label>
                        <input type="text" />
                    </div>

                    <div className="my-control">
                        <button onClick={saveCoupon} className="btn btn-dark">Save Coupon</button>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Admin;