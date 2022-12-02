import './cart.css'
import CartProduct from '../components/cartProduct';
import DataContext from '../state/dataContext';
import { useContext } from 'react';
import { useState } from 'react';

const Cart = () => {
    let [cardProduct, setCardProduct] = useState([]);

    const cart = useContext(DataContext).cart;

    const countProducts = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity;
        }
        return total;
    }
    return (
        <div className='cart'>
            <h1>Cart</h1>
            <h4>You have {countProducts()} products in the cart</h4>

            <div className="products">
                {cart.map(p => <CartProduct key={p._id} data={p} />)}
            </div>
        </div>
    )
};

export default Cart