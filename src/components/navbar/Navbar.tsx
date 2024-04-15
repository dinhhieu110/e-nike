import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useSelector } from 'react-redux';
import { getTotalQuantity } from '../../redux-context/redux-slices/cartSlice';
function Navbar() {
  const totalQuantity = useSelector(getTotalQuantity);

  return (
    <div className="two-bar">
      <div className="help-container">
        <div className="logo">
          <img
            src="./imgs/jordan.png"
            alt="nike_image"
            width={60}
            height={30}
          />
        </div>
        <ul className="help-list">
          <li className="help-item">Find a Store</li>
          <li className="help-item">Help</li>
          <li className="help-item">Join Us</li>
          <li className="help-item">Sign in</li>
        </ul>
      </div>
      <div className="navbar-container">
        <div className="logo">
          <img src="./imgs/nike.png" alt="nike_image" width={80} height={40} />
        </div>
        <ul className="navbar-list">
          <li>
            <Link to="/" className="disable-link item">
              Home
            </Link>
          </li>
          <li>
            <Link className="item" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="disable-link item">
              About
            </Link>
          </li>
        </ul>
        <div className="cart-row">
          <div className="search-row">
            <button className="search-btn">
              <SearchOutlinedIcon />
            </button>
            <input type="text" placeholder="Search" />
          </div>
          <div className="heart">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="cart">
            <Link to="/cart" style={{ textDecoration: 'none', color: '#111' }}>
              <div>
                <ShoppingBagOutlinedIcon />
                <span className="total-quantity"> {totalQuantity}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
