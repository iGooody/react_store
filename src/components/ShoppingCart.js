import React from 'react';
import "./ShoppingCart.css"
import americanos from "../images/americanos.png"
import camel from "../images/Camel.png"
import cult from "../images/CULT.png"
import spodnie1 from "../images/spodnie1.png"

const ShoppingCart = () => {
  // Sample shopping items data (can be replaced with your actual data)
  const shoppingItems = [
    {
      id: 1,
      image: americanos,
      brandTitle: 'Brand Title 1',
      title: 'Product Title 1',
      price: '$9.99',
    },
    {
      id: 2,
      image: camel,
      brandTitle: 'Brand Title 2',
      title: 'Product Title 2',
      price: '$19.99',
    },
    {
      id: 3,
      image: cult,
      brandTitle: 'Brand Title 3',
      title: 'Product Title 3',
      price: '$190.99',
    },
    {
      id: 4,
      image: spodnie1,
      brandTitle: 'Brand Title 4',
      title: 'Product Title 4',
      price: '$120.99',
    },
    // ... Add more shopping items here
  ];

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul className="cart-items">
        {shoppingItems.map(item => (
          <li className="cart-item" key={item.id}>
            <img src={item.image} alt="Product" className="product-image" />
            <div className="product-details">
              <h3 className="brand-title">{item.brandTitle}</h3>
              <h4 className="title">{item.title}</h4>
              <p className="price">{item.price}</p>
            </div>
            <div className="product-actions">
              <button className="count-button">-</button>
              <span className="item-count">1</span>
              <button className="count-button">+</button>
              <button className="add-to-basket-button">Add to Basket</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;