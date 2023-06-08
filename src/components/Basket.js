import React from 'react';
import "./Basket.css"
const Basket = ({ basketItems }) => {
  return (
    <div className="basket">
      <h3>Basket Items:</h3>
      <ul>
        {basketItems.map(item => (
          <li key={item.id} className='basketItems'>
            <img src={item.image} alt='basketItem'></img>
            <span className='basketBrandTitle'>{item.brandTitle}</span>
            <span className='basketTitle'>{item.title}</span>
            <span className='basketPrice'>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basket;