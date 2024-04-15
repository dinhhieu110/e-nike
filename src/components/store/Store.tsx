import React from 'react';
import './store.scss';
import items from '../../data/items.json';
import ProductCard from '../productcard/ProductCard';

function Store() {
  return (
    <div className="store-container">
      <h3 className="hot-title">Popular Right Now</h3>
      <div className="products">
        {items.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Store;
