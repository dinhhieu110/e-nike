import React from 'react';
import './addedProductCard.scss';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { formatCurrency } from '../../utilities/formatCurrency';
// import { removeProduct } from '../../redux-context/redux-slices/productsSlice';
import {
  addToCart,
  removeFromCart,
  decreaseFromCart,
} from '../../redux-context/redux-slices/cartSlice';
import { useDispatch } from 'react-redux';
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  amount: number;
}

function AddedProductCard({
  id,
  name,
  description,
  price,
  imgUrl,
  amount,
}: Product) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="addedCard-container">
        <div className="added-product">
          <div className="thumbnail">
            <img src={imgUrl} alt="product_img" width={150} height={150} />
          </div>
          <div className="product-detail">
            <p className="product-name" style={{ fontWeight: '600' }}>
              {name}
            </p>
            <p className="product-desc" style={{ color: '#707072' }}>
              {description}
            </p>
            <p className="product-quantity" style={{ color: '#707072' }}>
              Quantity {amount}
            </p>
            <div className="icons">
              <button
                className="increase"
                onClick={() =>
                  dispatch(addToCart({ id, name, description, price, imgUrl }))
                }
              >
                <AddIcon style={{ color: '#707072' }} />
              </button>
              <button
                className="decrease"
                onClick={() => dispatch(decreaseFromCart(id))}
              >
                <RemoveIcon style={{ color: '#707072' }} />
              </button>
              <button
                className="remove-icon"
                onClick={() => dispatch(removeFromCart(id))}
              >
                <DeleteOutlineOutlinedIcon style={{ color: '#707072' }} />
              </button>
            </div>
          </div>
        </div>

        <div
          className="product-price"
          style={{ fontSize: '22px', fontWeight: '600' }}
        >
          <p> {formatCurrency(price)}</p>
        </div>
      </div>
      <hr style={{ border: '0.5px solid #f4e0e0', margin: '20px 0' }} />
    </>
  );
}

export default AddedProductCard;
