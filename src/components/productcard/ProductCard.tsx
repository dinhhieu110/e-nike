import React from 'react';

import './productCard.scss';
import { formatCurrency } from '../../utilities/formatCurrency';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux-context/redux-slices/cartSlice';
interface ItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

function ProductCard({ id, name, description, price, imgUrl }: ItemProps) {
  const dispatch = useDispatch();
  return (
    <div className="productCard-container">
      <img src={imgUrl} alt="product_image" />
      <p className="product-title">{name}</p>
      <p className="product-desc">{description}</p>
      <p className="product-price" style={{ color: '#5f5555' }}>
        {formatCurrency(price)}
      </p>
      <button
        className="add-btn"
        onClick={() =>
          dispatch(addToCart({ id, name, description, price, imgUrl }))
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
