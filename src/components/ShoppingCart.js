import React, { useState } from 'react';
import "./ShoppingCart.css"
import Button from './Button';
import { shoppingItems } from '../data/trousers';
import Basket from './Basket';

const ShoppingCart = () => {
  const [basketItem, setBasketItem] = useState([]);

  function addToBasket (item) {
    setBasketItem([...basketItem, item])

  }
  return (
    <div className="shopping-cart">
      <Basket basketItems={basketItem}/>
      <ul className="cart-items">
        {shoppingItems.map(item => (
            <li className="cart-item" key={item.id}>
              <img src={item.image} alt="Product" className="product-image" />
              <div className="product-details">
                <h3 className="brand-title">{item.brandTitle}</h3>
                <h4 className="title">{item.title}</h4>
                <p className="price">{item.price}</p>
              </div>
              <Button data={item} addToBasket={addToBasket} />
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;