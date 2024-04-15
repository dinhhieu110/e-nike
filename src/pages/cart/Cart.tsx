import React, { useState } from 'react';
import './cart.scss';
import AddedProductCard from '../../components/addedProductCard/AddedProductCard';
import { formatCurrency } from '../../utilities/formatCurrency';
import { useDispatch, useSelector } from 'react-redux';
import {
  Product,
  checkOut,
  getCartSelector,
  getTotalPrice,
} from '../../redux-context/redux-slices/cartSlice';
import { useLocation, useNavigate } from 'react-router-dom';
// import { getProductsSelector } from '../../redux-context/redux-slices/productsSlice';

interface CartProduct extends Product {
  amount: number;
}

function Cart() {
  // Use function from productSlice to get products
  // const products = useSelector(getProductsSelector);
  const cart = useSelector(getCartSelector);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();
  const [address, setAddress] = useState('');
  const navigate = useNavigate();
  const handleCheckout = () => {
    dispatch(checkOut());
    navigate('/cart', { state: address });
  };

  const { state } = useLocation();
  return (
    <div className="cart-container">
      <div className="items-display">
        <div className="note">
          <p>FREE DELIVERY</p>
          <p>Applies to orders of 5.000.000 or more</p>
        </div>
        <div className="basket">
          <p style={{ fontSize: '36px', marginBottom: '20px' }}>Bag</p>
          {cart.length !== 0 ? (
            cart.map((product: CartProduct) => (
              <AddedProductCard key={product.id} {...product} />
            ))
          ) : (
            <p style={{ color: 'red' }}>Your cart is empty, let's buy!</p>
          )}
        </div>
      </div>
      <div className="bill-display">
        <p className="bill-title">Summary</p>
        <div className="total-price">
          <p>Total</p>
          <p className="product-price">{formatCurrency(totalPrice)}</p>
        </div>
        <hr style={{ border: '0.5px solid #f4e0e0', margin: '20px' }} />
        <textarea
          cols={50}
          rows={5}
          placeholder="Enter your address..."
          style={{ padding: '5px' }}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <div className="buttons">
          <button
            style={{ margin: '20px' }}
            className="btn"
            onClick={handleCheckout}
          >
            Checkout
          </button>
          {state && (
            <p style={{ color: 'blue', fontWeight: '600' }}>
              Your order is delivered to {state}{' '}
            </p>
          )}
          {/* <button className="btn">Member Checkout</button> */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
